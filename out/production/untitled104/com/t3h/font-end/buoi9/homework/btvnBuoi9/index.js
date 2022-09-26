var data = []
var maCanBoCapNhatFakeData = ['cb1', 'cb2', 'cb3', 'cb4', 'cb5', 'cb6', 'cb7', 'cb8', 'cb9', 'cb10']
var statusFakeData = ['22/09/2022', '01/07/2021', '07/11/2022', '04/07/2023', '04/09/2023', '09/02/2021', '04/02/2021'];
let headerAdd = "Thêm mới"
var contentAdd = '<form action="/action_page.php">\n' +
    '    <div class="form-group">\n' +
    '      <label for="codeDoc">Mã hồ sơ:</label>\n' +
    '      <input type="text" class="form-control" id="codeDoc" placeholder="Enter email" name="email">\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label for="shortName">Tên viết tắt:</label>\n' +
    '      <input type="text" class="form-control" id="shortName" placeholder="Enter email" name="email">\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label for="docName">Tên hồ sơ:</label>\n' +
    '      <input type="text" class="form-control" id="docName" placeholder="Enter email" name="email">\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label for="Ename">Tên hồ sơ tiếng anh:</label>\n' +
    '      <input type="text" class="form-control" id="Ename" placeholder="Enter email" name="email">\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label for="format">Định dạng:</label>\n' +
    '      <input type="text" class="form-control" id="format" placeholder="Enter email" name="email">\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label for="maxKT">KT Tối đa(MB):</label>\n' +
    '      <input type="number" class="form-control" id="maxKT" placeholder="Enter password" name="pwd">\n' +
    '    </div>\n' +
    '    <select class="form-select" id="">\n' +
    '      <option value="">Sử dụng</option>\n' +
    '      <option>Ngưng sử dụng</option>\n' +
    '    </select>\n' +
    '  </form>'

function insert(){

    let hoSo = new HoSo();
    hoSo.maHoSo = document.getElementById("codeDoc").value;
    hoSo.tenVietTat = document.getElementById("shortName").value;
    hoSo.tenHoSo = document.getElementById("docName").value;
    hoSo.tenHoSoTiengAnh = document.getElementById("Ename").value;
    hoSo.dinhDang = document.getElementById("format").value;
    hoSo.kTKetNoi = document.getElementById("maxKT").value;
    let currentDate = new Date();
    hoSo.thoiGianCapNhat = currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
    hoSo.maCanBoCapNhat = maCanBoCapNhatFakeData[1];
    data.push(hoSo);

    let table = document.getElementById("idTable");
    let row = table.insertRow();
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);
    var cell8 = row.insertCell(8);
    var cell9 = row.insertCell(9);
    var cell10 = row.insertCell(10);

    cell0.innerHTML = data.length;
    cell1.innerHTML = hoSo.maHoSo;
    cell2.innerHTML = hoSo.tenVietTat;
    cell3.innerHTML = hoSo.tenHoSo;
    cell4.innerHTML = hoSo.tenHoSoTiengAnh;
    cell5.innerHTML = hoSo.dinhDang;
    cell6.innerHTML = hoSo.kTKetNoi;
    cell7.innerHTML = hoSo.maCanBoCapNhat;
    cell8.innerHTML = hoSo.thoiGianCapNhat;
    cell9.innerHTML = '<button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#myModal">Cập nhập</button>'
    cell10.innerHTML = '<button type="button" class="btn btn-danger btn-lg" data-toggle="modal" data-target="#myModal">Xoá</button>'

    reset();
}

class HoSo {
    constructor(maHoSo, tenVietTat, tenHoSo, tenHoSoTiengAnh, dinhDang, kTKetNoi, maCanBoCapNhat, thoiGianCapNhat) {
        this.maHoSo = maHoSo;
        this.tenVietTat = tenVietTat;
        this.tenHoSo = tenHoSo;
        this.tenHoSoTiengAnh = tenHoSoTiengAnh;
        this.dinhDang = dinhDang
        this.kTKetNoi = kTKetNoi
        this.maCanBoCapNhat = maCanBoCapNhat
        this.thoiGianCapNhat = thoiGianCapNhat
    }
}

let hs1 = new HoSo(1, 'vt1', 'Thực tâp', 'Interm', 'Pdf', '36 MB', 'cb1', '22/08/2022');
let hs2 = new HoSo(3, 'vt2', 'Xin việc', 'Job1', 'word', '12 MB', 'cb2', '01/08/2022');
let hs3 = new HoSo(2, 'vt3', 'Thôi học', 'quit school', 'excel', '24 MB', 'cb3', '13/08/2022');
let hs4 = new HoSo(6, 'vt4', 'Ly hôn', 'divorce', 'Pdf', '56 MB', 'cb2', '07/09/2021');
let hs5 = new HoSo(4, 'vt5', 'Thực tâp', 'Interm', 'word', '98 MB', 'cb1', '30/02/2023');
let hs6 = new HoSo(5, 'vt6', 'Xin việc', 'job2', 'excel', '76 MB', 'cb3', '12/08/2022');

data.push(hs1);
data.push(hs2);
data.push(hs3);
data.push(hs4);
data.push(hs5);
data.push(hs6);

window.onload = function () {

    renderTable(data)
    document.getElementById("bntAdd").style.display = 'none';


}

function renderTable(data){
    for (let i = 0; i <data.length ; i++) {
        let table = document.getElementById("idTable");
        let row = table.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        var cell7 = row.insertCell(7);
        var cell8 = row.insertCell(8);
        var cell9 = row.insertCell(9);
        var cell10 = row.insertCell(10);

        cell0.innerHTML = new String(i +1);
        cell1.innerHTML = data[i].maHoSo;
        cell2.innerHTML = data[i].tenVietTat;
        cell3.innerHTML = data[i].tenHoSo;
        cell4.innerHTML = data[i].tenHoSoTiengAnh;
        cell5.innerHTML = data[i].dinhDang;
        cell6.innerHTML = data[i].kTKetNoi;
        cell7.innerHTML = data[i].maCanBoCapNhat;
        cell8.innerHTML = data[i].thoiGianCapNhat;
        cell9.innerHTML = '<button type="button" class="btn btn-warning btn-lg" data-toggle="modal" data-target="#myModal">Cập nhập</button>'
        cell10.innerHTML = '<button type="button" class="btn btn-danger btn-lg" data-toggle="modal" data-target="#myModal">Xoá</button>'
    }
}



function setUpAdd(){
    let modalContent = document.getElementById("contentModal");
    modalContent.innerHTML = contentAdd;
    document.getElementById("headerModel").innerText = headerAdd;
    document.getElementById("bntAdd").style.display = 'block';

}

function reset() {
    let modalContent = document.getElementById("contentModal");
    modalContent.innerHTML = '';
    document.getElementById("bntAdd").style.display = 'none';
}

var sorted = false;

function sort(){
    resetTable();
    if (sorted) {
        // chuyen du lieu trong table ve ban dau
        renderTable(data);
        sorted =false;
    }else {
        // sap xep du lieu
        let jsonData = JSON.parse(JSON.stringify(data));
        jsonData.sort((a,b) => (a.maHoSo > b.maHoSo) ? 1 : -1)
        renderTable(jsonData);
        sorted = true;
    }

}

function resetTable(){

    let table = document.getElementById("idTable");

    let rows = table.rows;

    for (let i = rows.length -1; i > 0 ; i--) {
        table.deleteRow(i);
    }
}