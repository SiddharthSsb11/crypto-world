import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CryptoProvider from './store/CryptoProvider';
import { BrowserRouter } from "react-router-dom";
import 'react-alice-carousel/lib/alice-carousel.css';


ReactDOM.render( 
  <CryptoProvider>  <BrowserRouter> <App /> </BrowserRouter> </CryptoProvider>, document.getElementById('root')
);


