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
	๐ง  Trilha impulse finalizada! ๐ง
</h4>

## ๐ Tรณpicos

<p>
 ๐<a href="#-sobre-o-projeto" style="text-decoration: none; "> Sobre o projeto</a> <br/>
๐<a href="#-funcionalidades" style="text-decoration: none"> Funcionalidades</a> <br/>
๐<a href="#-layout" style="text-decoration: none; "> Layout</a> <br/>
๐<a href="#-milha-extra" style="text-decoration: none; "> Milha extra</a> <br/>
๐<a href="#-tecnologias" style="text-decoration: none; "> Tecnologias</a> <br/>
๐<a href="#-como-executar-o-projeto" style="text-decoration: none"> Como executar</a> <br/>
๐<a href="#-autor" style="text-decoration: none"> Autor</a> <br/>
๐<a href="#-user-content--licenรงa" style="text-decoration: none"> Licenรงa</a>

</p>
<br>

<a name="-sobre-o-projeto"></a>

## ๐ Sobre o projeto


#### ๐ Projeto Fullstack ReactJS + NodeJS
<br>

Projeto fullstack desenvolvido durante a trilha impulse da 8ยฐ ediรงรฃo da Next Level Week da Rocketseat.

Aplicaรงรฃo front-end desenvolvida com ReactJS consiste em um widget para coleta de feedbacks dos usuรกrios, permitindo tirar uma screenshot da tela.

O back-end desenvolvido em NodeJS recebe os dados do feedback do usuรกrio e salva em um banco de dados PostgreSQL e envia um email para o administrador do site.

#### ๐ Instrutor
- ReactJS + NodeJS - [Diego Fernandes](https://www.linkedin.com/in/diego-schell-fernandes/)

<br>

Para conferir o resultado sรณ clicar no link abaixo:

<a align="center" href="https://feedback-widget-glauber.vercel.app/">
    <img alt="app feedback-widget" src="https://img.shields.io/static/v1?label=aplicaรงรฃo web&message=feedback-widget&color=F1972C&style=flat&logo=vercel">
</a>

---

<a name="-funcionalidades"></a>

<br>

## ๐ฏ Funcionalidades

- โ๏ธ Envio de feedbacks (Problemas, Idรฉias, Outro)
- โ๏ธ Capturar screenshot do usuรกrio com html2canvas
- โ๏ธ Uso do MailTrap para o envio de e-mails

<br>

---


<a name="-layout"></a>

## ๐จ Layout


Vocรช pode visualizar o layout do projeto atravรฉs do link abaixo, รฉ preciso ter uma conta no [figma](https://www.figma.com/)

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

## โ๏ธ Milha extra

- โ๏ธ Tema light e dark (de acordo com as preferรชncias do usuรกrio)
- โ๏ธ README.md
- [ ] Validaรงรฃo do formulรกrio
- [ ] Dashboard para visualizar todos os feedbacks
- [ ] Autenticaรงรฃo para acesso ao Dashboard
- [ ] Envio do email com Mailchimp ou outro

<br>

---

<br>

<a name="-tecnologias"></a>

## ๐งช Tecnologias


- ### ๐ค **Server**
  Rest API  desenvolvido em NodeJS e Typescript: 

  - **[NodeJS](https://nodejs.org/en/)**
  - **[TypeScript](https://www.typescriptlang.org/)**
  - **[Express](https://nodejs.org/en/)** (Trabalhar com rotas HTTP)
  - **[Prisma](https://www.typescriptlang.org/)** (ORM)
  - [Jest](https://jestjs.io/) - (Testes unitรกrios)
  - [nodemailer](https://nodemailer.com/) - (Mรณdulo para NodeJS que facilita o envio de email)
  - [SQlite](https://www.sqlite.org/) (Banco de dados para ambiente de desenvolvimento)
  - [PostgreSQL](https://www.postgresql.org/) - (Banco de dados em produรงรฃo)

  <br>

  > Veja o arquivo [package.json](https://github.com/glaubermatos/feedback-widget/blob/main/server/package.json)

  <br>


- ### ๐ป **Web**
  Aplicaรงรฃo web ReactJS e Typescript: 
  
  - **[Vite](https://vitejs.dev/)**
  - **[ReactJS](https://reactjs.org/)**
  - **[TypeScript](https://www.typescriptlang.org/)**
  - **[Tailwindcss](https://tailwindcss.com/)** - (Estilizaรงรฃo)
  - [Phosphor React](https://phosphoricons.com/) - (รcones)
  - [Axios](https://github.com/axios/axios) - (Requisiรงรตes HTTP)
  - [Headless-ui](https://headlessui.dev/) - (Popover com acessibilidade)
  - [Html2Canvas](https://html2canvas.hertzen.com/) - (Screenshot da tela)

  <br>

  > Veja o arquivo [package.json](https://github.com/glaubermatos/feedback-widget/blob/main/web/package.json)

  <br>


#### ๐?๏ธ **Utilitรกrios**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Teste de API: **[Insomnia](https://insomnia.rest/)**
- Sandbox para envio de e-mails: **[MailTrap](https://mailtrap.io/)** 

<br>

---

<!-- <a name="-demonstracao"></a>

<br>

## ๐น๏ธ Demonstraรงรฃo

<a align="center" href="https://www.linkedin.com/posts/glaubermatos_desenvolvimentoweb-springboot-nextjs-activity-6905992105182015488-CfRu">
    <img alt="happy-web" src="https://img.shields.io/static/v1?label=post&message=feedback-widget&color=F1972C&style=flat&logo=linkedin">
</a>

<br>

--- -->

<br>

<a name="-como-executar-o-projeto"></a>

## ๐ Como executar o projeto

### **Prรฉ-requisitos**

Antes de comeรงar, vocรช vai precisar ter instalado em sua mรกquina as seguintes ferramentas:
[Git](https://git-scm.com), [NodeJS](https://nodejs.org/en/), [NPM](https://www.npmjs.com/).
Alรฉm disto รฉ bom ter um editor para trabalhar com o cรณdigo como [VSCode](https://code.visualstudio.com/).

Primeiro faรงa o clone do projeto

```bash
# Clone este repositรณrio
$ git clone https://github.com/glaubermatos/feedback-widget.git
```


<br>

### ๐ค **Para executar o back-end (server)**

#### ๐ Variรกveis de ambiente do back-end

Necessรกrio para configurar o sqlite em ambiente de desenvolvimento

```bash

# Faรงa uma cรณpia do arquivo .env.example para a raiz do projeto back-end renomeando para .env (este por sua vez serรก ignorado pelo Git):
$ cp .env.example .env
```

```bash
# Acesse a pasta do projeto no seu terminal/cmd
$ cd feedback-widget/server

# Instale as dependรชncias
$ npm install

# Execute o prisma migrate para criar e aplicar as migrations no banco de dados
$ npx prisma migrate dev

# Execute a aplicaรงรฃo em modo de desenvolvimento
$ npm run dev

# O servidor estarรก executando na porta:3333
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

### ๐ป **Para executar o front-end (web)**

<br>


โ **NOTE** O back-end precisa estar rodando para que o projeto web possa enviar os dados do feedback.
<br>

#### ๐ Variรกveis de ambiente do front-end

Necessรกrio para configurar o endereรงo do backend para o axios realizar a requisiรงรฃo HTTP.

```bash

# Faรงa uma cรณpia do arquivo .env.local.example para a raiz do projeto web renomeando para .env.local (este por sua vez serรก ignorado pelo Git):
$ cp .env.local.example .env.local
```

```bash
# Acesse a pasta do projeto no seu terminal/cmd
$ cd feedback-widget/web

# Instale as dependรชncias
$ npm install

# Execute a aplicaรงรฃo em modo de desenvolvimento
$ npm run dev

# O front-end web estarรก executando no endereรงo http://localhost:3000
```



<br>

---

<br>

<a name="-autor"></a>

## ๐จโ๐ Autor

<br>

<p>
 <img src="https://avatars.githubusercontent.com/u/10993285?v=4" width="150px;" alt="glaubermatos"/>
 <br />
 <sub><strong>๐ Glauber de Oliveira Matos ๐</strong></sub>
</p>

[![Linkedin Badge](https://img.shields.io/badge/-linkedin-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/glaubermatos/)](https://www.linkedin.com/in/glaubermatos/)

<br>

---

<br>

<a name="-user-content--licenรงa"></a>

## ๐ Licenรงa

Este projeto esta sobe a licenรงa [MIT](./LICENSE).

Feito com :satisfied: por Glauber de Oliveira Matos ๐๐ฝ [Entre em contato!](https://www.linkedin.com/in/glaubermatos/)

<br>