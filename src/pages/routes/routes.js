import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/main";
import Home from "../Home/home/home";
import Signup from "../signup/signup";
import LogIn from "../login/login";
import CheckOut from "../checkOut/checkOut";
import MyCourses from "../MyCourses/myCourses";
import PrivateRoute from "./privateRoute";
import Contact from "../contact/contact";
import AboutUs from "../aboutus/aboutus";
import AddExperience from "../addexperience/addexperience";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
           
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/mycourses',
                element:<MyCourses></MyCourses>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/addexperience',
                element:<AddExperience></AddExperience>
            },
            {
                path:'/checkout/:id',
                element:<CheckOut></CheckOut>,
                loader:({params}) => fetch(`https://academia2.onrender.com/services/${params.id}`)
            }
            
        ]
    },
])
export default router;