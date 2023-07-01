import Review from "./review";
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';


const Testomonial = () => {
    const reviews = [
    
    {
        _id : 1,
        name:'Winson herry',
        userReview : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location : 'California',
        img : people1
    },
    {
        _id : 2,
        name:'William watson',
        userReview : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location : 'Lane Avila',
        img : people2
    },
    {
        _id : 3,
        name:'Christinne Smith',
        userReview : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location : 'California',
        img : people3
    },
]
    return(
<section className="mt-16">

  
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols- mt-16'>
        {
            reviews.map ( review => <Review
            
             key={review._id
            }
            review = { review}
            >


            </Review>)
        }
    </div>
</section>
    )
}
export default Testomonial;