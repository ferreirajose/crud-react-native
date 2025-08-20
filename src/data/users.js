function generateMockUsers(count) {
  const users = [];

  for (let i = 1; i <= count; i++) {
    users.push({
      id: i,
      name: `Usuário ${i}`,
      email: `usuario${i}@example.com`,
      avatar: `https://randomuser.me/api/portraits/men/${i % 100}.jpg`
    });
  }

  return users;
}

// Exemplo de uso:
export const MOCK_USERS = generateMockUsers(10);