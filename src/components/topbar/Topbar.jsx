import React, { useState, useEffect } from 'react';

import './Topbar.scss';

function Topbar() {
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
    <div className="topbar">
      <div className="head-section">
        <p>DEFIPLUGS</p>
        <button className="connect-wallet" onClick={initiateWallet}>
          {account ? addressTrim(account) : 'CONNECT WALLET'}
        </button>
      </div>
    </div>
  );
}

export default Topbar;
