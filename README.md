# 🚀 NextStep - Mobile

## 📌 Sumário

- [📝 Descrição da Solução](#-descrição-da-solução)
- [🎥 Vídeo Pitch da Solução](#-vídeo-pitch-da-solução)
- [🧩 Estrutura da Solução](#-estrutura-da-solução)
- [▶️ Como Rodar o Projeto](#️-como-rodar-o-projeto)
- [📱 Detalhes do Aplicativo Mobile — React Native + Expo](#-detalhes-do-aplicativo-mobile--react-native--expo)
- [📱🚀 Como Rodar o Projeto Mobile (React Native + Expo)](#-como-rodar-o-projeto-mobile-react-native--expo)
- [🎥 Vídeo do Aplicativo Mobile em Funcionamento](#-vídeo-do-aplicativo-mobile-em-funcionamento)
- [👥 Integrantes](#-integrantes)

## 📝 Descrição da Solução

O NextStep é uma plataforma inteligente desenvolvida para preparar pessoas para as profissões do futuro, oferecendo trilhas de aprendizado modernas, estruturadas e personalizadas.

Em um mundo onde a tecnologia evolui em ritmo acelerado e as demandas do mercado mudam constantemente, o NextStep surge como uma solução completa para quem deseja se atualizar, se qualificar e avançar na carreira com segurança.

A plataforma possui **duas frentes principais**:
- 🌐 **Painel Web Administrativo** — onde gestores criam e organizam trilhas de estudo;

- 📱 **Aplicativo Mobile** — onde os usuários consomem conteúdos, acompanham seu progresso e recebem recomendações personalizadas.

As trilhas são criadas em áreas essenciais como **Backend, Frontend, Cloud, Dados e Inteligência Artificial**, podendo incluir cursos, artigos, vídeos, podcasts, desafios práticos e outros recursos externos.
Para agilizar o processo, o admin conta com uma **IA integrada**, capaz de gerar automaticamente descrições completas de trilhas a partir apenas do título informado.

No app, o usuário tem uma jornada clara, simples e guiada. Com ajuda da **IA recomendadora**, o NextStep analisa o perfil, interesses e objetivos do usuário por meio de um pequeno questionário e indica automaticamente a trilha mais adequada, tornando o processo de aprendizado muito mais assertivo.

---

## 🎥 Vídeo Pitch da Solução

Para entender a visão geral do **NextStep**, sua proposta, funcionalidades principais e o problema que a solução resolve, assista ao vídeo pitch preparado especialmente para apresentar o projeto de forma clara e objetiva.

**👉 Assista ao Vídeo Pitch aqui:**

[Clique para ver o vídeo pitch do NextStep](https://www.youtube.com/watch?v=hw-RtEkYCA4)

Este vídeo resume:

- O propósito da plataforma
- Como o NextStep ajuda na preparação para profissões do futuro
- Os diferenciais da solução
- Demonstrações visuais das principais telas
- A importância de cada módulo desenvolvido

> É a melhor forma de ter uma visão rápida, completa e direta sobre todo o ecossistema NextStep.

---

## 🧩 Estrutura da Solução

O **NextStep** foi desenvolvido com uma arquitetura moderna, modular e escalável, dividida em múltiplos serviços que se integram para entregar uma experiência fluida tanto para administradores quanto para usuários finais.

### ☕ Backend Administrativo — Java + Spring Boot

Responsável por toda a **lógica administrativa** da plataforma.

- CRUD de **trilhas** e **conteúdos** (cursos, artigos, desafios, etc.).
- Geração automática de descrições utilizando **IA integrada**.
- Exposição de APIs REST para o **painel web**.
- Integração direta com o **banco Oracle**.

[🔗 Repositório de Backend Java](https://github.com/felipesora/nextstep-backend-java)

### 🌐 Painel Web Administrativo — React.js

- Interface utilizada pelos **gestores** para criar e **gerenciar trilhas**.

- Desenvolvido em **React.js**.

- Consome exclusivamente a **API Java com Spring Boot**.

- Interface **moderna e responsiva**, focada em **produtividade**.

[🔗 Repositório do Frontend WEB](https://github.com/felipesora/nextstep-frontend-web)

### ⚙️ API do Usuário Final — .NET + ASP.NET Core

Camada que **atende o aplicativo mobile**.

- **Mapeia e expõe as tabelas de trilhas e conteúdos** criadas pelo backend Java.

- Responsável por **cadastro/login**, **progresso do usuário e consumo das trilhas**.

- Estruturada com **ASP.NET Core MVC + Entity Framework**.

- Focada em **alta performance e segurança**.

[🔗 Repositório de Backend .NET](https://github.com/felipesora/nextstep-backend-dotnet)

### 📱 Aplicativo Mobile — React Native + Expo

Aplicação voltada aos **usuários que irão consumir as trilhas**.

- Desenvolvido com **React Native + Expo**.

- Interface clara, intuitiva e otimizada para estudo.

- Consome a **API .NET**.

- Possui **IA recomendadora que sugere a trilha ideal com base no perfil do usuário**.

[🔗 Repositório do Mobile](https://github.com/felipesora/nextstep-frontend-mobile)

### 🗄️ Banco de Dados — Oracle

Armazena **todas as informações da plataforma**:

- Tabelas de **trilhas, conteúdos, usuários, progresso, notas e estatísticas**.

- Estrutura centralizada garantindo **consistência entre Java e .NET**.

[🔗 Repositório do Banco de Dados]()

### ☁️ Deploy & Infraestrutura — Azure

A API Java (admin) é publicada utilizando **práticas modernas de DevOps**:

- **Pipelines de CI/CD** no Azure DevOps.

- **Build automatizado**, execução de testes (quando houver) e **deploy contínuo**.

- Infraestrutura **escalável e segura**.

[🔗 Repositório de Cloud](https://github.com/felipesora/nextstep-cloud)

---

## 🗄️ Modelagem do Banco de Dados

Abaixo está a modelagem das tabelas utilizadas pelo sistema:

![Modelagem do banco](assets/docs/modelagem-nextstep.png)

---

## ▶️ Como Rodar o Projeto

Para executar o NextStep localmente, siga a ordem correta dos serviços, garantindo que cada camada esteja funcionando antes de iniciar a próxima.

Abaixo está o fluxo recomendado:

### 1️⃣ Rodar a API Administrativa — Java + Spring Boot

1. Certifique-se de ter o **Java 21+** instalado.

2. Configure a conexão com o banco Oracle no application.properties.

3. Inicie o projeto Spring Boot.

4. Aguarde a criação/mapeamento inicial das tabelas necessárias.

> 💡 **Importante:** É essa API que fornece todos os dados administrativos e cria as trilhas e conteúdos utilizados por todo o ecossistema.

### 2️⃣ Rodar o Painel Web Administrativo — React.js

1. Instale dependências com `npm install`.

2. Configure as variáveis de API em cada service, com a url da api `Java`

3. Rode com `npm run dev`.

4. Acesse o painel e **cadastre algumas trilhas e conteúdos** — isso é essencial para que o app mobile e a API .NET tenham dados para consumir.

### 3️⃣ Rodar a API do Usuário Final — .NET + ASP.NET Core

1. Instale o .NET 8+.

2. Configure a connection string do Oracle.

3. Inicie o projeto (`dotnet run`).

4. Essa API irá consumir as tabelas geradas pelo backend Java e disponibilizar os dados para o app mobile.

### 4️⃣ Rodar o Aplicativo Mobile — React Native + Expo

1. Instale dependências com `npm install`.

2. Configure as variáveis de API em cada service, com a url da api de `.NET`.

3. Rode com `npx expo start`.

4. Abra no celular ou emulador para testar a jornada do usuário final.

### 📌 Observação Importante

Cada parte do NextStep possui **seu próprio repositório e um README separado**, com **todas as instruções detalhadas** de instalação, configuração e execução.

Esta seção é apenas um **guia geral**, mostrando a ordem correta de execução dos componentes.

## 📱 Detalhes do Aplicativo Mobile — React Native + Expo

O aplicativo mobile do NextStep foi desenvolvido em **React Native utilizando Expo**, oferecendo uma experiência fluida, rápida e pensada para o usuário final.

Ele consome diretamente a **API .NET (ASP.NET Core)** para autenticação, listagem de trilhas, conteúdos e progresso do usuário.

O app foi projetado para ser simples, objetivo e focado na jornada de aprendizado do estudante.

### 📸 Prints do Aplicativo Mobile

A seguir, algumas telas representativas do aplicativo:

**🔐 Tela de Login**

![Tela de Login](assets/docs/login.png)

**📚 Lista de Trilhas Disponíveis**

![Tela de Trilhas](assets/docs/trilhas.png)

**🗃️ Conteúdos de uma Trilha**

![Tela de Conteúdos](assets/docs/conteudos.png)

**🤖 Recomendação da IA**

![Tela de IA](assets/docs/ia.png)

---

## 📱🚀 Como Rodar o Projeto Mobile (React Native + Expo)

Para executar o **NextStep Mobile em ambiente local**, siga os passos abaixo:

### 1️⃣ Instalar Dependências
No diretório do projeto, execute:

```bash
npm install
```
Isso instalará todas as dependências necessárias do React Native + Expo.

### 2️⃣ Rodar a API .NET Localmente (Obrigatório)

O aplicativo mobile consome a **API REST .NET**, portanto ela precisa estar rodando antes de iniciar o app.

Certifique-se de:

- Abrir o projeto **NS.Presentation (API .NET)**
- Atualizar o `launchSettings.json` para:

```json
{
  "profiles": {
    "NS.Presentation": {
      "commandName": "Project",
      "launchBrowser": true,
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      },
      "applicationUrl": "https://localhost:56501;http://localhost:56500"
    }
  }
}
```

Rodar as migrations (caso seja a primeira vez):
```
Update-Database
```

E então iniciar a API:
```
dotnet run
```

A API estará disponível em:

- [http://localhost:56500](http://localhost:56500)
- [https://localhost:56501](https://localhost:56501)

>⚠️ O mobile usa exatamente essas URLs — por isso elas não podem ser alteradas.


### 3️⃣ Executar o Aplicativo Mobile
Com a API .NET rodando, execute o app mobile com:

```bash
npx expo start
```
Isso abrirá o painel do Expo, permitindo:

- Rodar no celular via QR Code (Expo Go)
- Rodar no emulador Android
- Rodar no emulador iOS (Mac)

### 4️⃣ Utilizar o Aplicativo
Abra o navegador e acesse: 

Com tudo rodando, o app poderá:

- Fazer login
- Listar trilhas
- Abrir conteúdos
- Consumir toda a API localmente

---

## ☁️ Deploy da Solução

A solução NextStep possui deploy para o **backend administrativo (Java + Spring Boot) e para o painel web administrativo (React.js)**. Ambos estão publicados e integrados entre si.

### 🔸 **API Administrativa — Java (Spring Boot)**

A API Java está hospedada no Render, e pode ser acessada pela URL:

**👉 API Java (Deploy)**:
[https://nextstep-backend-java.onrender.com](https://nextstep-backend-java.onrender.com)

>⚠️ **Importante**: Como a API está hospedada no Render, ela pode levar alguns segundos para acordar ao ser acessada pela primeira vez após ficar inativa. Por isso, ao abrir o painel web, aguarde a API inicializar caso as chamadas retornem erro no primeiro momento.

### 🔸 Painel Web Administrativo — React.js

O painel web está devidamente publicado e configurado para consumir a API Java no deploy.

**👉 URL do Painel Web**:
[https://nextstep-frontend-web.vercel.app/](https://nextstep-frontend-web.vercel.app/)

Este front-end já está apontando para a URL pública da API Java, permitindo:

- Login com o usuário administrador padrão
- Criação de trilhas, conteúdos, recursos e categorias

>Lembre-se: se ao abrir o painel ocorrer erro de carregamento, provavelmente a API ainda está inicializando no Render. Basta aguardar alguns segundos e recarregar a página.

---

## 🎥 Vídeo do Aplicativo Mobile em Funcionamento

Para demonstrar o funcionamento do aplicativo mobile desenvolvido em **React Native + Expo**, disponibilizei um vídeo completo mostrando:

- A tela de login e autenticação via API .NET
- A listagem das trilhas cadastradas no painel administrativo
- A visualização dos conteúdos de cada trilha
- A navegação entre trilhas e detalhes
- A experiência real do usuário final consumindo os dados criados no painel web
- O fluxo completo do app integrado com toda a plataforma NextStep

👉 **Assista ao vídeo aqui**:
[Clique para ver o vídeo do Mobile](https://www.youtube.com/watch?v=TpzqbrjHSYg)

---

## 👥 Integrantes

- **Felipe Ulson Sora** – RM555462 – [@felipesora](https://github.com/felipesora)
- **Augusto Lopes Lyra** – RM558209 – [@lopeslyra10](https://github.com/lopeslyra10)
- **Vinicius Ribeiro Nery Costa** – RM559165 – [@ViniciusRibeiroNery](https://github.com/ViniciusRibeiroNery)
