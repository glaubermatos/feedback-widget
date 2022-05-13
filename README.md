<h1 align="center">
  <img src=".github/logo.svg" alt="nlw return" width="480px">
</h1>

<p align="center">

  <img alt="Node.js version" src="https://img.shields.io/badge/Node.js-v16.15.0-689f63?style=flat&logoColor=689f63&logo=node.js">
  
  <img alt="TypeScript version" src="https://img.shields.io/badge/TypeScript-v4.6.3-007acc?style=flat&logoColor=007acc&logo=typescript">
  
  <img alt="React.js version" src="https://img.shields.io/badge/React.js-v18.0.0-60dafb?style=flat&logoColor=60dafb&logo=react">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/glaubermatos/feedback-widget?color=%2304D361&style=flat">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=flat">
  
  <br>
  
  <a href="https://github.com/glaubermatos/feedback-widget/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/glaubermatos/feedback-widget?style=flat">
  </a>
    
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/glaubermatos/feedback-widget?style=flat">

</p>


<h4 align="center"> 
	🚧  Trilha impulse finalizada! 🚧
</h4>

## 🏁 Tópicos

<p>
 👉<a href="#-sobre-o-projeto" style="text-decoration: none; "> Sobre o projeto</a> <br/>
👉<a href="#-funcionalidades" style="text-decoration: none"> Funcionalidades</a> <br/>
👉<a href="#-layout" style="text-decoration: none; "> Layout</a> <br/>
👉<a href="#-milha-extra" style="text-decoration: none; "> Milha extra</a> <br/>
👉<a href="#-tecnologias" style="text-decoration: none; "> Tecnologias</a> <br/>
👉<a href="#-como-executar-o-projeto" style="text-decoration: none"> Como executar</a> <br/>
👉<a href="#-autor" style="text-decoration: none"> Autor</a> <br/>
👉<a href="#-user-content--licença" style="text-decoration: none"> Licença</a>

</p>
<br>

<a name="-sobre-o-projeto"></a>

## 📚 Sobre o projeto


#### 👉 Projeto Fullstack ReactJS + NodeJS
<br>

Projeto fullstack desenvolvido durante a trilha impulse da 8° edição da Next Level Week da Rocketseat.

Aplicação front-end desenvolvida com ReactJS consiste em um widget para coleta de feedbacks dos usuários, permitindo tirar uma screenshot da tela.

O back-end desenvolvido em NodeJS recebe os dados do feedback do usuário e salva em um banco de dados PostgreSQL e envia um email para o administrador do site.

#### 🎓 Instrutor
- ReactJS + NodeJS - [Diego Fernandes](https://www.linkedin.com/in/diego-schell-fernandes/)

<br>

Para conferir o resultado só clicar no link abaixo:

<a align="center" href="https://feedback-widget-glauber.vercel.app/">
    <img alt="app feedback-widget" src="https://img.shields.io/static/v1?label=aplicação web&message=feedback-widget&color=F1972C&style=flat&logo=vercel">
</a>

---

<a name="-funcionalidades"></a>

<br>

## 🎯 Funcionalidades

- ✔️ Envio de feedbacks (Problemas, Idéias, Outro)
- ✔️ Capturar screenshot do usuário com html2canvas
- ✔️ Uso do MailTrap para o envio de e-mails

<br>

---


<a name="-layout"></a>

## 🎨 Layout


Você pode visualizar o layout do projeto através do link abaixo, é preciso ter uma conta no [figma](https://www.figma.com/)

- **[Layout Frontend](https://www.figma.com/community/file/1102912516166573468/Feedback-Widget)** (Criado por @ilanamallak)

<br>

<p align="left">
  <br />
  <img alt="Feedback Widget" title="Feedback Widget" src=".github/cover-feedback-widget.jpg" width="800px" />
</p>

<br>

---


<a name="-milha-extra"></a>

<br>

## ✈️ Milha extra

- ✔️ Tema light e dark (de acordo com as preferências do usuário)
- ✔️ README.md
- [ ] Validação do formulário
- [ ] Dashboard para visualizar todos os feedbacks
- [ ] Autenticação para acesso ao Dashboard
- [ ] Envio do email com Mailchimp ou outro

<br>

---

<br>

<a name="-tecnologias"></a>

## 🧪 Tecnologias


- ### 🤖 **Server**
  Rest API  desenvolvido em NodeJS e Typescript: 

  - **[NodeJS](https://nodejs.org/en/)**
  - **[TypeScript](https://www.typescriptlang.org/)**
  - **[Express](https://nodejs.org/en/)** (Trabalhar com rotas HTTP)
  - **[Prisma](https://www.typescriptlang.org/)** (ORM)
  - [Jest](https://jestjs.io/) - (Testes unitários)
  - [nodemailer](https://nodemailer.com/) - (Módulo para NodeJS que facilita o envio de email)
  - [SQlite](https://www.sqlite.org/) (Banco de dados para ambiente de desenvolvimento)
  - [PostgreSQL](https://www.postgresql.org/) - (Banco de dados em produção)

  <br>

  > Veja o arquivo [package.json](https://github.com/glaubermatos/feedback-widget/blob/main/server/package.json)

  <br>


- ### 💻 **Web**
  Aplicação web ReactJS e Typescript: 
  
  - **[Vite](https://vitejs.dev/)**
  - **[ReactJS](https://reactjs.org/)**
  - **[TypeScript](https://www.typescriptlang.org/)**
  - **[Tailwindcss](https://tailwindcss.com/)** - (Estilização)
  - [Phosphor React](https://phosphoricons.com/) - (Ícones)
  - [Axios](https://github.com/axios/axios) - (Requisições HTTP)
  - [Headless-ui](https://headlessui.dev/) - (Popover com acessibilidade)
  - [Html2Canvas](https://html2canvas.hertzen.com/) - (Screenshot da tela)

  <br>

  > Veja o arquivo [package.json](https://github.com/glaubermatos/feedback-widget/blob/main/web/package.json)

  <br>


#### 🛠️ **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Teste de API: **[Insomnia](https://insomnia.rest/)**
- Sandbox para envio de e-mails: **[MailTrap](https://mailtrap.io/)** 

<br>

---

<!-- <a name="-demonstracao"></a>

<br>

## 🕹️ Demonstração

<a align="center" href="https://www.linkedin.com/posts/glaubermatos_desenvolvimentoweb-springboot-nextjs-activity-6905992105182015488-CfRu">
    <img alt="happy-web" src="https://img.shields.io/static/v1?label=post&message=feedback-widget&color=F1972C&style=flat&logo=linkedin">
</a>

<br>

--- -->

<br>

<a name="-como-executar-o-projeto"></a>

## 🚀 Como executar o projeto

### **Pré-requisitos**

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [NodeJS](https://nodejs.org/en/), [NPM](https://www.npmjs.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

Primeiro faça o clone do projeto

```bash
# Clone este repositório
$ git clone https://github.com/glaubermatos/feedback-widget.git
```


<br>

### 🤖 **Para executar o back-end (server)**

#### 👉 Variáveis de ambiente do back-end

Necessário para configurar o sqlite em ambiente de desenvolvimento

```bash

# Faça uma cópia do arquivo .env.example para a raiz do projeto back-end renomeando para .env (este por sua vez será ignorado pelo Git):
$ cp .env.example .env
```

```bash
# Acesse a pasta do projeto no seu terminal/cmd
$ cd feedback-widget/server

# Instale as dependências
$ npm install

# Execute o prisma migrate para criar e aplicar as migrations no banco de dados
$ npx prisma migrate dev

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor estará executando na porta:3333
```

Use o [Insomnia](https://insomnia.rest/) para testar a rota de cadastro passando um objeto JSON contendo os dados do feedback.

> POST http://localhost:3333/feedbacks

```JSON
{
  "type": "BUG",
  "comment": "Ta tudo bugado!"
}
```

<br>

### 💻 **Para executar o front-end (web)**

<br>


❗ **NOTE** O back-end precisa estar rodando para que o projeto web possa enviar os dados do feedback.
<br>

#### 👉 Variáveis de ambiente do front-end

Necessário para configurar o endereço do backend para o axios realizar a requisição HTTP.

```bash

# Faça uma cópia do arquivo .env.local.example para a raiz do projeto web renomeando para .env.local (este por sua vez será ignorado pelo Git):
$ cp .env.local.example .env.local
```

```bash
# Acesse a pasta do projeto no seu terminal/cmd
$ cd feedback-widget/web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O front-end web estará executando no endereço http://localhost:3000
```



<br>

---

<br>

<a name="-autor"></a>

## 👨‍🚀 Autor

<br>

<p>
 <img src="https://avatars.githubusercontent.com/u/10993285?v=4" width="150px;" alt="glaubermatos"/>
 <br />
 <sub><strong>🌟 Glauber de Oliveira Matos 🌟</strong></sub>
</p>

[![Linkedin Badge](https://img.shields.io/badge/-linkedin-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/glaubermatos/)](https://www.linkedin.com/in/glaubermatos/)

<br>

---

<br>

<a name="-user-content--licença"></a>

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com :satisfied: por Glauber de Oliveira Matos 👋🏽 [Entre em contato!](https://www.linkedin.com/in/glaubermatos/)

<br>