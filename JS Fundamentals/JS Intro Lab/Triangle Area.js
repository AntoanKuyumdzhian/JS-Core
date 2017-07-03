function calc(a, b, c) {
    let semi = (a + b + c) / 2
    return Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c))
}