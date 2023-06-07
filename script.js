function addDaysToAugust(days, offStart){
    let tbl = document.getElementById("Calendar");
    let date = 1;

    while (days >= date){
        let tr = tbl.insertRow();
        for (let i = 0; i < 7; i++){
            if (offStart > 0){
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(`    `))
                offStart -= 1;
            } else if (days >= date) {
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(`${date}`));
                date += 1;
            } else {
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(`     `));
            }
        }
    }
}

addDaysToAugust(31, 2);

