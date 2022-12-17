import { createBrowserRouter } from "react-router-dom";
import Original from "../components/original";
import Project from "../components/project";
import Blog from "../Pages/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Original></Original>
    },
    {
        path: '/project/:id',
        element: <Project></Project>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    }
])