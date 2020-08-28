import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'redux/reducers';

const bindMiddlewares = middlewares => {
  if(process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middlewares));
  }
  return applyMiddleware(...middlewares);
}

const store = createStore(rootReducer, bindMiddlewares([]));

export default store;