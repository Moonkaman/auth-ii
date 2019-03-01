import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import './index.css';
import App from './App';

ReactDOM.render(<Router><SnackbarProvider maxSnack={3}><App /></SnackbarProvider></Router>, document.getElementById('root'));
