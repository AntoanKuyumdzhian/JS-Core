function solve(json) {
    let html = '<table>\n';
    let arr = JSON.parse(json);
    html += '  <tr>';

    for (let key of Object.keys(arr[0])) {
        html += `<th>${htmlEscape(key)}</th>`;
    }
    html += '</tr>\n';

    for (let obj of arr) {
        html += '  <tr>';
        for (let value of Object.values(obj)) {
            html += `<td>${htmlEscape(value)}</td>`;
        }
        html += '</tr>\n';
    }

    return html + '</table';

    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

solve('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]')