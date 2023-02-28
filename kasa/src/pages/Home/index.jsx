import '../../styles/Home.css'
import Banner from '../../components/Banner'
import CardsList from '../../components/CardsList'
import Header from '../../components/Header'

function Home() {
  return <div className='div_home-wrapper'>
            <Header />
             <Banner>
                <div className='div_banner_home'>
                <span className='Banner_title'>Chez vous, partout et ailleurs</span>
                </div>
            </Banner>
            <CardsList />
         </div>
  
}

export default Home
