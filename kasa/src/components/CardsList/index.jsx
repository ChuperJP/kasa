import '../../styles/CardsList.css'
import { Link } from 'react-router-dom'
import Card from '../Card';
import logements from '../../datas/logements.json'



function CardsList() {
    return (
        <section className="logement_list">
        {logements.map((logements) => {
          return (
            <article key={logements.id}>
              <Link to={`/logement/${logements.id}`}>
                <Card cover={logements.cover} title={logements.title} />
              </Link>
            </article>
          );
        })}
      </section>
    )
}
 
export default CardsList