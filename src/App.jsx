import './App.scss';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
