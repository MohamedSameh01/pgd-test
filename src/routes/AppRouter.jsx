import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayout from "../layouts/MainLayout";
// pages
// import Home from "../pages/Home";
import Error from "../pages/Error";
import Transactions from "../pages/Transactions";
import Inbox from "../pages/Inbox";
// import Add from "../pages/Add";
import AddTransaction from "../pages/AddTransaction";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Transactions />,
      },
      {
        path:"inbox",
        element: <Inbox />
      },
      {
        path:"add",
        element: <AddTransaction />
      },

    
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
