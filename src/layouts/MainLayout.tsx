import { Outlet } from 'react-router';

const MainLayout = () => { 

  return (
     <div className="min-h-screen flex flex-col">
     
          <Outlet />
        </div>
     
  );
};

export default MainLayout;