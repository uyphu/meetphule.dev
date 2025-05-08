import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
