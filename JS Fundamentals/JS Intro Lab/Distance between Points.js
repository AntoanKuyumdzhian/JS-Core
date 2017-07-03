function calcDistance(x1, y1, x2, y2) {
    let pointA = {x: x1, y: y1}
    let pointB = {x: x2, y: y2}

    let A = Math.pow(pointA.x - pointB.x, 2)
    let B = Math.pow(pointA.y - pointB.y, 2)

    return Math.sqrt(A + B)
}