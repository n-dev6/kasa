import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
import MountainPng from '../assets/Mountain.png';
import Banner from '../components/Banner';
import logoFooter from '../assets/logoFooter.png'

function About() {
return(
    <>
    <Header/>
    <Banner image={MountainPng} />
    <Footer/>
    </>

    )
}
export default About