import { Outlet } from 'react-router';
import Footer from '@/components/Footer';
import Header from '@/components/Header';




const MainLayout = () => {

  return (
     <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex grow w-full">
        <div className="max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;