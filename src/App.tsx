import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  
  const iOSOpenApp = () => {
    let before = new Date().valueOf()
    setTimeout(function () {
      let after = new Date().valueOf()
      if(after - before > 2000)
        return
      window.location.href = 'https://apps.apple.com/tw/app/%E9%AB%98%E9%9B%84%E6%B8%AF%E4%BA%A4%E9%A0%98%E6%AB%83%E9%A0%90%E5%A0%B1%E7%B3%BB%E7%B5%B1/id1525326425'
    }, 1000);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href='https://apps.apple.com/tw/app/%E9%AB%98%E9%9B%84%E6%B8%AF%E4%BA%A4%E9%A0%98%E6%AB%83%E9%A0%90%E5%A0%B1%E7%B3%BB%E7%B5%B1/id1525326425'
          target='_blank'
          rel="noreferrer noopener"
        >test open ios link</a>
      </header>
    </div>
  );
}

export default App;
