function printDecimal(value) {
    return value.toString(10);
}
function printOctal(value) {
    return value.toString(8);
}
function printHexadecimal(value) {
    return value.toString(16);
}
function printBinario(value) {
    return value.toString(2);
}
console.log("|Decimal|\t |Octal| \t|Hexadecimal|\t |Binario|");
console.log('-------\t -----\t ----------- \t-------');
for (var index = 0; index < 255; index++) {
    console.log("".concat(printDecimal(index), "| \t\t").concat(printOctal(index), "|\t\t").concat(printHexadecimal(index), "|\t\t\t").concat(printBinario(index)));
}
