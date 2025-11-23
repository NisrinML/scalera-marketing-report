import ScrollToTop from '@/components/ScrollToTop';
import { Outlet } from 'react-router';

const MainLayout = () => { 

  return (
     <div className="min-h-screen flex flex-col overflow-hidden">
     <ScrollToTop/>
          <Outlet />
        </div>
     
  );
};

export default MainLayout;