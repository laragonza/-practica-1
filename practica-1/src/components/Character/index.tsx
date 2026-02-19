import React from 'react'
import './style.css'
import type { CharacterT } from '../../types'

export const Character: React.FC<{ character: CharacterT }> = ({ character }) => {
  return (
    <div className="mainContainer">
      <div className="characterDataContainer">
        <h2>{character.name}</h2>
        <p>Género: {character.gender}</p>
        <p>Año nacimiento: {character.birth_year}</p>
      </div>
    </div>
  )
}
