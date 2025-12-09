import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <Homepage />
        },
        {
            path: '/services',
            element: <Services />
        },
        {
            path: '/profile',
            element: <MyProfile />
        },
        {
        path: "/signup",
        element: <Signup />,
        },
        {
        path: "/signin",
        element: <Signin />,
        }
    ],
  },
]);
