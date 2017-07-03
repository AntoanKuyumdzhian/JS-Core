function solve(text) {
    let start = 0;
    let end = 0;
    let output = [];

    while (start !== -1 || end !== -1) {
        start = text.indexOf('(', end + 1);
        end = text.indexOf(')', start);

        if (start !== -1 && end !== -1){
            output.push(text.substring(start + 1, end))
        } else {
            break;
        }
    }

    console.log(output.join(', '));
}

solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')