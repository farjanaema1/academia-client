import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/authprovider";
import SocialLogIn from "../Home/shared/socialLogin/socialLogin";


const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const {signIn} = useContext(AuthContext);
 const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
     const password =form.password.value;
    signIn(email,password)
    .then( result => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email : user.email
        }
        console.log(currentUser);
        // fetch(`https://academia2.onrender.com/jwt`,{
        //   method:'POST',
        //   headers:{
        //     'content-tpye' : 'application/json'
        //   },
        //   body:JSON.stringify(currentUser)
        //   .then(res => res.json())
        //   .then( data => {
        //     localStorage.setItem('genius-token',data.token);
            navigate( from,{ replace : true});
          })
       // })
      
   // })
    form.reset();

  }
    return (
        <div>
            <img className="mx-auto" src="https://i.ibb.co/k4DKPbz/images-10.jpg" alt="" />
       <div className="hero my-20 mx-auto w-4/5 ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left mr-20  ">
     
  
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
      <h1 style={{
        color:'darkcyan'
      }} className="text-5xl font-bold text-center">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-warning font-bold">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-warning font-bold para-link">Password</span>
          </label>
          <input type="password" placeholder="password" required name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt  text-warning link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         <button className='btn'>LogIn</button>
        </div>
      </form>
      <p style={{
        color:'darkcyan'
      }} className='text-center para-link mr-2'>New in ACADEMIA? 
        <Link to='/signup' className="font-bold">
        SignUp</Link>

      </p>
      <SocialLogIn></SocialLogIn>
    </div>
  </div>
</div>
        </div>
    )
}
export default LogIn;