import React from "react";
import { MAIN_ROUTE, BLOG_ROUTE, CONTACTS_ROUTE, PRICE_ROUTE, ADMIN_ROUTE } from "./utils/const";
import MainPage from './pages/MainPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import PricePage from './pages/PricePage.jsx';
import AdminPage from './pages/AdminPage.jsx';





export const Rout = [
    {
        path: MAIN_ROUTE,
        Component: <MainPage/>
    },
    {
        path: BLOG_ROUTE,
        Component: <BlogPage/>
    },
    {
        path: CONTACTS_ROUTE,
        Component: <ContactsPage/>
    },
    {
        path: PRICE_ROUTE,
        Component: <PricePage/>
    },
    {
        path: ADMIN_ROUTE,
        Component: <AdminPage/>
    }
]