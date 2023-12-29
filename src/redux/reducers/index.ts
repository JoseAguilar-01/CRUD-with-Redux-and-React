import { productsReducer } from './products';

// Legacy way
// import { combineReducers } from 'redux';
// export const reducer = combineReducers({
//   products: productsReducer,
// });

export const reducers = {
  products: productsReducer,
};
