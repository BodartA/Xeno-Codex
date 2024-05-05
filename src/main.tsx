import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

export const firebaseApp = initializeApp({

  apiKey: "AIzaSyDsRTs6J_ibHCIYLYFahCRi1QxzH1frPzo",
  authDomain: "xeno-codex.firebaseapp.com",
  projectId: "xeno-codex",
  storageBucket: "xeno-codex.appspot.com",
  messagingSenderId: "761825618027",
  appId: "1:761825618027:web:2c662cec99710a6588292e",
  measurementId: "G-WQT0M73MTD"
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
