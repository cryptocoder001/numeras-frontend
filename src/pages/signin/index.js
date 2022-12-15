import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ethers } from "ethers";
import "./sign.css";
import { useApiContext } from '../../contexts';
import {useWeb3React} from '@web3-react/core';

function Signin() {
    const history = useHistory();
    const { library, account, active} = useWeb3React();
    const [state, { connect, login, logout }] = useApiContext();
    const [signstatus, setSignstatus] = useState({
        msg: "Welcome to a Numeras",
        name: "",
        email: "",
        signature: "",
    });

    // useEffect(()=>{
    //     if(active)
    //     handleSign();
    // },[active])


    const handleConnect = async (type) => {
        try {
            if(!active)
                await connect(type);
            else
                handleSign();
        }
        catch(err){
            logout();
        }
    }

    const handleSign = async() =>{
        try{
            if (!library) return;
            const signatureValue = await library.provider.request({
                method: "personal_sign",
                params: [signstatus.msg, account]
              });
            setSignstatus({ ...signstatus, signature: signatureValue })
            const result = await login({ msg: signstatus.msg, signature: signatureValue});
            if(result)
            history.push("/");
        } catch(err){
            console.log(err)
        }
    }

    return (
        <div className="signin-container">
            <div className="row">
                <div className="col-12 mt-5">
                    <div className="x-font7 mt-5 tc">
                        Sign in
                    </div>
                    <div className="x-font5 mt-2 tc">
                        Don't have an account? <span className='bule-color cu-po' onClick={() => history.push("/signup")} >sign up</span>
                    </div>
                    <div className='wallet-container mt-3'>
                        <div className='wallet-list' onClick={()=>handleConnect("coinbaseWallet")}>
                            <img src='./images/wallet/coinbase.png' alt='coinbaseWallet' />
                            <p className="wallet-text">Connect with Coinbase</p>
                        </div>
                        <div className='wallet-list' onClick={()=>handleConnect("injected")}>
                            <img src='./images/wallet/metamask.png' alt='injected' />
                            <p className="wallet-text">Connect with MetaMask</p>
                        </div>
                        <div className='wallet-list' style={{ borderBottom: 'none' }} onClick={()=>handleConnect("walletconnect")}>
                            <img src='./images/wallet/walletconnect.png' alt='walletconnect' />
                            <p className="wallet-text">Connect with WalletConnect</p>
                        </div>
                    </div>
                    <div className='po-re'>
                        <div className="mt-2">
                            <div className='po-re w50'>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '68px' }}></div>
        </div>
    )
}

export default Signin;