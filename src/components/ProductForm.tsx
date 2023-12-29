import { TProductForm } from '@models/ProductForm';
import { Form } from './Form';
import { Spinner } from './Spinner';

export const ProductForm: TProductForm = props => {
  const { error, loading, ...restProps } = props;

  return (
    <Form {...restProps}>
      <button
        type='submit'
        className='text-uppercase font-weight-bold btn btn-primary d-block w-100'
      >
        {loading ? <Spinner /> : 'Agregar'}
      </button>
    </Form>
  );
};
