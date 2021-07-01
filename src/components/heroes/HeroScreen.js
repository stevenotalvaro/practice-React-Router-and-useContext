import React from 'react'
import {Redirect, useParams} from 'react-router-dom'
import {gerHeroById} from '../selectors/getHeroById'

export const HeroScreen = () => {
  const {heroId} = useParams()

  const hero = gerHeroById(heroId)

  if (!hero) {
    return <Redirect to="/Marvel" />
  }

  const {id, superhero, publisher, alter_ego, first_appearance, characters} =
    hero

  console.log(hero)
  return (
    <div>
      <h1>Hero</h1>
    </div>
  )
}
