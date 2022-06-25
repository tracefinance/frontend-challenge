export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  country: Countries
  dateOfBirthday: string
  bio: string
  receiveNotifications: boolean
}

export enum Countries {
  brazil = 'Brasil',
  usa = 'Estados Unidos',
  england = 'Inglaterra',
}
