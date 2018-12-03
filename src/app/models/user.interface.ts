/**
 * Define one OAT user of a list of Users
 **/
export interface OATUser {
  userId: number,
  login?: string,
  password?: string,
  title?: string,
  firstName: string,
  lastName: string,
  gender?: string,
  email?: string,
  picture?: string,
  address?: string,
}

/**
 * Default User 
 **/
export const defaultUser: OATUser = {
  userId: 0,
  login: null,
  password: null,
  title: null,
  firstName: null,
  lastName: null,
  gender: null,
  email: null,
  picture: null,
  address: null,
}
