import Testomonial from "./testomonial/testomonial"




const Benefit = () => {
  
  
    return (
        <div className="mt-32 p-10">
         
<div style={{
    backgroundColor:"darkcyan",
    height:850
  
}} className="p-10" >
  <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className="text-center lg:text-left ml-6">
      <h1 className="text-5xl font-bold text-warning para-link">What our students Say</h1>
      <Testomonial></Testomonial>
    </div>
    
    <div>
   <div>
   <div style={{
   height:200,
   width:400
   }} className="card card-side bg-base-100 shadow-xl mb-4">
  <figure><img src="https://i.ibb.co/WtbsX37/images-2.png" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="text-xl font-bold text-success para-link">Online Courses</h2>
    <p className="para-link">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
   
  </div>
</div>
<div style={{
   height:200,
   width:400
   }} className="card card-side bg-base-100 shadow-xl mb-4">
  <figure><img src="https://i.ibb.co/NTs4jMM/certificate.png" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="text-xl font-bold text-success para-link">Earn A Certificates</h2>
    <p className="para-link">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
   
  </div>
</div>
<div style={
  {
    width:400,height:200
  }
} className="card card-side bg-base-100 shadow-xl">
  <figure><img className="" src="https://i.ibb.co/tZwJgN1/teacher.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="text-xl font-bold text-success para-link">Learn with Expert</h2>
    <p className="para-link">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    
  </div>
</div>

   </div>
   </div>
      
    
  </div>
</div>
  
 
    </div>
  </div>

        
    )
}
export default Benefit