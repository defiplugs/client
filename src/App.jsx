import './App.scss';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

function App() {
  const { ethereum } = window;
  const [account, setAccount] = useState('');

  useEffect(() => {
    //hide button if account already connected
    ethereum.request({ method: 'eth_accounts' }).then((addr) => {
      if (addr.length > 0) {
        setAccount(addr[0]);
      }
    });
  }, []);

  const initAccount = (acc) => {
    setAccount(acc);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Topbar initAccount={initAccount} />
        <Sidebar />
        {account ? (
          <section className="main-section">
            <Main account={account} />
          </section>
        ) : (
          <div className="connect-notif">
            <p>Please connect your wallet</p>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
