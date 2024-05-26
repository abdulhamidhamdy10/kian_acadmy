import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Courses from "./Components/Pages/Courses";
import Instructors from "./Components/Pages/Instructors";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import SignUp from "./Components/SignAndLog/SignUp";
import LogIn from "./Components/SignAndLog/LogIn";
import Profile from "./Components/SignAndLog/Profile";
import ForgetPass from "./Components/SignAndLog/ForgetPass";
import Events from "./Components/Pages/Events";
import CourseDetails from "./Components/Pages/CourseDetails";


const router = createBrowserRouter([
    {
        path: "/", element: <App />
    },
    {
        path: "/courses", element: <Courses />
    },
    {
        path: "/coursesDetails", element: <CourseDetails />
    },
    {
        path: "/instructors", element: <Instructors />
    },
    {
        path: "/Contact", element: <Contact />
    },
    {
        path: "/about", element: <About />
    },
    {
        path: "/signup", element: <SignUp />
    },
    {
        path: "/login", element: <LogIn />
    },
    {
        path: "/profile", element: <Profile />
    },
    {
        path: "/forget", element: <ForgetPass />
    },
    {
        path: "/events", element: <Events />
    },

]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);