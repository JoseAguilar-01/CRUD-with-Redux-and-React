import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between align-items-center mb-4'>
      <div className='container'>
        <h1>
          <Link to='/' className='text-light'>
            CRUD - React, Redux, REST API & Axios
          </Link>
        </h1>
      </div>

      <Link
        to='/products/new'
        className='btn btn-danger display-block new-post d-md-inline-block'
      >
        Agregar Producto +
      </Link>
    </nav>
  );
};
