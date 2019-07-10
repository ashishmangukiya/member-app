import React from 'react';
import './App.css';
import ReduxThunk from 'redux-thunk';
import {AppRouter} from './components/routerContainer/router';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index'
import { Provider } from 'react-redux';
const middlewares = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer,middlewares)
function App() {
  return (
    <Provider store={store}>
    <AppRouter></AppRouter>
    </Provider>
  );
}

export default App;
