import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Toaster 
      toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
        },
        success: {
          duration: 3000,
          style: {
            background: '#f0f0f0',
            color: '#000',
          },
        },
        error: {
          duration: 3000,
          style: {
            background: '#fff',
            color: '#f44336',
          },
        },
      }}
    />
  </Provider>
)
