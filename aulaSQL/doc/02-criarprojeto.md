# Criação de um Projeto TypeORM
>
A forma mais rápida de iniciar uso do TypeORM é usar comandos CLI (Comand Line Interface) para gerar uma estrutura de uma aplicação inicial. A estrutura da aplicação inicial funciona se estiver usando o TypeORM em uma aplicação Node.js.
>

## Como instanciar um projeto 
>
Nesse tópico iremos apresentar a criação de um projeto TypeScript que usa o TypeORM.
>

>
O comando abaixo cria um diretório(pasta) chamado MyProject onde será usado o driver do banco de dados mysql. 
```
npx typeorm init --name MyProject --database mysql 
```
> 
Os driver´s de banco de dados disponíveis para o uso do TypeORM são os seguintes:  `mysql, mariadb, postgres, cockroachdb, sqlite, mssql, sap, spanner, oracle, mongodb, cordova, react-native, expo, nativescript`. 
>

>
A seguinte estrutura de diretório será criada:
git add 
>
![This is a alt text.](/image/myproject.png "Estrutura de pastas e arquivos.")
>

>
A estrutura de pastas e arquivos criada acima funciona como um modelo inicial de um projeto TypeORM. O projeto poderá ser extendido criando novas entidades e módulos com funcionalidades que serão implementadas.
>


