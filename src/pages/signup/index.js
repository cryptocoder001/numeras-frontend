import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ethers } from "ethers";
import "../signin/sign.css";
import { useApiContext } from '../../contexts';
import {useWeb3React} from '@web3-react/core';


function Signup() {
    const { library, account, active} = useWeb3React();
    const [state, { connect, register }] = useApiContext();
    const history = useHistory();
    const [signstatus, setSignstatus] = useState({
        msg: "Welcome to a Numeras",
        name: "",
        email: "",
        signature: "",
    });
    const [isConnect, setIsConnect] = useState(false);

    useEffect(()=>{
        if(active){
            setIsConnect(true);
        }else{
            setIsConnect(false);
        }
    },[active])

    const handleConnect = async (type) =>{
        try{
            await connect(type);
        }
        catch(err){
            console.log(err);
        }
    }

    const handleSignUp = async () =>{
        try{
            if (!library&&!active) return;
            const signatureValue = await library.provider.request({
                method: "personal_sign",
                params: [signstatus.msg, account]
              });
            setSignstatus({ ...signstatus, signature: signatureValue })
            await register({ msg: signstatus.msg, signature: signatureValue, name: signstatus.name, email: signstatus.email });
            history.push("/signin");
        }
        catch(err){
            console.log(err)
        }
    }

    const Wallets = (
        <div className='wallet-container mt-3'>
            <div className='wallet-list' onClick={()=>handleConnect("coinbaseWallet")}>
                <img src='./images/wallet/coinbase.png' alt='coinbaseWallet'/>
                <p className="wallet-text">Connect with Coinbase</p>
            </div>
            <div className='wallet-list' onClick={()=>handleConnect("injected")}>
                <img src='./images/wallet/metamask.png' alt='injected' />
                <p className="wallet-text">Connect with MetaMask</p>
            </div>
            <div className='wallet-list' onClick={()=>handleConnect("walletconnect")}>
                <img src='./images/wallet/walletconnect.png' alt='walletconnect' />
                <p className="wallet-text">Connect with WalletConnect</p>
            </div>
        </div>
    )

    const UserForm = (
        <div>
            <div className="mt-4">
                <input className="x-input2" placeholder="Please enter your name" value={signstatus.name} onChange={(e) => setSignstatus({ ...signstatus, name: e.target.value })} />
            </div>
            <div className="mt-4">
                <input className="x-input2" placeholder="Please enter your mail" value={signstatus.email} onChange={(e) => setSignstatus({ ...signstatus, email: e.target.value })} />
            </div>
            <div className="mt-4 dis-f" style={{ justifyContent: 'center' }}>
                <button class="btn btn-main btn-border font-13 my-3 wei-500 w30 mobile-width100 " onClick={handleSignUp}>Signup</button>
            </div>
        </div>
    )

    return (
        <div className="signin-container">
            <div className="row">
                <div className="col-12 mt-5">
                    <div className="x-font7 mt-5 tc">
                        Sign up
                    </div>
                    <div className="x-font5 mt-2 tc">
                        Already have account? <span className='bule-color cu-po' onClick={() => history.push("/signin")} >sign in</span>
                    </div>
                    {
                        !isConnect ?
                            (Wallets)
                            :
                            (UserForm)
                    }

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

export default Signup;