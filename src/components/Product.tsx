import { edit_icon, trash_icon } from '@assets/images';
import { TProduct } from '@models/Product';
import { Link } from 'react-router-dom';

export const Product: TProduct = props => {
  const { id, name, price, handleDelete } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>${price}</td>
      <td className='text-center'>
        <button className='btn px-1 py-0' onClick={handleDelete}>
          <img src={trash_icon} alt='trash-icon.svg' width={20} height={20} />
        </button>

        <Link to={`/products/${id}/edit`} className='btn ml-3 px-1 py-0'>
          <img src={edit_icon} alt='edit-icon.svg' width={20} height={20} />
        </Link>
      </td>
    </tr>
  );
};
