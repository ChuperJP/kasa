import '../../styles/Logement.css'
import { useParams } from 'react-router-dom'
import Error from '../../components/Error'
import logements from '../../datas/logements.json'
import Header from "../../components/Header"
import Carousel from '../../components/Carousel'
import Collapsible from '../../components/Collapsible'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'

function Logement() {
    const { logementId } = useParams()
    const logement = logements.find((logement) => logement.id === logementId)
    if ( logement === undefined){
        return <div>
                <Error />
        </div>
    }
    const carousel_image = logement.pictures
    const equipement_list = logement.equipments.map((equipement, index) =>
                            (<li key={ `${equipement}-${index}` } >{equipement}</li>))



    return <div className="div_logement-wrapper">
                <Header />
                <Carousel carousel_image={carousel_image}/>
                <div className='div_information-wrapper'>
                    <div className='div_logementInformation'>
                        <div>
                            <h2 className='logementInformation_title'>{ logement.title }</h2>
                            <p className='logementInformation_location'>{ logement.location }</p>
                        </div>
                        <div className='tags-wrapper'>
                            {
                                logement.tags.map((tag) =>(
                                <Tags tag={ tag } key={ tag } />
                                ))
                            }
                        </div>
                    </div>
                    <div className='div_host-wrapper'>
                        <div className='div_hostInformation'>
                            <Host hostName={ logement.host.name } hostImage={ logement.host.picture } />
                        </div>
                    <Rating rating={logement.rating} />
                    </div>
                </div>
                <div className='div_description-wrapper'> 
                <Collapsible title={'Description'} text={ <p>{logement.description}</p> } className='description_collapse' />
                <Collapsible title={'Équipements'} text={<ul>{equipement_list}</ul>}  className='equipement_collapse' />
                </div>
           </div>
    
  }
  
  export default Logement