function solve(arr) {
    let count = arr.shift();
    console.log(arr.slice(0, count).join(' '));
    console.log(arr.slice(-count).join(' '));
}