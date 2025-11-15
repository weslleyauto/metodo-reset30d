export interface User {
  username: string
  password: string
  name: string
}

// Lista de usuários autorizados
export const users: User[] = [
  {
    username: 'Weslley',
    password: '1024',
    name: 'Weslley'
  },
  {
  username: '482913',
  password: 'k9s2d',
  name: 'Usuario1'
},
{
  username: '739150',
  password: 'p4x8t',
  name: 'Usuario2'
},
{
  username: '195467',
  password: 'tq3m7',
  name: 'Usuario3'
},
{
  username: '860234',
  password: 'z1b6q',
  name: 'Usuario4'
},
{
  username: '517802',
  password: 'm8r2k',
  name: 'Usuario5'
}
]

export function validateUser(username: string, password: string): User | null {
  const user = users.find(
    u => u.username === username && u.password === password
  )
  return user || null
}
