import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../authprovider/authprovider";

const CheckOut = () => {
    const {name,_id,price,img} = useLoaderData();
    const {user} = useContext(AuthContext);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const customerName = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const phone = form.phone.value;
        const order = {
            service:_id,
            servicename:name,
            price:price,
            customer:customerName,
            email,
            phone,
            message
        }
        fetch('https://academia2.onrender.com/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
        body:JSON.stringify(order)

        })
        .then( res => res.json())
        .then( data => console.log(data))

    }
    
    return (
        <div className="w-4/5 mx-auto mb-20 mt-16">
<div className="flex mx-auto w-4/5 mb-8">
<h2 style={{
    width:300
}} className="text-center text-accent text-3xl font-bold mb-8 mr-16 font-link">{name}</h2>
<img src={img} alt="" />
</div>
<form onSubmit={handlePlaceOrder}>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<input type="text" name="firstName" placeholder="First Name" className="input input-bordered input-secondary w-full " />
<input type="text" name="lastName" placeholder="Last Name" className="input input-bordered input-secondary w-full " />
<input type="text" name="email" placeholder="Your Email" className="input input-bordered input-secondary w-full " />
<input type="text" name="phone" placeholder="Your Phone" className="input input-bordered input-secondary w-full " />


 <textarea style={{
    width:935
 }} name="message" className="textarea w-full  h-40  ml-24
 textarea-secondary mt-6 " placeholder="message"></textarea> 
 
</div>
<button className="btn btn-outline btn-secondary mb-4 mt-6 ">Submit</button>

</form>
<h1 className="font-bold font-link">{user?.email}</h1>
        </div>
    )
}
export default CheckOut;