function solve(arr) {
    let result = [];
    let temp = [];
    console.log(result);
    let pointer = 0;
    while (arr.length > 0) {
        result.push(arr.shift());
        temp = arr.filter(e => e >= arr[0])
        arr = temp;

    }
    console.log(result);
}

solve([1,3,8,4,10,12,3,2,24])