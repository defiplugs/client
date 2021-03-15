import React, { useState, useEffect } from 'react';
import Settings from '../settings/Settings';

import './Dashboard.scss';

function Dashboard() {
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

  const initiateWallet = async () => {
    if (account) {
      return;
    }
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    const acc = accounts[0];
    setAccount(acc);
  };

  const addressTrim = (str) => {
    const trimmedStr = str.slice(0, 6) + '...' + str.slice(38);
    return trimmedStr;
  };

  return (
    <div className="dashboard">
      <div className="head-section">
        <p>DEFIPLUGS</p>
        <button className="connect-wallet" onClick={initiateWallet}>
          {account ? addressTrim(account) : 'CONNECT WALLET'}
        </button>
      </div>
      {account ? (
        <section className="main-section">
          <Settings accounts={account} />
        </section>
      ) : (
        <p className="connect-notif">Please connect your wallet</p>
      )}
    </div>
  );
}

export default Dashboard;
