import { createBrowserRouter } from "react-router";
import App from "../App";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'detail',
                element: <Detail />,
            },
            {
                path: 'cart',
                element: <Cart />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    }
])