function aggregate(arr) {
    let towns = [];
    let income = [];

    for (let line of arr) {
        towns.push(Array.from(line.split('|'))[1].trim());
        income.push(Number(Array.from(line.split('|'))[2].trim()));
    }

    console.log(towns.join(', '));
    console.log(income.reduce((a, b) => a + b));
}

aggregate(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)