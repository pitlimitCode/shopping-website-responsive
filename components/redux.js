import {combineReducers} from "redux";
import {legacy_createStore as createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const SET_ISLOGIN = 'SET_ISLOGIN';
const initialState = { isLogin: false };

const auth = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_ISLOGIN:
      return { ...state, isLogin: payload };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth,
}); 

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(
  persistConfig, 
  rootReducer
)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store, {});