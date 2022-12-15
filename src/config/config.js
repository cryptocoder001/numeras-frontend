import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const BackendURI = "http://localhost:5000";

const infuraId = "https://rinkeby.infura.io/v3/2995b018932448deba21b79c1dcc7587";

const injected = new InjectedConnector();

const walletconnect = new WalletConnectConnector({
  infuraId: infuraId,
  bridge: "https://bridge.walletconnect.org",
  rpc: { 4: infuraId },
  qrcode: true,
  pollingInterval: 8000
});

const walletlink = new WalletLinkConnector({
  url: infuraId,
  appName: "numeras"
});


export const config = {
    BackendURI: BackendURI,
    injected: injected,
    walletConnect: walletconnect,
    coinbaseWallet: walletlink
};