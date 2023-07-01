const Teacher = ({teacher}) => {
    const { name,img,subject} = teacher;

    return (
            <div>
        <div className="card ">
        <figure><img style={{
            height:300,
           
            

        }} src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className=" text-2xl font-bold ml-6 heading">{name}</h2>
          <p style={{
            color:'darkcyan'
          }} className="ml-10 para-link">{subject}</p>
         
        </div>
      </div>
      </div>
      
       
    )
}
export default Teacher;