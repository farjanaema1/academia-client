import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authprovider/authprovider";
import MyCoursesRow from "./MycoursesRow";
import mycourses from '../../assets/images/about.jpg.webp'
import { Link } from "react-router-dom";

const MyCourses = () => {
    const {user} = useContext(AuthContext);
    const[orders,setOrders] = useState([]);
    useEffect( () => {
        fetch(`https://academia2.onrender.com/orders?email=${user?.email}`)
        .then( res => res.json())
        .then( data => setOrders(data))
    },[user?.email]);
    const handleDelete = id => {
      const proceed = window.confirm('are you sure to delete?');
      if(proceed){
        fetch(`https://academia2.onrender.com/orders/${id}`,{
          method:'DELETE'
        })
        .then( res => res.json())

  .then( data => {
    console.log(data);
    if(data.deletesCount>0){
      alert('deleted successfully');
      const remaining = orders.filter( odr => odr._id !== id);
      setOrders(remaining)
    }
  })

      }
    }
    const handleStatusUpdate = id => {
      fetch(`https://academia2.onrender.com/orders/${id}`,{
        method:'PATCH',
        headers:{
          'conent-type' : 'application/json'
        },
        body:JSON.stringify( {
          status:'approved'
        })
        .then( res => res.json())
        .then( data => {
          console.log(data);
          if(data.modifiedCount>0){
            const remaining = orders.filter( ord => ord._id !==id)
            const approving = orders.find( ord => ord._id === id)
            approving.status = 'approved';
            const newOrders = [approving,...remaining];
            setOrders(newOrders)
          }
        })
      })
     
    }
    return (
  <div  className="mb-16">
    <div>
      <img  src={mycourses} alt="" />
      <div className="absolute left-30 top-1/2 ml-40  p-10 mx-auto">
    <Link to='/addexperience'>
    <button style={{
        backgroundColor:'darkcyan'
      }} className="btn text-white font-bold heading">Add your Experience</button></Link>
      </div>
    
    </div>

        <div>
            <h4 className="text-warning text-xl font-bold mb-8 mt-8 heading">You have {orders.length} courses</h4>
            <div className="overflow-x-auto w-4/5 mx-auto">
  <table className="table w-full mb-16">
    
    <thead>
      <tr>
        
     <th className="heading">Your All Courses</th>
    
      </tr>
    </thead>
    <tbody>
    
     {
        orders.map( order => <MyCoursesRow
        
         key={order._id}
         order={order}
         handleDelete = {handleDelete}
         handleStatusUpdate = {
          handleStatusUpdate
         }
        >
          
        </MyCoursesRow>)
     }
     
    
    
     
    </tbody>
    
  
    
  </table>
</div>

        </div>
        </div>
    )
}
export default MyCourses;