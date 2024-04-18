import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/Details/Details";
import About from "../pages/About/About";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Properties from "../pages/Properties/ProperTies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('/data.json')
      },
     
      {
        path: '/about',
        element: <PrivateRoute><About></About></PrivateRoute>
      },
      {
        path: '/cards',
        element: <PrivateRoute><Properties></Properties></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

export default router;
