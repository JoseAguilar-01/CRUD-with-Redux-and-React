import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Product } from '@components/Product';
import { TContainerProduct } from '@models/Product';
import { GlobalStates } from '@models/redux/States';
import { deleteProductAction } from '@redux/actions/products';
import Swal from 'sweetalert2';

export const ContainerProduct: TContainerProduct = props => {
  const dispatch = useDispatch();

  const { products } = useSelector<GlobalStates>(
    states => states.products,
  ) as GlobalStates['products'];

  const { id } = props;

  const handleDeleteProduct = () => {
    Swal.fire({
      title: 'Eliminar Producto',
      html: '¿Estás seguro de querer eliminar este producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#ff0000',
    }).then(result => {
      if (result.isConfirmed) {
        // Delete product
        dispatch<any>(
          deleteProductAction({
            currentProducts: products,
            productID: id,
            onSuccess: handleSuccess,
            onError: handleError,
          }),
        );
      }
    });
  };

  const handleSuccess = () => {
    toast.success('Producto eliminado exitosamente', {
      hideProgressBar: true,
    });
  };

  const handleError = () => {
    toast.error('Ocurrió un error al eliminar el producto', {
      hideProgressBar: true,
      theme: 'colored',
    });
  };

  return <Product {...props} handleDelete={handleDeleteProduct} />;
};
