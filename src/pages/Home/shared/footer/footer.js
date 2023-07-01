import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-32">
           <footer  className="footer p-10  text-base-content">
  <div>
    <img style={{
      height:80,
      width:80
    }} src="https://i.ibb.co/PxXrvNn/academiaeducation.png" alt="" />
    <p className="para-link">ACADEMIA Education Ltd.<br/>Providing reliable tech since 2023</p>
    <ul className="steps mt-2">
  <li className="step step-warning para-link">Register</li>
  <li className="step step-success para-link">Choose course</li>
  <li className="step step-error para-link">Enroll</li>
  <li className="step step-accent para-link">Add Experience</li>
</ul>
  </div> 
  <div>
    <span className="footer-title font-link">Services</span> 
    <Link to='/aboutus' className="link link-hover para-link">About us</Link> 
    <Link to='/contact' className="link link-hover para-link">Contact</Link>
    <Link className="link link-hover para-link">Courses</Link> 
    <Link className="link link-hover para-link">Teachers</Link>
  </div> 
  <div>
    <span className="footer-title font-link">Social</span> 
    <Link to='https://www.facebook.com/farjana.ema.399'><svg style={
  {
    height:30,
    width:30
  }
} className="bg-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>Facebook
 </Link> 
 <Link>
 <svg style={{height:30,width:30}}  className="bg-warning " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>Instagram
 </Link>
 <Link to='https://www.linkedin.com/in/farjana-ema-8a3b61256/'><svg style={{height:30,width:30}} className="bg-accent " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>LinkedIn</Link>
  </div> 
  <div>
    <span className="footer-title font-link">Contact us</span> 
   
            <h2 className="text-accent font-bold para-link">Address :</h2>
            <h2 className="para-link">1481 Creekside Lane Avila Beach, CA 93424</h2>
            
            <h2 className="text-accent font-bold para-link">Phone :</h2>
            <h2 className="para-link">+53 345 7953 32453</h2>
            
            <h2 className="text-accent font-bold para-link">Email :</h2>
            <h2 className="para-link">academia37@gmail.com</h2>
  </div>
</footer>
<div>
    <p style={{
      color:'darkcyan',
      backgroundColor:'khaki',
      padding:10
    }} className=" mt-16 font-bold para-link">Copyright © 2023 - All right reserved by ACADEMIA Education </p>
  </div>
        </div>
    )
}
export default Footer;