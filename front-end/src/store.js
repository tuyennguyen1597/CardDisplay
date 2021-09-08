import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import binReducer from './reducers/binReducer';
import cardReducer from './reducers/cardReducer'

const reducers = combineReducers({card: cardReducer , bin : binReducer});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

