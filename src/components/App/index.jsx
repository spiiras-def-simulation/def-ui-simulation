import React from 'react';

import AppHeader from '../AppHeader';
import MapPage from '../MapPage';

import './index.css';

const App = () => (
  <div className="map-application">
    <AppHeader stylization="map-aplication-header" />
    <div className="map-application-content">
      <div className="content-container">
        <MapPage />
      </div>
    </div>
  </div>
);

export default App;
