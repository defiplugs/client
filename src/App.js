import './App.css';

function App() {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }

  const initiateWallet = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];
    console.log(account);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={initiateWallet}>CONNECT WALLET</button>
      </header>
    </div>
  );
}

export default App;
