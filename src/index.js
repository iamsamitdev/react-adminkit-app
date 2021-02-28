import React from 'react'
import ReactDOM from 'react-dom'
// import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/js/app'

ReactDOM.render(
  <React.StrictMode>
      <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)