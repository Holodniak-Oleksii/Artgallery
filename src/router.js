import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import ErrorPage from "./modules/error";
import Home from "./modules/home";
import Create from "./modules/create";
import Details from "./modules/detail";

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
          path: "/create",
          element: <Create />,
        },
        {
          path: "/artwork/:id",
          element: <Details />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Router;
