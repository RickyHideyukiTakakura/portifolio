import { useEffect, useState } from 'react'
import Repository from '../interfaces/Repository'
import { getRepositories } from '../services/githubService'

function useRepositories() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    getRepositories().then(response => setRepositories(response.data))
  }, [])

  return {
    repositories
  }
}

export default useRepositories
