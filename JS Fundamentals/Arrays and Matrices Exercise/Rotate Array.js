function solve(arr) {
    let counter = Number(arr.pop());
    counter %= arr.length;
    let temp = '';
    for (let i = 1; i <= counter; i++) {
        temp = arr.pop();
        arr.unshift(temp);
    }
    return arr.join(' ');
}