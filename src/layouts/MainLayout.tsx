import { Header } from '@components/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <Header />

      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};
