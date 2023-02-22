import Banner from '../../components/Banner'
import Banner_image from '../../assets/Banner_home.png'
function Home() {
  return <div>
             <Banner>
                <div className='div_banner_home' style={{ backgroundImage: `url(${Banner_image})`, width:'100%'}}>
                <span className='Banner_title'>Chez vous, partout et ailleurs</span>
                </div>
            </Banner>
         </div>
  
}

export default Home
