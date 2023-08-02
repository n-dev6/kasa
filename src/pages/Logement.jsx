// Importez les autres composants et le fichier SCSS
import Slider from '../components/Slider'
import Header from '../components/Header'
import Dropdown from '../components/Dropdown'
import DescriptionHeader from '../components/DescriptionHeader'
import React, { Component } from 'react'
import logementsData from '../components/data.json'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Rating from '../components/Rating'
import ErrorPage from './404'
import Footer from '../components/Footer'

class Logement extends Component {
   render() {
      const url = window.location.href
      const id = url.substring(url.lastIndexOf('/') + 1)
      const logement = logementsData.find((logement) => logement.id === id)

      if (!logement) {
         return <ErrorPage />
      }

      const {
         title,
         cover,
         description,
         rating,
         name,
         location,
         equipments,
         tags,
         pictures,
         host,
         
      } = logement
      const dropdownWidth = '555px'

      return (
         <>
            <Header />

            <div className="app-container">
               <Slider images={pictures} />
               <div className="logement-description">
                  <h1>{title}</h1>
                  <div className="logement-description-row">
                     <p>{location}</p> 
                  </div>
                  <div className="logement-description-right">
                        <div className="name-profile">
                           {host.name}
                           <img className="circle" src = {host.picture}></img>
                        </div>
                        <span>
                           {' '}
                           <Rating rating={rating} />
                        </span>
                     </div>
                  <div className="tags-container">
                     {tags.map((tag, index) => (
                        <span key={`tag-${index}`} className="tag">
                           {tag}
                        </span>
                     ))}
                  </div>
                  <div className="collapse-row">
                     <Dropdown
                        title={'description'}
                        description={description}
                        dropdownWidth={dropdownWidth}
                        className="description-logement"
                     />
                     <Dropdown
                        title={'équipements'}
                        equipements={equipments}
                        dropdownWidth={dropdownWidth}
                        className="equipement"
                     />
                  </div>
               </div>
               
            </div>
            <Footer/>
         </>
      )
   }
}
export default Logement
