import { useContext } from 'react'

import { UserContext } from '~/contexts/userContext'

export default function useUser() {
  return useContext(UserContext)
}
