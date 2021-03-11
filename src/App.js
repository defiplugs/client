import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [account, setAccount] = useState('');

  if (typeof window.ethereum !== 'undefined') {
    // console.log('MetaMask is installed!');
  }

  useEffect(() => {
    // check already connected account
    window.ethereum.request({ method: 'eth_accounts' }).then((addr) => {
      console.log(addr);
      if (addr.length > 0) {
        setAccount(addr[0]);
      }
    });
  }, []);

  const initiateWallet = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];
    setAccount(account);
  };

  console.log(window.ethereum.selectedAddress);
  console.log(window.ethereum.isConnected());

  return (
    <div className="App">
      <header className="App-header">
        {!account && <button onClick={initiateWallet}>CONNECT WALLET</button>}

        <p>{account}</p>
      </header>
    </div>
  );
}

export default App;
