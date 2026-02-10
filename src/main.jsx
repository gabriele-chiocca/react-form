import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { useState } from 'react';

// Import our custom CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './assets/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
