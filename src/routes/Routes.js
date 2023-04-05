import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Home'
import Main from "../Layout/Main";
import About from './../components/About';
import Shop from './../components/Shop';
import Cart from './../components/Cart';
import ErrorPage from './../components/ErrorPage';
import { ProductsAndCartData } from './../Loader/GetCartProductData';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage/>,
    loader:ProductsAndCartData,
    children: [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/home',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
        {
            path:'/cart',
            element:<Cart/>
        },
    ]
    
  },
]);
export default router;
