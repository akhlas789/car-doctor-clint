import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
// import SingUP from "../Pages/SingUP/SingUP";
import BookServise from "../Pages/BookServise/BookServise";
import ChackOut from "../Pages/ChackOut/ChackOut";
import SingUP from "../Pages/SingUP/SingUP";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:"singup",
                element:<SingUP></SingUP>
            },
            {
                path:"book/:id",
                element:<BookServise></BookServise>,
                loader:({params})=>fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path:'checkout/:id',
                element:<ChackOut></ChackOut>,
                loader:({params})=>fetch(`http://localhost:3000/services/${params.id}`)
            }
        ]
    },
]);
export default router