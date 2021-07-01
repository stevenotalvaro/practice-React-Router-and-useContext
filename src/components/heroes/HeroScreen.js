import React from 'react'
import {Redirect, useParams} from 'react-router-dom'
import {gerHeroById} from '../selectors/getHeroById'

export const HeroScreen = ({history}) => {
  const {heroId} = useParams()

  const hero = gerHeroById(heroId)

  if (!hero) {
    return <Redirect to="/Marvel" />
  }

  const {id, superhero, publisher, alter_ego, first_appearance, characters} =
    hero

  const handleReturn = () => {
    if (history.length > 2) {
      history.goBack()
    }

    history.push('/')
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${id}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {' '}
            <b>Alter ego: </b> {alter_ego}{' '}
          </li>
          <li className="list-group-item">
            {' '}
            <b> Publisher: </b> {publisher}{' '}
          </li>
          <li className="list-group-item">
            {' '}
            <b>First Appearance: </b> {first_appearance}{' '}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-primary" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  )
}
