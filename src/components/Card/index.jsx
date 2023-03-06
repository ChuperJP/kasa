import '../../styles/Card.css'



function Card({title, cover}) {
    return (
        <div className='div_card'>
            <img className='logement_cover' src={cover} alt={`${title} cover`} />
            <div className='card_overlay'></div>
            <h2 className='logement_title'>{title}</h2>
        </div>
    )
}
 
export default Card