# Preparação do Ambiente de Desenvolvimento  
>
Os passos definidos a seguir preparam o ambiente de desenvolvimento para o uso do TypeORM.
>


## Instalar o Node.js 
>
O [Node.js](https://nodejs.org/en/download/) viabiliza a criação de aplicações Back-End codificadas em na linguagem JavaScript.  
>
>
A instalação do Node.js é acompanhado da instalação do NPM (Node Package Manager). O NPM permite a inclusão de pacotes de software ao ambiente de execução do Node.js no qual são incluidas novas funcionalidades na forma de dependencias.     
>
>
Usar os seguintes comandos para verificar a correta instalação do Node.js e do NPM:
```
node -v
```
e

```
npm -v
```
>



## Instalar o Compilador TypeScript 
>
O [TypeScript](https://www.typescriptlang.org/download) é uma evolução do JavaScript que permite o uso da programação orientada a objetos no ambiente do Node.js. 
>
A instalação do TypeScript é feita de forma global da seguinte forma:
```
npm install -g typescript
```
>
Após a instalação testar se o compilador está operante executando o seguinte comando:
```
tsc -version 
```
>

## Instalar o TypeORM
>
O [TypeORM](https://typeorm.io/) é um [ORM](https://pt.wikipedia.org/wiki/Mapeamento_objeto-relacional) que executa no ecosistema Node.js nas seguintes plataformas  Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, e Electron. Pode ser usado com TypeScript e JavaScript (ES5, ES6, ES7, ES8).
```
npm install typeorm --save 
```
>
>

A instalação global é uma outra forma que usa o seguinte comando:
```
npm install typeorm -g
```
## Instalar o reflect-metada

O pacote reflect-metada é usado pelo TypeORM em funcionalidades de reflexão.

```
npm install reflect-metadata --save 
```

## Instalar o node typings
>
O pacote types do node incorpora os tipos necessários ao uso do TypeORM.

```
npm install @types/node --save-dev  
```
> 

## Instalar o driver do banco de dados 

### Sqlite
>
Instalar o drive do Sqlite.
>

```
npm install sqlite3 --save
```
### MySql
>
Instalar o drive do MySql.
>
```
npm install mysql --save
```
