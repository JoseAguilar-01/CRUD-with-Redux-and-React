import { GlobalStates } from '@models/redux/States';
import { getProductsAction } from '@redux/actions/products';
import { Products } from '@views/Products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export const ContainerProducts = () => {
  const dispatch = useDispatch();

  const { products, error, loading } = useSelector<GlobalStates>(
    states => states.products,
  ) as GlobalStates['products'];

  useEffect(() => {
    dispatch<any>(getProductsAction());
  }, []);

  useEffect(() => {
    if (error) {
      toast.error('Error al cargar los productos', {
        hideProgressBar: true,
        autoClose: false,
        theme: 'colored',
      });
    }
  }, [error]);

  return <Products products={products} loading={loading} />;
};
