import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

// Saga middleware oluşturma
const sagaMiddleware = createSagaMiddleware();

// Store oluşturma ve saga middleware'i ekleme
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// Saga'ları başlatma
sagaMiddleware.run(rootSaga);

export default store;