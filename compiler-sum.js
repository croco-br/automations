function add2(a, b) {
    if (a == 0) return b;
    return add2(a - 1, b + 1);
}

console.log(add2(1, 0))
console.log(add2(0, 0))
console.log(add2(0, 1))
console.log(add2(1, 1))
console.log(add2(1, 99))
