
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import UserInfo from "@/pages/UserInfo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/user-information", element: <UserInfo /> },
    ],
  },

]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
