import { Link } from "react-router-dom";

const Coursecart = ({service}) => {
    const {img,price,name,author,_id} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl p-5 ">
  <figure><img className="h-48" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-yellow-600 para-link">{name}</h2>
    <p className="font-bold para-link">Price : ${price}</p>
    <p className="para-link">Author : {author}</p>
    <div className="card-actions justify-end">
     <Link to = {`/checkout/${_id}`}>
     <button className="btn btn-outline btn-success heading"> 
     Enroll now

    </button>
     </Link>
    </div>
  </div>
</div>
    )
}
export default Coursecart;