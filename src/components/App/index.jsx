import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppHeader from '../AppHeader';
import ViewPage from '../ViewPage';
import AppFooter from '../AppFooter';

import './index.css';

const App = () => (
  <Router>
    <div className="map-application">
      <AppHeader stylization="map-aplication-header" />
      <div className="map-application-content">
        <div className="content-container">
          <ViewPage />
        </div>
      </div>
      <AppFooter stylization="map-application-footer" />
    </div>
  </Router>
);

export default App;
