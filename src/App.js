import React, { Suspense, useState, useEffect, lazy } from 'react';
import logo from './logo.svg';
import './App.css';

const MyComponent = lazy(() => import('./MyComponent'));

export const useDocumentTitle = val => {
  useEffect(() => {
    document.title = val;
  });
};

const App = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<div color="white">Loading...</div>}>
          <img src={logo} className="App-logo" alt="logo" />
        </Suspense>
        <p>
          <br />
          <button onClick={() => setCount(count - 1)}>-</button>
          {count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </p>
        <MyComponent />
      </header>
    </div>
  );
};

export default App;
