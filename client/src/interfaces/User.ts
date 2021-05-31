
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
  location: string,
  avatarUrl: string
}

export const InitialUser: User = {
  name: 'name',
  login: 'login',
  bio: 'bio',
  followers: {
    totalCount: 0
  },
  following: {
    totalCount: 0
  },
  location: 'location',
  avatarUrl: 'avatarUrl'
}