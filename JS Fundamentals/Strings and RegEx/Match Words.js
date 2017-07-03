function solve(text) {
    let regex = /\w+/g;
    return text.match(regex).join('|');
}