# DevConnect API

Repositório para a API da plataforma DevConnect, feita com o framework NestJS.

## Instalar dependências

```bash
$ npm install
```

## Rodando a aplicação

```bash
# desenvolvimento
$ npm run start

# modo de observação
$ npm run start:dev

# produção
$ npm run start:prod

# build
$ npm run build
```

# Rotas

## Autenticação e Autorização de Usuário

- [x] `POST /api/auth/register`: Permite aos usuários criar novas contas.
- [x] `POST /api/auth/login`: Lida com o login do usuário.
- [ ] `POST /api/logout`: Faz o logout do usuário.
- [ ] `POST /api/forgot-password`: Inicia o processo de redefinição de senha.
- [ ] `POST /api/reset-password/:token`: Redefine a senha do usuário.

## Gerenciamento de Perfil de Usuário

- [x] `GET /api/user/profile`: Obtém informações do perfil do usuário atual.
- [ ] `PUT /api/user/profile`: Atualiza informações do perfil do usuário atual.

## Posts e Comentários

- [x] `GET /api/posts`: Obtém uma lista de posts.
- [x] `GET /api/posts/:id`: Obtém um post específico.
- [x] `POST /api/posts`: Cria um novo post.
- [x] `PUT /api/posts/:id`: Atualiza um post existente.
- [x] `DELETE /api/posts/:id`: Deleta um post.
- [x] `GET /api/posts/:id/comments`: Obtém comentários para um post.
- [x] `POST /api/posts/:id/comments`: Adiciona um novo comentário a um post.
- [x] `PUT /api/comments/:id`: Atualiza um comentário.
- [x] `DELETE /api/comments/:id`: Deleta um comentário.

## Curtidas e Reações

- [x] `POST /api/posts/:id/like`: Adiciona uma curtida a um post.
- [x] `POST /api/posts/:id/unlike`: Remove uma curtida de um post.

## Projetos e Tarefas

- [x] `GET /api/projects`: Obtém uma lista de projetos.
- [x] `GET /api/projects/:id`: Obtém um projeto específico.
- [x] `POST /api/projects`: Cria um novo projeto.
- [x] `PUT /api/projects/:id`: Atualiza um projeto existente.
- [x] `DELETE /api/projects/:id`: Deleta um projeto.
- [x] `GET /api/projects/:id/task`: Obtém tarefas para um projeto.
- [x] `POST /api/projects/:id/task`: Adiciona uma nova tarefa a um projeto.
- [x] `PUT /api/task/:id`: Atualiza uma tarefa.
- [x] `DELETE /api/task/:id`: Deleta uma tarefa.

## Times e Membros

- [x] `GET /api/teams`: Obtém uma lista de times.
- [x] `GET /api/teams/:id`: Obtém um time específico.
- [x] `POST /api/teams`: Cria um novo time.
- [x] `PUT /api/teams/:id`: Atualiza um time existente.
- [x] `DELETE /api/teams/:id`: Deleta um time.
- [x] `GET /api/teams/:id/members`: Obtém membros de um time.
- [x] `POST /api/teams/:id/members`: Adiciona um membro a um time.
- [x] `DELETE /api/teams/:id/members/:userId`: Remove um membro de um time.

## Conversas e Mensagens

- [ ] `GET /api/chats`: Obtém uma lista de conversas.
- [ ] `GET /api/chats/:id`: Obtém mensagens para uma conversa.
- [ ] `POST /api/chats/:id`: Envia uma mensagem para uma conversa.

## Conversa

- [ ] `GET /api/chat`: Obtém uma lista de conversas disponíveis.
- [ ] `GET /api/chat/:id`: Obtém detalhes de uma conversa específica.
- [ ] `POST /api/chat`: Cria uma nova conversa.
- [ ] `PUT /api/chat/:id`: Atualiza uma conversa existente.
- [ ] `DELETE /api/chat/:id`: Deleta uma conversa.

## Membros de Conversa

- [ ] `GET /api/chats/:id/members`: Obtém membros de uma conversa.
- [ ] `POST /api/chats/:id/members`: Adiciona um membro a uma conversa.
- [ ] `DELETE /api/chats/:id/members/:userId`: Remove um membro de uma conversa.

## Conversas Privadas

- [ ] `GET /api/private-chats/:userId`: Obtém conversas privadas para um usuário.
- [ ] `POST /api/private-chats/:userId`: Inicia uma nova conversa privada com um usuário.
- [ ] `GET /api/private-chats/:userId/:chatId`: Obtém mensagens para uma conversa privada.

## Conversas em Grupo

- [ ] `GET /api/group-chats`: Obtém uma lista de conversas em grupo.
- [ ] `GET /api/group-chats/:id`: Obtém detalhes de uma conversa em grupo específica.
- [ ] `POST /api/group-chats`: Cria uma nova conversa em grupo.
- [ ] `PUT /api/group-chats/:id`: Atualiza uma conversa em grupo existente.
- [ ] `DELETE /api/group-chats/:id`: Deleta uma conversa em grupo.

## Associações de Membros em Conversas em Grupo

- [ ] `GET /api/group-chats/:id/members`: Obtém membros de uma conversa em grupo.
- [ ] `POST /api/group-chats/:id/members`: Adiciona um membro a uma conversa em grupo.
- [ ] `DELETE /api/group-chats/:id/members/:userId`: Remove um membro de uma conversa em grupo.
