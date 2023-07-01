import { Link } from "react-router-dom";


const Contact = () => {
  // const handlesubmit = event => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //    const phone =form.phone.value;
    
    
       
        
  //   form.reset();

  // }
    return (
        
       <div>
        <img src="https://i.ibb.co/rfXv6mY/contact-jpg.webp" alt="" />
        <div  className="absolute left-30 top-1/2 ml-40  p-10 mx-auto">
<h1 className="text-3xl text-white font-bold mb-4 para-link">Contact us /<br />

<Link className="text-secondary para-link" to='/'>Home</Link></h1>
       </div>
       <div>
       <div className="hero mt-16 ">
  <div className="hero-content flex ">
    <div className="text-center lg:text-left mr-40">
     <div className="flex">
        <div className="mr-16">
        <h1 style={{
        width:400
      }} className="text-xl para-link "><span><img style={{
        height:100,
        width:100
      }} src="https://i.ibb.co/PxXrvNn/academiaeducation.png"></img></span>Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut. Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar.</h1>
        </div>
        <div>
            <h1 className="para-link">ContactUs</h1>
            <br />
            <h2 className="para-link">Address :</h2>
           
            <h2 className="para-link">1481 Creekside Lane Avila Beach, CA 93424</h2>
            <br />
            <h2 className="para-link">Phone :</h2>
            <h2 className="para-link">+53 345 7953 32453</h2>
            <br />
            <h2 className="para-link">Email :</h2>
            <h2 className="para-link">academia37@gmail.com</h2>
        </div>
     </div>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    
    <form className="card-body">
        <div className="form-control">
          
         
          <input style={{
            backgroundColor:'khaki'
          }} type="text" placeholder="name" className="input input-bordered required text-white" />
        </div>
        <div className="form-control">
          
         
          <input style={{
            backgroundColor:'khaki'
          }}  type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
         
          <input style={{
            backgroundColor:'khaki'
          }}  type="text" placeholder="phone" className="input input-bordered" />
         
        </div>
        <div className="form-control">
        <textarea style={{
            backgroundColor:'khaki'
          }}  className="textarea textarea-bordered" placeholder="message"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline btn-ghost">Submit</button>
        </div>
      </form>
    </div>
      </div>
    </div>
  </div>
</div>
    
        
    )
}
export default Contact;