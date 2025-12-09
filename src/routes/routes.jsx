import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";




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
        }
    ]
  },
]);
