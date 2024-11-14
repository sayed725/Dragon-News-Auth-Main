import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Homelayout from '../layouts/Homelayout';
import CategoryNews from '../Pages/CategoryNews';
import AuthLayout from '../layouts/AuthLayout';

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
        path:'news',
        element: <h1>News layout</h1>
    },
    {
        path:'auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element: <h2>login</h2>
            },
            {
                path:'/auth/register',
                element: <h2>register</h2>
            },
        ]
    },
    {
        path:'*',
        element: <h1>Error</h1>
    }
])

export default router;