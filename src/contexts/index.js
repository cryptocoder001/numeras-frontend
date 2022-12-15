/** @format */

import React, {
    createContext,
    useContext,
    useReducer,
    useMemo,
    useEffect,
} from "react";
import { ethers } from "ethers";
import {
    networkParams,
    providers,
    syndicateContract,
    fswlContract
} from "../contracts";
import Web3 from 'web3';
import { toBigNum } from "../utils/utils";

import { NotificationManager } from "react-notifications";
import setAuthToken from './http-common';
import jwt_decode from "jwt-decode";
import axios from "axios";
import {config} from "../config/config";
import { useWeb3React } from '@web3-react/core';


axios.defaults.baseURL = config.BackendURI;

const ApiContext = createContext();

export function useApiContext() {
    return useContext(ApiContext);
}

function reducer(state, { type, payload }) {
    return {
        ...state,
        [type]: payload,
    };
}

const INIT_STATE = {
    user: "",
    signer: "",
    provider: "",
    isLogin: false,
    personal: {},
    basic: {}
};

export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const { activate, deactivate, active, library, account} = useWeb3React();

    useEffect(() => {
        const isLogin = async () => {
            try {
                if (localStorage.getItem("jwtToken") && active === true) {
                    dispatch({
                        type: "isLogin",
                        payload: true,
                    });
                }
                else {
                    dispatch({
                        type: "isLogin",
                        payload: false,
                    });
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        isLogin()
    }, [active])

    useEffect(() => {
        const provider = window.localStorage.getItem("provider");
        if (provider) activate(config[provider]);
      }, []);





    const setProvider = (type) => {
        window.localStorage.setItem("provider", type);
    };

    const switchNetwork = async () => {
        console.log("yeah")
        try {
          await library.provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x5" }]
          });
        } catch (switchError) {
            console.log(switchError)
          if (switchError.code === 4902) {
            try {
              await library.provider.request({
                method: "wallet_addEthereumChain",
                params: [networkParams[5]]
              });
            } catch (error) {
              console.log(error)
            }
          }
        }
      };


    const connect = async (type) => {
        try {
          if (type == 'injected') {
            activate(config.injected, undefined, true, (error) => console.log(error))
            setProvider("injected");
          }
    
          if (type === 'walletconnect') {
            activate(config.walletConnect, undefined, true, (error) => console.log(error));
            setProvider("walletConnect");
          }
    
          if (type === 'coinbaseWallet') {
            activate(config.coinbaseWallet, undefined, true, (error) => console.log(error));
            setProvider("coinbaseWallet");
          }
          await switchNetwork();
        } catch (err) {
          console.log('Connect wallet err', err);
        }
      };

    const register = async (signData) => {
        try {
            var res = await axios.post("/api/users/register", signData);

            if (!res.data.status) {
                NotificationManager.error(res.data.errors, "", 3000);
                return;
            }

            const decoded = jwt_decode(res.data.token);
            if (!localStorage.getItem("jwtToken", res.data.token))
                localStorage.removeItem("jwtToken");
            localStorage.setItem("jwtToken", res.data.token);

            setAuthToken(res.data.token);

            dispatch({
                type: "user",
                payload: decoded,
            });

            NotificationManager.success("WELCOME TO NUMERAS", "", 3000);
        } catch (err) {
            NotificationManager.error("Community Error", "", 3000);
        }
    };

    const login = async (logData) => {
        try {
            const res = await axios.post("/api/users/login", logData);
            if (!res.data.status) {
                NotificationManager.error(res.data.errors, "", 3000);
                return false;
            }

            const decoded = jwt_decode(res.data.token);

            if (!localStorage.getItem("jwtToken", res.data.token))
                localStorage.removeItem("jwtToken");
            localStorage.setItem("jwtToken", res.data.token);

            setAuthToken(res.data.token);

            dispatch({
                type: "user",
                payload: decoded,
            });
            dispatch({
                type: "isLogin",
                payload: true,
            });

            NotificationManager.success("welcome to numeras", "", 3000);
            return true;
        } catch (err) {
            console.log( err)
            NotificationManager.error("Community Error", "", 3000);
        }
    };

    const logout = () => {
        try{
            window.localStorage.setItem("provider", undefined);
            deactivate()
            localStorage.removeItem("jwtToken");
            dispatch({
                type: "isLogin",
                payload: false,
            });
            dispatch({
                type: "user",
                payload: "",
            });
        }
        catch(err){
            console.log(err)
        }
    }


    const setInfo = async (index, info) => {
        if (index === 0) {
            dispatch({
                type: "personal",
                payload: { ...info, account: account }
            })
        }
        if (index === 1) {
            dispatch({
                type: "basic",
                payload: { ...info, account: account }
            })
        }
        if (index === 4) {
            try {
                const signedFswl = await fswlContract.connect(library.getSigner());
                const signedSyndicate = await syndicateContract.connect(library.getSigner());
                var tx = await signedFswl.approve(syndicateContract.address, toBigNum(100, 18));
                await tx.wait();
                tx = await signedSyndicate.mintItem(account, 100, "https://github.com");
                await tx.wait();
                var res = await axios.post("/api/syndicates/create", state.basic);
            } catch (err) {
                console.log(err);
            }
        }
    }

    const getAllSyndicates = async () => {
        const syndicates = await axios.post("/api/syndicates/get-all");
        if (syndicates)
            return syndicates.data.result;
    }

    return (
        <ApiContext.Provider
            value={useMemo(
                () => [
                    state,
                    {
                        connect,
                        register,
                        login,
                        logout,
                        setInfo,
                        getAllSyndicates
                    },
                ],
                [state]
            )}
        >
            {children}
        </ApiContext.Provider>
    );
}