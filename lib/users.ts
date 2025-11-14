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
  // Adicione mais usuários aqui conforme necessário
  // {
  //   username: 'outro_usuario',
  //   password: 'outra_senha',
  //   name: 'Nome Completo'
  // }
]

export function validateUser(username: string, password: string): User | null {
  const user = users.find(
    u => u.username === username && u.password === password
  )
  return user || null
}
