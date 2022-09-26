
class currency{
    constructor(codeDoc,shortName,timeUpdate,statusName,statusId) {
        this.codeDoc= codeDoc;
        this.shortName = shortName;
        this.timeUpdate = timeUpdate;
        this.statusName = statusName;
        this.statusId = statusId;
    }
}

var arrData = [];
var date = new Date("2022-09-02");
let day = date.getDate();
for (let i = 0; i < 10; i++) {
    let statusId = "s";
    let statusName = "";
    if (i % 2 === 0){
        statusId = statusId + 1;
        statusName = "Chấp nhận";
    }else {
        statusId = statusId + 2;
        statusName = "Từ chối";
    }
    day = day < 10 ? "0"+day : day;
    arrData.push(new currency(String.fromCharCode(getRandomArbitrary(65,90)) + "00" + i,"Hồ sơ " + i,day + "-0"+ date.getMonth() + "-"+date.getFullYear(),statusName,statusId))
    day++;
}

window.onload = function(){


    setDataToTable(arrData);


}


let searchData = () => {




}

function setDataToTable(arr){

    let table = document.getElementById("idTable");

    let totalRow = table.rows.length;

    for(let i=totalRow -1; i > 0 ; i --){
        table.deleteRow(i);
    }

    for(let i = 0;i < arr.length; i++){

        let row = table.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);

        cell0.innerHTML = new String(i + 1);
        cell1.innerHTML = arr[i].codeDoc;
        cell2.innerHTML = arr[i].shortName;
        cell3.innerHTML = arr[i].timeUpdate;
        cell4.innerHTML = arr[i].statusName;
        cell5.innerHTML = "<button type=\"button\" class=\"btn btn-warning btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Cập nhật</button>";
        cell6.innerHTML = "<button type=\"button\" class=\"btn btn-danger btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Xóa</button>";
    }
}

var sorted = false;

function sort(){
    if (sorted){
        setDataToTable(arrData);
        sorted=false;
    }else {
        let arrTerm = JSON.parse(JSON.stringify(arrData));
        // let arrTerm = arrData; // neu the nay se khong the ve lai vi tri random nhu ban dau
        for (let i = 0; i < arrTerm.length - 1; i++) {
            for (let j = i + 1; j < arrTerm.length; j++) {
                if (arrTerm[i].codeDoc > arrTerm[j].codeDoc){
                    let term = arrTerm[i];
                    arrTerm[i] = arrTerm[j];
                    arrTerm[j] = term;
                }
            }
        }
        setDataToTable(arrTerm);
        sorted = true;
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
