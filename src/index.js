import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createRoot } from 'react-dom';

// render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />);
