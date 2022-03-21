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

    with open("informacoes", 'w', encoding="utf-8") as f:
        json.dump(info, f)

adiciona_info()