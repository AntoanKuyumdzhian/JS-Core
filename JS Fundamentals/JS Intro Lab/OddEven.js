function clac(number) {
    if(number % 2 === 0) return 'even'
    else if(number % 2 === 1 || number % 2 === -1) return 'odd'
    else return 'invalid'
}