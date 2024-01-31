
function generate(len) {
    const arr = []

    for (let index = 0; index < len; index++) {
        arr.push(index)
    }

    return arr
}

function search(arr, term) {
    let low = 0;
    let high = arr.length - 1;
    let steps = 0

    while (low <= high) {
        steps++
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === term) {
            console.log(steps)
            return mid; // Return the index where the term is found
        }

        if (term < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    console.log(steps)
    return -1; // Return -1 to indicate the term was not found in the array
}
const arr = generate(100000000)

const result = search(arr, 129)

console.log(result)