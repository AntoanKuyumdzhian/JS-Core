function calc(number) {
    let html = '<ul>\n'
    for(let i=1; i<=number; i++){
        if(i % 2 === 0){
            html += `<li><span style="color:blue">${i}</span></li>\n`
        } else {
            html += `<li><span style="color:green">${i}</span></li>\n`
        }
    }
    return html += '</ul>'
}
