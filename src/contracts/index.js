import { ethers } from "ethers";
import Contrats from "./contracts/5.json";


const supportChainId = 5;

const networkParams = {
    supportChainId:{
            chainId: "0x05",
            rpcUrls: ["https://goerli.infura.io/v3/"],
            chainName: "Goerli Testnet",
            nativeCurrency: { name: "Ethereum", decimals: 18, symbol: "ETH" },
            blockExplorerUrls: ["https://goerli.etherscan.io"],
            iconUrls: ["https://d33wubrfki0l68.cloudfront.net/10c3a479c1fbfbdb6a62952ba1b1d797d8e6abf4/dc925/static/6b935ac0e6194247347855dc3d328e83/cef8b/eth-diamond-black.png"]
    }
}

const networks = {
    5:{
        chainId: `0x${Number(5).toString(16)}`,
        chainName: "Goerli Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: ["https://goerli.infura.io/v3/"],
        blockExplorerUrls: ["https://goerli.etherscan.io/"]
    },
    137: {
        chainId: `0x${Number(137).toString(16)}`,
        chainName: "Polygon Mainnet",
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
        },
        rpcUrls: ["https://polygon-rpc.com/"],
        blockExplorerUrls: ["https://polygonscan.com/"]
    },
    4002: {
        chainId: `0x${Number(4002).toString(16)}`,
        chainName: "Fantom Testnet",
        nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
            decimals: 18
        },
        rpcUrls: ["https://ftm-test.babylonswap.finance"],
        blockExplorerUrls: ["https://testnet.ftmscan.com/"]
    },
    250: {
        chainId: `0x${Number(56).toString(16)}`,
        chainName: "Binance Smart Chain Mainnet",
        nativeCurrency: {
            name: "Binance Chain Native Token",
            symbol: "BNB",
            decimals: 18
        },
        rpcUrls: [
            "https://bsc-dataseed1.binance.org",
            "https://bsc-dataseed2.binance.org",
            "https://bsc-dataseed3.binance.org",
            "https://bsc-dataseed4.binance.org",
            "https://bsc-dataseed1.defibit.io",
            "https://bsc-dataseed2.defibit.io",
            "https://bsc-dataseed3.defibit.io",
            "https://bsc-dataseed4.defibit.io",
            "https://bsc-dataseed1.ninicoin.io",
            "https://bsc-dataseed2.ninicoin.io",
            "https://bsc-dataseed3.ninicoin.io",
            "https://bsc-dataseed4.ninicoin.io",
            "wss://bsc-ws-node.nariox.org"
        ],
        blockExplorerUrls: ["https://bscscan.com"]
    }
};

const providers = {
    5: new ethers.providers.JsonRpcProvider(networks[supportChainId].rpcUrls),
}

const fswlContract = new ethers.Contract(Contrats.fswl.address, Contrats.fswl.abi);
const syndicateContract = new ethers.Contract(Contrats.syndicate.address, Contrats.syndicate.abi);

const fswlABI = Contrats.fswl.abi;
const SyndicateABI = Contrats.syndicate.abi;

export {
    networkParams,
    providers, supportChainId,networks,
    fswlABI, SyndicateABI, fswlContract, syndicateContract
}