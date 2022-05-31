var x = 10;
console.log(x);
var y = 15.7845;
console.log(typeof y);
console.log(y.toPrecision(3));
/////////tipo string
var firstName = "Ester";
console.log(firstName.toUpperCase());
var lastName = "Alves";
var fullName = (firstName + " " + lastName);
console.log(fullName);
//////array
var i = [1, 2, 3];
i.push(8);
console.log(i);
var n = ["Ester", "Matheus"];
var amor = (n[0] + " ama " + n[1]);
console.log(amor);
//tipos de funções
function soma(a, b) {
    console.log(a + b);
}
soma(6, 7);
// retorno 
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
console.log(greeting("Ester"));
