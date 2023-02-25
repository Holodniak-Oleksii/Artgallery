import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import ErrorPage from "./modules/error";
import Home from "./modules/home";
import ViewPage from "./modules/view";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/view",
          element: <ViewPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Router;
