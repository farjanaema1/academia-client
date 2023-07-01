import Teacher from "./teacher";
import teacher1 from '../../assets/images/teacher_1.jpg.webp';
import teacher2 from '../../assets/images/teacher_2.jpg.webp';
import teacher3 from '../../assets/images/teacher_3.jpg.webp';
import teacher4 from '../../assets/images/teacher_4.jpg.webp';
import teacher5 from '../../assets/images/teacher_5.jpg.webp';
import teacher6 from '../../assets/images/teacher_6.jpg.webp';

const Teachers = () => {
    const teacherData = [
        {
            id :1,
            name : 'Jonathan Smith ',
            img : 
            teacher1,
            subject : 'Basic Fundamentals for Software Engineering'
          
        },
        {
            id :2,
            name : 'herry Williams',
            img : teacher2,
            subject : 'Introducing to Programming with Data Structure'

           
        },
        {
            id :3,
            name : 'Jack Gallagan',
           img : teacher3,
           subject : 'HTML CSS and Javascript for Web Developers'
          
        },
        {
            id :4,
            name : 'Christinne Smith',
            img : teacher4,
            subject : 'Introducing to Programming with Python'
            
        },
        {
            id :5,
            name : 'Michelle Williams',
            img : teacher5,
            subject : 'Introducing to Programming with Java'
           
          
        },
        {
            id :6,
            name : 'Jack Gallagan',
            img : teacher6,
            subject : 'Introducing to Programming with c/c++'
           
          
        },
    ]
    return (
       <section className="mt-16">
         
 
          
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2 mt-16'>
     {
        teacherData.map(teacher => <Teacher
        key={teacher.id}
        teacher = {teacher}
        
        ></Teacher>)
     }
        </div>

       
       </section>
    )
 }
 export default Teachers;