import React, { Suspense, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const useDocumentTitle = title => {
  useEffect(() => (document.title = title));
};

const App = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <Suspense fallback={logo} maxDuration={300}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <br />
            <button onClick={() => setCount(count - 1)}>-</button>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </p>
        </header>
      </div>
    </Suspense>
  );
};

export default App;
