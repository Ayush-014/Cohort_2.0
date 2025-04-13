import React from "react"
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import store from "./store/store.js"
import ReactDOM from "react-dom/client"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>
)
