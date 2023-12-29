import { RouteObject } from 'react-router-dom';
import { EditProduct } from '@views/EditProduct';
import { MainLayout } from '@layouts/MainLayout';
import { NewProduct } from '@views/NewProduct';
import { ContainerProducts } from '@containers/ContainerProducts';

export const productsRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ContainerProducts />,
      },
      {
        path: 'products/new',
        element: <NewProduct />,
      },
      {
        path: 'products/:id/edit',
        element: <EditProduct />,
      },
    ],
  },
];
