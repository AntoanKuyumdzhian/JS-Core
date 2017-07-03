function solve(text) {
    let result = [];
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9]\d*) - ([A-Za-z0-9 \-]+)$/;

    for (let employee of text) {
        let match = regex.exec(employee);
        if (match === null) continue;
        result.push(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`)
    }
    return result.join('\n');
}