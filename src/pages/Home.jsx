import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import SeaPng from '../assets/Sea.png';




function Home (){
    return(
        <>
        <Header/>
        <Banner image={SeaPng} />
        </>
    )
}
export default Home;