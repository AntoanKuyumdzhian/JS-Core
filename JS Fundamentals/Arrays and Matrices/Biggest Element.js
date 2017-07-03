function solve(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(row => row.forEach(col => {
        if (col > biggestNum) {
            biggestNum = col;
        }
    }))
    return biggestNum;
}