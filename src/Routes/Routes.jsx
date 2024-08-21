import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import AdminPage from '../Pages/AdminPage/AdminPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import NewsPage from '../Pages/NewsPage/NewsPage';
import Contact from '../Pages/Contact/Contact';
import WhoAreWe from '../Components/WhoAreWe/WhoAreWe';

function Routes() {

    const router = createBrowserRouter([{
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/admin",
        element: <AdminPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/news",
        element: <NewsPage />
    },
    {
        path: "/whoarewe",
        element: <WhoAreWe />
    },
    {
        path: "/contact",
        element: <Contact />
    }
    ])

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default Routes
