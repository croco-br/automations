function isHappy(n) {
    if (n === 1) return true

    let arr = n.toString().split('');
    let sum = 0;
    let results = [];

    while (sum !== 1) {
        sum = 0

        arr.forEach(a => {
            sum += parseInt(a) ** 2;
        });

        if (sum === 1) {
            return true;
        }

        if (results.includes(sum)) {
            return false;
        }

        results.push(sum);
        arr = sum.toString().split('');
        
        console.log(results)
    }
}

console.log(isHappy(25));
