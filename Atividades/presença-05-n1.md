# N1 - ATIVIDADE DE PRESENÇA Nº 5

## Domínio do Problema
    - Carrinho de Compras Online

## Entidades
    - Clientes
    - Administrador da Loja
    - Administrador do sistema

## CLASSES
### CLASSE: PESSOA
#### Atributos
        - Nome
        - Cpf
        - E-mail
        - Senha
#### Métodos
        - cadastraNome
        - cadastraCpf
        - cadastraEmail
        - definirSenha

### CLASSE: CLIENTE
#### Atributos
        - NumCartaoCred
        - NumCartaoDeb
        - CVV
        - Endereco
#### Métodos 
        -   definirNumCartaoCred
        - definirNumCartaoDeb
        - definirCVV
        - cadastraEndereco

### CLASSE: CARRINHO
#### Atributos
        - Produto
        - EstoqueProd
        - Preco
        - qtdProd
        - CodBarras
        - MetPag

#### Métodos
    - checaEstoqueProd
    - mostraProd
    - mostraPreco
    - mostraQtdProd
    - defineMetPag
    - finalizaCompra
    - geraCodBarra
    - cobraCartaoCred
    - cobraCartaoDeb
        
