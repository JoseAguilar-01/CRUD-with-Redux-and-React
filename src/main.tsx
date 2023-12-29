import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { router } from './routes/router';
import { store } from './redux/store';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const element = document.getElementById('root')!;
const root = createRoot(element);

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </StrictMode>,
);
