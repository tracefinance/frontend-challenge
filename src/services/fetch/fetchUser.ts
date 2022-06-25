import { User } from '~/@types/user'
import { UserRegisterData } from '~/components/UserRegistrationForm/UserRegistrationForm'

import { fetchJson } from './fetchJson'

// const url = `${process.env.NEXT_PUBLIC_API_URL}/user`
/**
 * Hardcoded url for the demo purposes
 */
const url = `https://629f52338b939d3dc29519e3.mockapi.io/api/challenge/user`

/**
 * Make a POST to the API to register a new user
 */
export const createUser = async (user: UserRegisterData) =>
  fetchJson<User>(url, {
    method: 'POST',
    body: JSON.stringify(user),
  })
