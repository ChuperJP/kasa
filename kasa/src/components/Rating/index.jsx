import '../../styles/Rating.css'
import greyStar from '../../assets/Grey_star.png'
import orangeStar from '../../assets/Orange_star.png'


function Rating({ rating }) {
    const stars = [1, 2, 3, 4, 5]

    return (
        <div>
            {stars.map((star) => {
               return star <= rating ? 
                  (<img src={orangeStar} alt='orange_star' key={star} className='star'/>)
                : (<img src={greyStar} alt='grey_star' key={star} className='star' />)
            } 
            )}
        </div>
    )
}

export default Rating
