E-commerce Full-Stack
Este é um projeto de e-commerce full-stack construído com Next.js, PostgreSQL e Prisma.

🚀 Como Iniciar o Projeto
Siga os passos abaixo para configurar e rodar o projeto em seu ambiente de desenvolvimento.

Pré-requisitos
Certifique-se de que você tem as seguintes ferramentas instaladas:

Node.js (versão LTS)

PostgreSQL

1. Configuração do Ambiente
Primeiro, clone o repositório e navegue até a pasta do projeto.

Bash

git clone [URL_DO_SEU_REPOSITORIO]
cd [NOME_DA_PASTA]
Em seguida, instale as dependências do Node.js:

Bash

npm install
2. Configuração do Banco de Dados
Crie um usuário e um banco de dados no PostgreSQL para o projeto. Se você estiver usando o método padrão de autenticação, entre no psql como superusuário e execute os comandos:

Bash

sudo -i -u postgres
psql
SQL

CREATE USER ivin WITH PASSWORD 'sua_senha_segura';
CREATE DATABASE "DB_ECOMMERCE";
GRANT ALL PRIVILEGES ON DATABASE "DB_ECOMMERCE" TO ivin;
\q
exit
Certifique-se de usar sua senha segura e o nome de usuário/banco de dados que você definiu.

Crie um arquivo .env na raiz do projeto e adicione sua string de conexão com o banco de dados:

Snippet de código

DATABASE_URL="postgresql://ivin:sua_senha_segura@localhost:5432/DB_ECOMMERCE?schema=public"
Execute as migrações do Prisma para criar as tabelas no banco de dados. Este comando irá ler o arquivo prisma/schema.prisma e aplicar as alterações.

Bash

npx prisma migrate dev --name init
3. Rodando a Aplicação
Depois que o banco de dados estiver configurado, inicie o servidor de desenvolvimento do Next.js:

Bash

npm run dev
O projeto estará disponível em http://localhost:3000.

Estrutura do Projeto
Este projeto segue a estrutura padrão do Next.js, com as seguintes pastas e arquivos principais:

src/app: Páginas e rotas da aplicação (usando o App Router).

src/pages/api: Endpoints da API para o backend.

prisma/schema.prisma: Arquivo de esquema do banco de dados (modelos e relações).

prisma/migrations: Arquivos de migração gerados automaticamente pelo Prisma.

Espero que este README seja útil para você! Ele servirá como um guia claro para qualquer pessoa que queira contribuir ou rodar o seu projeto.