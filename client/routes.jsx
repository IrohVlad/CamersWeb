import React from "react";
import { MAIN_ROUTE, BLOG_ROUTE, CONTACTS_ROUTE, PRICE_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, POST_ROUTE } from "./utils/const";
import {Navigate} from 'react-router-dom'
import MainPage from './pages/MainPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import PricePage from './pages/PricePage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import LoginPage from "./pages/LoginPage.jsx";
import PostPage from "./pages/PostPage.jsx";





export const SimpleRout = [
    {
        path: MAIN_ROUTE,
        Component: <MainPage/>
    },
    {
        path: BLOG_ROUTE,
        Component: <BlogPage/>
    },
    {
        path: PRICE_ROUTE,
        Component: <PricePage/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <LoginPage/>
    },
    {
        path: POST_ROUTE,
        Component: <PostPage/>
    },
    {
        path: '*',
        Component: <Navigate to="/" />
    }
]

export const AuthRout = [
    {
        path: MAIN_ROUTE,
        Component: <MainPage/>
    },
    {
        path: BLOG_ROUTE,
        Component: <BlogPage/>
    },
    {
        path: PRICE_ROUTE,
        Component: <PricePage/>
    },
    {
        path: ADMIN_ROUTE,
        Component: <AdminPage/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <LoginPage/>
    },
    {
        path: POST_ROUTE,
        Component: <PostPage/>
    },
    {
        path: '*',
        Component: <Navigate to="/" />
    }
]