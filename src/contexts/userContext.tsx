import { createContext, useState } from 'react'

import { User } from '~/@types/user'

const defaultUser: User = {} as User

export const UserContext = createContext<{
  user: User
  setUser: (user: User) => void
}>({
  user: defaultUser,
  setUser: () => ({}),
})

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState(defaultUser)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
