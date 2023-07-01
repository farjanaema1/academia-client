const AddExperience = () => {
    return (
        <div>
 <div className="stats shadow mt-8">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-accent">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://i.ibb.co/DGNjshx/download-5.jpg" />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Students</div>
    <div className="stat-desc text-secondary">completed course</div>
  </div>
  
</div>
<h1 className="text-3xl text-error mt-6 mb-4 font-link">Give your Course Experience</h1>
<div className="rating gap-1">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
</div>
<div className="hero mt-6">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center l">
    <div style={{
        width:400
    }} className="card flex-shrink-0 w-full ml-10 shadow-2xl bg-base-100">
    
    <form className="card-body">
        <div className="form-control">
          
         
          <input type="text" placeholder="name" className="input input-bordered required text-white bg-lime-200" />
        </div>
        <div className="form-control">
          
         
          <input  type="email" placeholder="email" className="input input-bordered bg-lime-200" />
        </div>
        <div className="form-control">
         
          <input  type="text" placeholder="phone" className="input input-bordered bg-lime-200" />
         
        </div>
        <div className="form-control">
         
          <input  type="text" placeholder="course name" className="input input-bordered bg-lime-200" />
         
        </div>
        <div className="form-control">
        <textarea  className="textarea textarea-bordered bg-lime-200" placeholder="course-experience"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline btn-warning">Submit</button>
        </div>
      </form>
    </div>
    </div>
    <div className="stack">
  <div style={{
    backgroundColor:'darkcyan'
  }}  className="card shadow-md bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title para-link">experience message</h2> 
      <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked></input>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary-400" checked />
</div>
      <p className="para-link">You have 21 unread messages. Tap here to see.</p>
    </div>
  </div> 
  <div style={{
    backgroundColor:'khaki'
  }} className="card shadow  text-primary-content">
    <div className="card-body">
      <h2 className="card-title">Notification 2</h2> 
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div> 
  <div style={{
    backgroundColor:'red'
  }} className="card shadow-sm bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">Notification 3</h2> 
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
</div>
  </div>
</div>
        </div>
    )
}
export default AddExperience;