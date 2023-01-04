import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const Chara = ({name, image, created,}) => {
  return (
    <div>
      <div>
        <img src={image} alt=""/>
      </div>
      <div>
        <h2>{name}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, rem architecto earum aliquam dicta aspernatur quaerat ex ducimus dolore consequuntur.</p>
        <div>
          <span>{created}</span>
          <div>
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <h6>Beğen</h6>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Chara