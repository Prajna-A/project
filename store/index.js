import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import NobelReducer from './nobel-reducer'
export const store=new createStore(NobelReducer,applyMiddleware(thunk));
