export type UserByUsername = {
  accountNonExpired: boolean
  accountNonLocked: boolean
  age: number
  authorities: [{ authority: string }]
  bio: string
  credentialsNonExpired: boolean
  email: string
  enabled: boolean
  id: number
  name: string
  password: string
  rating: []
  role: string
  username: string
}

export type Screens = 'home' | 'profile' | 'movies' | 'settings'
