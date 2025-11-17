
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },

]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
