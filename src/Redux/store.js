import { createStore, applyMiddleware } from "redux";
import { MyReducer } from "./reducer";
import thunk from "redux-thunk";
import { } from 'react-redux';
import logger from 'redux-logger';

export const store = createStore(MyReducer, applyMiddleware(thunk, logger));