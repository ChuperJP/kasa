import '../../styles/CardsList.css'
import { Link } from 'react-router-dom'
import Card from '../Card';
import logement from '../../datas/logements.json'



function CardsList() {
    return (
        <section className="logement_list">
        {logement.map((logement) => {
          return (
            <article key={logement.id}>
              <Link to={`/logement/${logement.id}`}>
                <Card cover={logement.cover} title={logement.title} />
              </Link>
            </article>
          );
        })}
      </section>
    )
}
 
export default CardsList