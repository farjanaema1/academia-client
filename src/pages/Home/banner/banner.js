import { Link } from "react-router-dom";

const Banner = () => {
    return (
       <section className="mt-8">
        <div className="w-4/5 mx-auto ">
            <img style={{
                height:700,
                width:900,
                borderRadius:15
            }} src="https://i.ibb.co/yf8Gkqp/banner.jpg" className="mx-auto shadow-2xl" alt="" />
            <img  style={{
                height:300,
                width:300
            }} src="https://i.ibb.co/3mVd0SY/download-1.jpg" className=" rounded-lg   absolute right-5 w-3/5 mr-10 mt-24 top-2/4 " />
            <div style={{
                backgroundColor:"seagreen",
                borderRadius:15
            }} className="absolute left-30 w-2/5 top-2/3 mt-24 ml-32  p-10 mx-auto">
<h1 className="text-3xl text-white font-bold mb-4 font-link">Leader in Executive <br />

Education</h1>
<p className="text-xl font-bold mb-4 para-link">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<Link to='/aboutUs'>
<button style={{
    borderRadius:20,
    backgroundColor:"goldenrod",
    border:'none'
}} className="btn pr-8 pl-8 ">see more</button></Link>
            </div>
        </div>
       
        
       </section>
    )
}
export default Banner;