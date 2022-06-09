# Configurações de um Projeto TypeORM

## Instalar as dependências do novo projeto TypeORM
>
Entrar na pasta (diretório) e instalar as dependências.
```
cd MyProject 
npm install 
```
>

## Alterar a configuração da conexão ao banco de dados
>
O arquivo `data-source.ts` possui uma estrutura de dados que reune atributos da configuração para acessar o banco de dados. O código abaixo configura o acesso a um banco de dados `postgres`.
>

![This is a alt text.](/image/datasource.png "Cpnfiguração do acesso ao Banco de Dados.")

>
Os atributos que são configurados na maioria dos casos são: `host, username, password, database`. Algumas vezes o atributo `port` pode ser alterado. 
>

## Executar a aplicação
>
Após o termino da configuração e a instalação de todos os módulos node, você executa a aplicação chamando o seguinte comando:

```
npm start
```
>

## Gerar um projeto ESM
>
ESM significa ECMAScript module. É um padrão oficial de um formato para empacotar JavaScript.
>
>
A criação de um projeto Node ESM é realizada com o seguinte comando:
```
 npx typeorm init --name MyProject --database postgres --module esm
 ```
>

## Gerar um projeto com Espress
>
A criação de um projeto TypeORM em uma aplicação web usando o framework `express` é gerada da seguinte forma: 
>
>
```
npx typeorm init --name MyProject --database mysql --express
```
>

## Gerar um arquivo Docker Compose
>
A criação de um arquivo docker compose é feita da seguinte forma:
>
>
```
npx typeorm init --name MyProject --database postgres --docker
```
>