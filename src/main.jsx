import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./style/general.css"
import "./style/navbar.css"
import "./style/sidebar.css"
import "./style/login.css"
import "./style/movie.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
