import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";



 const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
    , {
        path: '/signup',
        element: <Signup/>
    }
])


export default MainRoute;