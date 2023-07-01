import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/shared/navbar/navbar";
import Footer from "../pages/Home/shared/footer/footer";

const Main = () => {
    return (
        <div>
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
        </div>
    )
}
export default Main;