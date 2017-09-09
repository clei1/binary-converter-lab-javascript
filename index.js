//Create a program that converts a decimal number to its binary equivalent. Write your code here.

function binary_to_decimal(int) {
    var digit = []
    for (var x = 0; x < int.length; x++) {
        digit.push(parseInt(int[int.length - x - 1]))
    }
    var finalSum = 0
    for (var x = 0; x < digit.length; x ++){
        finalSum += digit[x] * (2 ** x) 
    }
    return finalSum
}

console.log(binary_to_decimal('1010'))

function decimal_to_binary(int){
    var finalSum = ""
    while (int > 0){
        finalSum = (int % 2) + finalSum
        int = Math.floor(int/2)
    }
    return finalSum
}

console.log(decimal_to_binary(10))