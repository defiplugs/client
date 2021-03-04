import './App.css';

function App() {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }
  const initiateWallet = () => {
    window.ethereum.request({ method: 'eth_requestAccounts' });
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
