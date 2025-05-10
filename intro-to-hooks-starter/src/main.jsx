import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UseStateDemo } from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="state-demo" element={<UseStateDemo />} />
          <Route path="effect-demo" element={<UseEffectDemo />} />
          <Route path="effect-demo/:startingCount" element={<UseEffectDemo />} />
          <Route path="*" element={<div>You have been splatted</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
