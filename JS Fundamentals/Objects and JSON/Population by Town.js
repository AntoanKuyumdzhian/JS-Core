function solve(arr) {
    let towns = new Map;
    for (let row of arr) {
        let [town, pop] = row.split(' <-> ');

        if(!towns.has(town)){
            towns.set(town, 0)
        }
        towns.set(town, towns.get(town) + Number(pop));
    }
    [...towns].forEach(([town, pop]) => console.log(`${town} : ${pop}`))
}

solve([
'Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',
])