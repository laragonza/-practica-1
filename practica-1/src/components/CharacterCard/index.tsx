import React from 'react'
import type { CharacterT } from '../../types'
import './style.css'

export const CharacterCard: React.FC<{ character: CharacterT }> = ({ character }) => {
  return (
    <article className="card">
      <h2>{character.name}</h2>
      <p>Género: {character.gender}</p>
      <p>Año nacimiento: {character.birth_year}</p>
    </article>
  )
}

export default CharacterCard
