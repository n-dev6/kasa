import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'

const Dropdown = ({
   title,
   description,
   dropdownWidth,
   className,
   equipements,
}) => {
   const [isOpen, setIsOpen] = useState(false)
   const descriptionRef = useRef(null)

   const toggleDropdown = () => {
      setIsOpen(!isOpen)
   }

   const getDescriptionHeight = () => {
      return isOpen ? descriptionRef.current.scrollHeight : 0
   }

   return (
      <div className={`dropdown-container ${className}`}>
         <div className="dropdown" style={{ width: dropdownWidth }}>
            <span className="dropdown-title">{title}</span>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
               <FontAwesomeIcon
                  icon={isOpen ? faChevronUp : faChevronDown}
                  className="dropdown-icon"
               />
            </button>
         </div>
         <div
            className={`description ${equipements ? 'equipement' : ''}`}
            style={{
               height: `${getDescriptionHeight()}px`,
               opacity: isOpen ? '1' : '0',
               transition: 'height 0.3s, opacity 0.3s',
               
            }}
            ref={descriptionRef}
         >
            {description}
            {equipements &&
               equipements.map((equipement, index) => (
                  <p key={`equipement-${index}`} className="equipement-content">
                     {equipement}
                  </p>
               ))}
         </div>
      </div>
   )
}

export default Dropdown
