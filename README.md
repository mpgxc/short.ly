<h1 align="center">
    <img alt="Short.Ly" src=".github/logo.png" width="300px" />
</h1>

<h3 align="center">
 Short.Ly - Another Link Shortener
</h3>

<blockquote align="center">“Sua única limitação é você mesmo”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mpgxc/short.ly?color=%2304D361">

  <a href="https://github.com/mpgxc">
    <img alt="Made by mpgxc" src="https://img.shields.io/badge/made%20by-mpgxc-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/mpgxc/short.ly/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/mpgxc/short.ly?style=social">
  </a>
</p>

## 🚀 Rotas

<h1 align="center">
    <a href="https://insomnia.rest/run/?label=Endpoints&uri=https%3A%2F%2Fgithub.com%2Fmpgxc%2Fshort.ly%2Fblob%2Fmain%2Fendpoints.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

</h1>

- `POST api/short`: Essa rota envia o corpo com a url para ser encurtada. Ex: `{"url": "https://www.example.com.br"}`

- `GET api/qrcode/:code`: Essa rota retorna um qrcode renderizado para um code passado nos parâmetros (`/:code`) que redireciona para a url inserida na rota `POST api/short`;

- `GET api/short/:code`: Essa rota recebe um code passado nos parâmetros (`/:code`) e redireciona para a rota original.


## ⚙️ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Postgress](https://www.postgresql.org/)

## 💻 Projeto

O Short.Ly é mais projeto encurtador de links, ele também cria um qrcode para o link original. :)

## 👣 Proxímos passos

Em breve.

## 🔖 Layout

Em breve.

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com by **mpgxc**
