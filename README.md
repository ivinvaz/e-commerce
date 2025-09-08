# Projeto E-commerce com Next.js e PostgreSQL

Bem-vindo ao projeto e-commerce full-stack! Este guia de instalação rápida ajudará novos desenvolvedores a configurar o ambiente de desenvolvimento e começar a trabalhar.

---

## 🚀 Tecnologias Utilizadas

-   **Next.js 14+**: Framework para o frontend e rotas de API.
-   **PostgreSQL**: Banco de dados relacional.
-   **Prisma**: ORM (Object-Relational Mapper) para interagir com o banco de dados.
-   **Bcrypt.js**: Biblioteca para criptografia de senhas.

---

## 💻 Configuração do Ambiente de Desenvolvimento

### 1. Pré-requisitos

Certifique-se de que você tem as seguintes ferramentas instaladas na sua máquina:

-   **Node.js**: [Link para download](https://nodejs.org/en/download/) (versão 18.x ou superior recomendada).
-   **npm**: Gerenciador de pacotes do Node.js (geralmente instalado com o Node.js).
-   **Git**: [Link para download](https://git-scm.com/downloads).
-   **PostgreSQL**: Servidor de banco de dados. Siga as instruções de instalação no site oficial do [PostgreSQL](https://www.postgresql.org/download/).

### 2. Configuração do Banco de Dados

1.  **Crie um usuário e um banco de dados no PostgreSQL**.
    Abra o terminal e use o cliente `psql` para criar o banco de dados do projeto.

    ```bash
    # Se necessário, conecte-se ao servidor PostgreSQL
    psql -U postgres

    # Crie o banco de dados para o projeto
    CREATE DATABASE "ecommerce-db";

    # Saia do psql
    \q
    ```

    *Se você estiver no Windows e receber um erro de "comando não encontrado", adicione a pasta `bin` da sua instalação do PostgreSQL à variável de ambiente **PATH** do sistema.*

2.  **Configure o arquivo de variáveis de ambiente**.
    Na raiz do projeto, crie um arquivo chamado `.env` e adicione a URL de conexão com o banco de dados.

    ```ini
    # .env
    DATABASE_URL="postgresql://postgres:sua-senha-aqui@localhost:5432/ecommerce-db?schema=public"
    ```
    *Substitua `sua-senha-aqui` pela senha que você configurou para o usuário `postgres` durante a instalação.*

### 3. Instalação do Projeto

1.  **Clone o repositório** e navegue até a pasta do projeto.

    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```

2.  **Instale as dependências** do projeto.

    ```bash
    npm install
    ```

3.  **Gere o cliente Prisma** e aplique as migrações no banco de dados.
    Este comando lê o schema (`prisma/schema.prisma`) e cria as tabelas no seu banco de dados.

    ```bash
    npx prisma migrate dev --name init_schema
    ```

    *Se você precisar gerar novamente o cliente Prisma após alterar o schema, use apenas o comando `npx prisma generate`.*

---

## 🚀 Como Rodar o Projeto

2.  **Crie os dados mockados** do banco de dados.


    ```bash
    npx prisma db seed
    ```

1.  **Inicie o servidor de desenvolvimento** do Next.js.


    ```bash
    npm run dev
    ```

2.  **Acesse o projeto** no seu navegador em `http://localhost:3000`.