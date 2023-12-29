import { ContainerProductForm } from '@containers/ContainerProductForm';

export const EditProduct = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Editar Producto
            </h2>

            <ContainerProductForm />
          </div>
        </div>
      </div>
    </div>
  );
};
