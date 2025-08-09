# Red Bull Challenge - Product Management API

Este é um projeto desenvolvido como parte de um desafio, consistindo em uma API de gerenciamento de produtos construída com Ruby on Rails e conteinerizada com Docker para facilitar a configuração e a execução do ambiente de desenvolvimento.

## Stack de Tecnologias

* **Backend:** Ruby 3.2.2 com Rails 7.1
* **Autenticação:** Devise
* **Banco de Dados:** SQLite 3
* **Servidor:** Puma
* **Ambiente de Desenvolvimento:** Docker & Docker Compose

## Pré-requisitos

Antes de começar, garanta que você tenha os seguintes softwares instalados em sua máquina:

* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/products/docker-desktop/)
* [Docker Compose](https://docs.docker.com/compose/install/) (geralmente já vem com o Docker Desktop)

> **Observação:** É recomendado que a pasta do projeto não esteja em um caminho com espaços ou caracteres especiais (acentos, etc.) para evitar problemas com o Docker.

## Como Rodar o Projeto

Siga os passos abaixo para ter a aplicação rodando localmente em poucos minutos.

**1. Clone o Repositório**

Abra seu terminal e clone o projeto para a sua máquina local:
```bash
git clone [https://github.com/TalysonSoares/redbull.git](https://github.com/TalysonSoares/redbull.git)
```

**2. Acesse a Pasta do Projeto**

Navegue até o diretório raiz do projeto clonado:
```bash
cd redbull/redbull
```

**3. Inicie a Aplicação com Docker Compose**

Este comando irá construir a imagem Docker (na primeira vez), baixar as dependências e iniciar o servidor Rails.
```bash
docker compose up -d
```
O servidor estará rodando e acessível. Mantenha este terminal aberto.

**4. Prepare o Banco de Dados**

Com o servidor rodando, abra um **novo terminal**, navegue até a mesma pasta do projeto e execute as migrações do banco de dados:
```bash
docker compose exec web bin/rails db:migrate
```
Este comando cria as tabelas `products` e `users` necessárias para a aplicação funcionar.

**5. Acesse a Aplicação**

Pronto! Agora você pode abrir seu navegador e acessar:

[**http://localhost:3000**](http://localhost:3000)

## Comandos Úteis do Rails com Docker

Para executar qualquer comando do Rails (como `rake routes`, `db:seed`, console, etc.), use o prefixo `docker compose exec web`:

* **Acessar o console do Rails:**
    ```bash
    docker compose exec web bin/rails console
    ```

* **Rodar as seeds para popular o banco:**
    ```bash
    docker compose exec web bin/rails db:seed
    ```

* **Ver as rotas da aplicação:**
    ```bash
    docker compose exec web bin/rails routes
    ```

## Estrutura do Projeto

* `redbull/`: Contém a aplicação principal em Ruby on Rails e toda a sua configuração.
* `desafio-RedBull/`: Contém um projeto front-end separado.
* `docker-compose.yml`: Arquivo de orquestração para subir o ambiente de desenvolvimento de forma automatizada.

---
