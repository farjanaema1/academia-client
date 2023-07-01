import { useEffect, useState } from "react";

const MyCoursesRow = ({order,handleDelete,status,handleStatusUpdate}) => {
    const{servicename,price,email,_id,customer,service,phone} = order;
      const[orderService,setOrderService] = useState({});
      

    useEffect( () => {
        fetch(`https://academia2.onrender.com/services/${service}`)
        .then( res => res.json())
        .then( data => setOrderService(data))
    },[service]);

    return (
        <div>
 <tr>
        <th>
          <label>
            <button onClick={() => handleDelete(_id)}>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {
                    orderService?.img && 
                    <img src={orderService.img}>
                    </img>
                }
              </div>
            </div>
            <div>
              <div className="font-bold para-link">{customer}</div>
              <div className="text-sm opacity-50 para-link">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {servicename}
          <br/>
          <span className="badge badge-ghost badge-sm para-link">${price}</span>
        </td>
        
        {/* <th>
          <button onClick={ () => handleStatusUpdate} className="btn btn-ghost btn-xs">{status? status : 'pending'}</button>
        </th> */}
      </tr>
        </div>
    )
}
export default MyCoursesRow;