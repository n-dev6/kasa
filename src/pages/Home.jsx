import Header from '../components/Header';
import data from '../components/data.json';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import SeaPng from '../assets/Sea.png';





function Home (){
    return(
        <>
        <Header/>
        <Banner image={SeaPng} text ='Chez vous, partout et ailleurs' />
        <div className="card-container">
            {data.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <Footer/>
        </>
    )
}
export default Home;