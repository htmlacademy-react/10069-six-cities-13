import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { Setting } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const { PlacesCount, PlacesOnPage } = Setting;

root.render(
  <React.StrictMode>
    <App
      placesCount = { PlacesCount }
      placesOnPage = { PlacesOnPage }
    />
  </React.StrictMode>
);
