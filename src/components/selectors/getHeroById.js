import {heroes} from '../data/heroes'

export const gerHeroById = id => {
  return heroes.find(hero => hero.id === id)
}
