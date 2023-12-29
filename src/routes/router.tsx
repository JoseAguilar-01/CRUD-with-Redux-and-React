import { createBrowserRouter } from 'react-router-dom';
import { productsRoutes } from './Products';

export const router = createBrowserRouter([...productsRoutes]);
