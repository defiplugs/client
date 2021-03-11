import React, { useState, useEffect } from 'react';

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
    <div>
      {!account && <button onClick={initiateWallet}>CONNECT WALLET</button>}

      <p>{account}</p>
    </div>
  );
}

export default Dashboard;
