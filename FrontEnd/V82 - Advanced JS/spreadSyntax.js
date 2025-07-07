function sum(a, b, c) {
    return a+b+c
}

let arr = [1, 4, 5]

// console.log(sum(arr[0], arr[1], arr[2]))

console.log(sum(...arr)) // '...' is a spread operator, that opens its element gives data stored in it.

// {0: 1, 1: 4, 2: 5}