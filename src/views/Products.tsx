import { TProducts } from '@models/Products';
import { ContainerProduct } from '@containers/ContainerProduct';
import { Spinner } from '@components/Spinner';

export const Products: TProducts = props => {
  const { products, loading } = props;

  return (
    <>
      <h2 className='text-center my-5'>Listado de productos</h2>

      <table className='table table-striped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Precio</th>
            <th scope='col' className='text-center'>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map(product => (
            <ContainerProduct key={product.id} {...product} />
          ))}
        </tbody>
      </table>

      {!products.length && (
        <p className='text-center'>No hay productos en existencia</p>
      )}

      {loading && <Spinner />}
    </>
  );
};
