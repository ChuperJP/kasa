import '../../styles/Collapsible.css'
import { useState } from 'react'
import Chevron from '../../assets/Chevron.png'


function Collapsible({ title, text}) {

    const [isOpen, setIsOpen] = useState(false)

    const isOpenState = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className='div_collapse'>
            <div className='collapse_title' onClick={isOpenState}>
                <h2>{ title }</h2>
                <img src={ Chevron } alt='Chevron' className={!isOpen ? 'chevron_open' : undefined} />
            </div>
            <div className='collapse_text-visible' style={{
                display: isOpen ? 'block' : 'none'
            }}>
                <p>{ text }</p>
            </div>
        </div>
    )
}
 
export default Collapsible