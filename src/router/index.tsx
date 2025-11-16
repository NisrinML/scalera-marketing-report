import App from "@/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
   // element: <MainLayout />,
    children: [
      //{ path: "/", element: <Home /> },
    ],
  },

]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
