let x: number = 10

console.log(x)

var y:number = 15.7845


console.log(typeof y)

console.log(y.toPrecision(3))

/////////tipo string


let firstName: string = "Ester"

console.log(firstName.toUpperCase())

let lastName: string = "Alves"

let fullName: string = (firstName + " " + lastName);

console.log(fullName)

//////array

let i: number[] = [1, 2, 3]

i.push(8)

console.log(i)

const n: string[] = ["Ester", "Matheus"]

let amor = (n[0] + " ama " + n[1])

console.log(amor)

//tipos de funções

function soma(a: number, b: number) {
    console.log(a + b)

}

soma(6, 7)


// retorno 

function greeting(name:string) {
    return `Olá, ${name}`
}

console.log(greeting("Ester"))
