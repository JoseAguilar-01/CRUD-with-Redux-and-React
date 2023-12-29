import { ContainerProductForm } from '@containers/ContainerProductForm';

export const NewProduct = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Agregar Nuevo Producto
            </h2>

            <ContainerProductForm />
          </div>
        </div>
      </div>
    </div>
  );
};
