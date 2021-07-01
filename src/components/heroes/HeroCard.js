import React from 'react'
import {Link} from 'react-router-dom'
export const HeroCard = ({id, superhero, alter_ego, first_appearance}) => {
  return (
    <div className="card" style={{maxWidth: 540}}>
      <div className="row no-gutters">
        <div className="position-absolute card-body text-white m-6">
          <h5 className="card-title ">{superhero}</h5>
          <p className="card-text"> {alter_ego}</p>
          <p className="card-text">
            {' '}
            <small className="text-muted ">{first_appearance}</small>
          </p>
          <Link to={`./hero/${id}`}>Más...</Link>
        </div>
        <img
          src={`./assets/heroes/${id}.jpg`}
          className="card-img"
          alt={superhero}
        />
      </div>
    </div>
  )
}
