produtos = []

def mostra_estoque():
    print('+------+----------------+-------+-----+-------+--------------+--------+')
    print('|#     |Produto         |Entrada|Saída|Estoque|Preço Unitario|Subtotal|')
    print('+------+----------------+-------+-----+-------+--------------+--------+')

    for (index, produto) in enumerate(produtos):
        print('|{:6s}|{:16s}|{:7s}|{:5s}|{:7s}|{:14s}|{:8s}|'.format(
            str(index + 1),
            produto['nome'],
            str(produto['entrada']),
            str(produto['saida']),
            str(produto['entrada'] - produto['saida']),
            str(produto['preco_unitario']).replace('.', ','),
            str(round(produto['preco_unitario'] * produto['entrada'], 2)).replace('.', ',')
        ))
        print('+------+----------------+-------+-----+-------+--------------+--------+')

def adiciona_produto():
    nome = input("Digite o nome do produto: ")
    entrada = int(input("Digite a entrada do produto: "))
    saida = int(input("Digite a saída do produto: "))
    preco_unitario = float(input("Digite o preço unitário do produto: "))

    produtos.append({
        'nome': nome,
        'entrada': entrada,
        'saida': saida,
        'preco_unitario': preco_unitario
    })

def mostra_total():
    total = 0
    for produto in produtos:
        total += produto['preco_unitario'] * produto['entrada']

    print('|      |                |       |     |       |TOTAL         |{:8s}|'.format(str(round(total, 2)).replace('.', ',')))
    print('+------+----------------+-------+-----+-------+--------------+--------+')

def mostra_menu():
    print("Escolha uma opção:")
    print("1. Mostrar estoque")
    print("2. Adicionar um produto")
    print("0. Parar o programa")

    resposta = str(input("\n>: "))

    if (resposta == '1'):
        mostra_estoque()
        mostra_total()
        mostra_menu()
    elif (resposta == '2'):
        adiciona_produto()
        mostra_menu()
    elif (resposta == '0'):
        exit()
    else:
        mostra_menu()

def main():
    mostra_menu()
if __name__ == '__main__':
    main()