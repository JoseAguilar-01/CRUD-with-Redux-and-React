import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';

// Legacy way
// export const store = legacy_createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk),
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//       (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
//   ),
// );

export const store = configureStore({
  reducer: reducers,
});
