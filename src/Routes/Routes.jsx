import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
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