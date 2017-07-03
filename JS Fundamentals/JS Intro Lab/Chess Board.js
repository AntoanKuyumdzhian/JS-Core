function calc(size) {
    let html = '<div class="chessboard">\n'

    for(let i=1; i<=size; i++){
        html += '<div>\n'

        for(let j=1; j<=size; j++){
            if((i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 === 0)){
                html += '<span class="black"></span>\n'
            } else {
                html += '<span class="white"></span>\n'
            }
        }
        html += '</div>\n'
    }
    return html += '</div>'
}

console.log(calc(6))