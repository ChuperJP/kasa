import '../../styles/About.css'
import Banner from '../../components/Banner'
import Collapsible from '../../components/Collapsible'
import Header from '../../components/Header'
function About() {
    return <div className='div_about-wrapper'>
                <Header />
                <Banner>
                  <div className='div_banner_about'></div>
                </Banner>
                <div className='div_collapse-wrapper'>
                <Collapsible title={'Fiabilité'} text={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>} />
                <Collapsible title={'Respect'} text={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} />
                <Collapsible title={'Service'} text={<p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>} />
                <Collapsible title={'Sécurité'} text={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>} />                
                </div>
                
    </div>
  }
  
  export default About