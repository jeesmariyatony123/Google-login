import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="454603496206-uh1ausbdqgbnsf9i3pveordbropkcoeb.apps.googleusercontent.com">;
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
