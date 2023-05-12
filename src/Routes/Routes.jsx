import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import ServiceRight from "../Pages/Home/Services/ServiceRight";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/serviceDetails/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/checkOut/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`) 
        },
        {
          path: '/bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path: '/serviceRight',
          element: <ServiceRight></ServiceRight>,
        }
      ]
    },
    {
        path: '/header',
        element: <Header></Header>
    },
    {
        path: '/footer',
        element: <Footer></Footer>
    }
  ]);

  export default router;