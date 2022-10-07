import React, { useState } from 'react'
// import logo from './logo.svg';
import './App.css'


const App = () => {
  const [ deviceOS, setDeviceOS ] = useState<string>('')

  const detecDeviceOS = () => {
    let userAgent = navigator.userAgent || navigator.vendor
    let result = 'web'
    if (/android/i.test(userAgent)) {
      result = "Android"
    }
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      result = "iOS"
    }

    setDeviceOS(result)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>cra-pwa-v03</div>
        <a href='https://apps.apple.com/tw/app/'
          target='_blank'
          rel="noreferrer noopener"
        >{`[test]iOS app store link`}</a>
        <div>
          <button onClick={() => detecDeviceOS()}>Detec device OS</button>
          <p>{deviceOS}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
