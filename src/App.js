import React from 'react';
import './scss/App.scss';
import Reviews from './Reviews';


function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>Our Reviews</h1>
      </div>
      <Reviews />
    </div>
  );
}

export default App;
