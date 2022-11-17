import React, { useEffect } from 'react';
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { NotificationContainer } from "react-notifications";
import 'react-notifications/lib/notifications.css';
import ContextProvider from './contexts';
import Router from './routers';

import './App.css';
import './style.scss';

function App() {

	return (
		<>
			<ContextProvider>
				<Router />
			</ContextProvider>
			<NotificationContainer />
		</>
	);
}

export default App;
