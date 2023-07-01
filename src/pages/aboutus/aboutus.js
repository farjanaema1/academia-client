import { Link } from 'react-router-dom';
import about from '../../assets/images/about.jpg.webp';
import about1 from '../../assets/images/about_1.jpg.webp'
import Teachers from './teachers';
const AboutUs = () => {
    return(
        <div>
     <div>
        <img src={about} alt="" />

     </div>
     <div>
     <div className="hero my-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div>
    <img src={about1} alt="" />
  </div>
  <div className='w-1/2 mr-8'>
    <h1 className='text-4xl font-bold heading'>Our Platform's main goal</h1>
    <br />
    <p className='py-6 para-link'>
    Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut. Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id convallis libero, sed blandit nibh. Nam ultricies tristique nibh, consequat ornare nibh. Quisque vitae odio ligula.
    </p>
  </div>
  </div>
</div>
<div className="hero my-16">
  <div className="hero-content flex">
  <div>
    <img src={about1} alt="" />
  </div>
  <div className='w-1/2 mr-8'>
    <h1 className='text-4xl font-bold heading'>Academia's Vision</h1>
    <br />
    <p className='py-6 para-link'>
    Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut. Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus pulvinar. Praesent vel nisl fermentum, gravida augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id convallis libero, sed blandit nibh. Nam ultricies tristique nibh, consequat ornare nibh. Quisque vitae odio ligula.
    </p>
  </div>
  </div>
  
</div>
     </div>
     <div>
    <h1 style={{
      color:'limegreen'
    }} className='text-5xl font-bold font-link'>Meet The Teachers</h1>
    <Teachers></Teachers>
  </div>
        </div>
    )
}
export default AboutUs;