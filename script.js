const Http = new XMLHttpRequest();
const url = "https://crmtest.credenc.ml/v1/consultant-com2";
let data;
let dataLoaded = false;
Http.open("GET", url);
Http.setRequestHeader('x-auth-id', 473);
Http.setRequestHeader('x-auth-token', '1095f37a9006fddd68927efaf35b32c1')
Http.send();

Http.onreadystatechange = (e) => {
    data = JSON.parse(Http.responseText).leads;
    if (data && !dataLoaded) {
        dataLoaded = true;
        let table = document.querySelector("table");
        createTableHead(table, data[0]);
        for (let list of data) {
            let row = table.insertRow();
            addRows(table, list, row);
        }
    }
}

function createTableHead(table, list) {
    let tableHead = table.createTHead();
    let row = tableHead.insertRow();

    for (let key of Object.keys(list)) {
        let th = document.createElement('th');
        let text = document.createTextNode(key.toUpperCase());
        th.appendChild(text);
        row.appendChild(th);
    }
}

function addRows(table, list, row) {
    for (key in list) {
        let td = document.createElement('td');
        let text = document.createTextNode(list[key]);
        td.appendChild(text);
        row.appendChild(td);
    }
}