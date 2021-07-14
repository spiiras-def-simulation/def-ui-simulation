import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import registerServiceWorker from './registerServiceWorker';

import client from './apollo';
import App from './components/App';

import '@fortawesome/fontawesome-free/css/all.css';

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('appSimulation')
);

registerServiceWorker();
