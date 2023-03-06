import '../../styles/Carousel.css'
import { useState } from 'react'
import arrow from '../../assets/Arrow_carousel.png'

function Carousel({ carousel_image }) {
    const [imageIndex, setCurrentImage] = useState(0)

    function previousImage() {
        const firstImage = imageIndex === 0
        setCurrentImage(firstImage ? carousel_image.length - 1 : imageIndex - 1)
    }
    function nextImage() {
        const lastImage = imageIndex === carousel_image.length - 1
        setCurrentImage(lastImage ? 0 : imageIndex + 1)

    }

    return (
        <div className='div_carousel-wrapper'>
            <img className='carousel_image' src={carousel_image[imageIndex]} alt='carousel_image' />
            <img className='arrow arrow_left' src={arrow} alt='carousel_arrow-left' onClick={previousImage} 
            style={{display: carousel_image.length > 1 ? 'block' : 'none' }}/>
            <img className='arrow arrow_right' src={arrow} alt='carousel_arrow-right' onClick={nextImage} 
            style={{display: carousel_image.length > 1 ? 'block' : 'none' }}/>
            <div className='div_bulletPoint'>
                {imageIndex + 1}/{carousel_image.length}
            </div>
        </div>
    )
}
 
export default Carousel