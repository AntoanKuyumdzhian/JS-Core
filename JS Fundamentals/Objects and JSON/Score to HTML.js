function solve(json) {
    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th></tr>\n';
    let scores = JSON.parse(json);

    for(let score of scores){
        html += '  <tr>';
        html += `<td>${htmlEscape(score.name)}</td>`;
        html += `<td>${Number(score.score)}</td>`;
        html += '</tr>\n';
    }
    html += '</table>';

    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
    console.log(html);
}

solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');