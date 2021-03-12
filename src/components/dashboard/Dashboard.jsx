import React, { useState, useEffect } from 'react';

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
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];
    setAccount(account);
  };
  return (
    <div className="dashboard">
      <div className="head-section">
        <button>LOGO</button>
        {!account && (
          <button className="connect-wallet" onClick={initiateWallet}>
            CONNECT WALLET
          </button>
        )}
      </div>

      <p>{account}</p>
    </div>
  );
}

export default Dashboard;
