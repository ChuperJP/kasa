import '../../styles/Host.css'

function Host({hostImage, hostName }) {
        const [name, lastName] = hostName.split(" ")

    return (
        <div className='div_host'>
            <div className='div_name-wrapper'>
                <p>{name}</p>
                <p>{lastName}</p>
            </div>
            <img src={hostImage} alt='host_image' className='host_image' />
        </div>
    )
}

export default Host



