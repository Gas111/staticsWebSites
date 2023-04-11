import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'

var clientId =
  '1064848985718-up29u3ugkgo3fki4nso39m3h1r6th9qv.apps.googleusercontent.com'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <GoogleOAuthProvider clientId={clientId}>
          <App />
        </GoogleOAuthProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
