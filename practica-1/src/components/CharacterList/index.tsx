import React from 'react'
import type { CharacterT } from '../../types'
import CharacterCard from '../CharacterCard'

export const CharacterList: React.FC<{ characters: CharacterT[] }> = ({ characters }) => {
  if (!characters || characters.length === 0) return <div>No hay personajes</div>
  return (
    <div className="list">
      {characters.map((c) => (
        <CharacterCard key={c.url} character={c} />
      ))}
    </div>
  )
}

export default CharacterList
