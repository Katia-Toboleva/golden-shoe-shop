import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Page } from '@components';

import { store } from './state';

import './reset.scss';
import i18n from './translations/config';

const App = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
);

export default App;
