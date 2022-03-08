import json
info = []
def adiciona_info():
    nome = input("Digite seu nome: ")
    telefone = input("Digite seu telefone: ")
    email = input("Digite seu email: ")

    info.append({
        'nome': nome,
        'telefone': telefone,
        'email': email,
    })

    with open("informacoes", 'a', uncode="utf-8") as f:
        json.dumps(info, f)



adiciona_info()