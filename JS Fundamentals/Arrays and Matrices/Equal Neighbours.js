function solve(matrix) {
    let neighbours = 0;
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row + 1][col]) {
                neighbours++;
            }
            if (matrix[row][col] == matrix[row][col + 1]) {
                neighbours++;
            }
        }
    }
    let row = matrix.length -1;
    for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] == matrix[row][col + 1]) {
            neighbours++;
        }
    }
    console.log(neighbours);
}

solve([['test', 'yes', 'yo', 'yo'],
    ['well', 'done', 'yo', '6'],
    ['not', 'not', 'yet', 'yet']]

)