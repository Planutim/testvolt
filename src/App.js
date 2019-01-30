import React from 'react'
import { Navbar } from 'react-bootstrap';
import AppHeader from './AppHeader'

import {render} from 'react-dom'
import {hot} from 'react-hot-loader'
import Span from './Span.js'
import Header from './Header'
import Brand from './Brand'
import Text from './Text'
import FormNav from './Formnav';
import NavbarThemes from './NavbarThemes'
import Customers from './Customers'
import InvoiceForm from './InvoiceForm'

import './App.css'



const App = ()=>(
  <div>
    <AppHeader />
    <InvoiceForm />
  </div>
)

render(<App/>, document.getElementById('app-root'))