import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [account, setAccount] = useState('');

  if (typeof window.ethereum !== 'undefined') {
    // console.log('MetaMask is installed!');
  }

  useEffect(() => {
    //console.log(window.ethereum.isConnected());
    // if (window.ethereum.isConnected()) {
    //   console.log('conn');
    //   setAccount(window.ethereum.selectedAddress);
    // }
    // console.log(window.ethereum.isConnected());
    window.ethereum
      .request({
        method: 'eth_requestAccounts',
      })
      .then((account) => {
        setAccount(account);
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
