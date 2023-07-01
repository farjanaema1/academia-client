import { useEffect, useState } from "react";
import Coursecart from "../courseCart/courseCart";

const Course = () => {
    const [isAsc,setIsAsc] = useState();
    const[courses,setCourses] = useState([]);
   // const searchRef = useRef();
   // const [search,setSearch] = useState('');

    useEffect( () => {
         fetch(`https://academia2.onrender.com/services?order=${isAsc? 'Ascending' : 'Descending '}`)
        // fetch('https://academia2.onrender.com/services')
        //fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[isAsc]);
  
    return (
        <div>
       <div className="my-10">
      <p className="text-2xl text-center text-orange-600 font-bold font-link">COURSE</p>  
      <h1 className="text-center text-2xl heading">Our Course area</h1>
     
       
        <button className="btn btn-outline btn-success mt-2 " onClick={ () => setIsAsc( !isAsc)
        }>{isAsc ? 'Descending' : 'Ascending'}</button>
      
  

      
       </div>
       <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto my-10">
      {/* <h3>service : {services.length}</h3> */}

      {
        courses.map( service => <Coursecart  
            key={service.id}
        service = {service}
        ></Coursecart>)

      }
       </div>
       </div>
       
    )
}
export default Course;