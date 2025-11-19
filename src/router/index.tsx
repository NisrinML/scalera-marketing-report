
import MainLayout from "@/layouts/MainLayout";
import CompanyInfo from "@/pages/CompanyInfo";
import Home from "@/pages/Home";
import QuestionPage from "@/pages/QuestionPage";
import UserInfo from "@/pages/UserInfo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/user-information", element: <UserInfo /> },
      { path: "/company-information", element: <CompanyInfo /> },
      { path: "/questions", element: <QuestionPage /> },
    ],
  },

]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
