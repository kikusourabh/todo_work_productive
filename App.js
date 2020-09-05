import React from 'react';
import Home from './src/Screens/Home';
import {Provider} from 'react-redux';
import {store, persistStor} from './src/store/StoreConfig';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};
export default App;
