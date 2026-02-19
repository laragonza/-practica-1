import { useEffect, useState } from 'react'
import './index.css'
import { api } from './api/api'
import CharacterList from './components/CharacterList'
import Loader from './components/Loader'
import ErrorMessage from './components/Error'
import type { CharacterT } from './types'

const SWAPI_PEOPLE = '/people/'

export default function App() {
  const [characters, setCharacters] = useState<CharacterT[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [nextUrl, setNextUrl] = useState<string | null>(null)

  const fetchCharacters = async (path: string = SWAPI_PEOPLE) => {
    setLoading(true)
    setError(null)
    try {
      const res = await api.get(path)
      const data = res.data
  setCharacters((prev: CharacterT[]) => [...prev, ...data.results])
      setNextUrl(data.next)
    } catch (e: any) {
      setError(e.message ?? String(e))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <div className="app">
      <h1>SWAPI - People</h1>

      {error && <ErrorMessage message={error} />}
      {characters.length === 0 && loading && <Loader />}

      <CharacterList characters={characters} />

      <div className="controls">
        {loading ? (
          <button disabled>Loading...</button>
        ) : (
          <button disabled={!nextUrl} onClick={() => nextUrl && fetchCharacters(nextUrl)}>
            Siguiente Página
          </button>
        )}
      </div>
    </div>
  )
}
