import React from 'react';
import './App.css';
import CoinsList from './components/coins_list';

function App() {
  return (
    <div>
      <h1 className="ml-5 mt-3">Coins alerter</h1>
      <div>
        <CoinsList lang={"EUR"}/>
      </div>
    </div>
  );
}

export default App;
