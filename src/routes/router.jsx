import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Homelayout from '../layouts/Homelayout';
import CategoryNews from '../Pages/CategoryNews';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NewsDetail from '../Pages/NewsDetail';
import PrivateRoute from '../Pages/PrivateRoute';
import Career from '../components/Career';
import About from '../components/About';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Homelayout></Homelayout>,
        children:[
            {
                path:"",
                element:<Navigate to={"/category/01"}></Navigate>
            },
            {
                path:'category/:id',
                element:<CategoryNews></CategoryNews>,
                loader: ({params})=>
                    fetch(
                        `https://openapi.programming-hero.com/api/news/category/${params.id}`
                      ),
            }
        ],
    },
    {
        path:'news/:id',
        element: <PrivateRoute> <NewsDetail></NewsDetail> </PrivateRoute>,
        loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path:'auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element: <Login></Login>
            },
            {
                path:'/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path:'/career',
        element:<Career></Career>
    },
    {
        path:'/about',
        element:<PrivateRoute><About></About></PrivateRoute>
    },

    {
        path:'*',
        element: <h1 className='text-5xl text-center'>Error</h1>
    }
])

export default router;