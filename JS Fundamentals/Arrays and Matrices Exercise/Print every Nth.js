function solve(arr) {
    let step = Number(arr.pop());
    let result = arr[0];
    for (let i = step; i < arr.length; i += step) {
        result += '\n' + arr[i];
    }
    console.log(result);
}

solve(['5','20','31','4','20','2'])