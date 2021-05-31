
export interface User {
  name: string,
  login: string,
  bio: string,
  followers: {
    totalCount: number
  },
  following: {
    totalCount: number
  },
  location: string
}