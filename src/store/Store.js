import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { geoReducer } from './Reducer'
import createSagaMiddleware from 'redux-saga';
import dataApiSaga from './DataSaga'

const geoSagasMW = createSagaMiddleware();
const store = createStore(geoReducer, applyMiddleware(geoSagasMW))
geoSagasMW.run(dataApiSaga)

export default store;