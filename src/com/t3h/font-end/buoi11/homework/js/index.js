var data = []

var constant = {
    contentAdd : '<label for="name">Tên ngoại tệ</label>\n' +
    '                <input type="text" class="form-control" id="name">\n' +
        '                <input type="text" value="" hidden class="form-control" id="idForm">\n' +
    '\n' +
    '                <label for="code">Mã ngoại tệ</label>\n' +
    '                <input type="text" class="form-control" id="code">\n' +
    '\n' +
    '                <label for="type">Loại ngoại tệ</label>\n' +
    '\n' +
    '                <form id="type">\n' +
    '                    <label><input type="checkbox" class="form-check-input" name="fromAdd-buy" id="buy"> Mua</label>\n' +
    '                    <label><input type="checkbox" class="form-check-input" name="fromAdd-sel" id="sel"> Bán</label>\n' +
    '                </form>',
    addTitle: 'Thêm mới',
    addBtn: '<button id="add" type="" onclick="addData()" class="btn btn-success" data-dismiss="modal">Thêm mới</button>'
    ,exitBtn: '<button id="exit" type="" class="btn btn-light" data-dismiss="modal" >Thoát</button>',
    updateTitle: 'Chỉnh sửa',
    updateBtn: '<button id="btnUpdate" type="" class="btn btn-warning" data-dismiss="modal">Chỉnh sửa</button>',

    deleteContent: '<label >Bạn chắc chắn muốn xóa ngoại tệ</label>\n' +
        '                <label id="nameNT"></label>',
    deleteBtn: '<button type="button" class="btn btn-danger" data-dismiss="modal" id="btnDelete">Xác nhận</button>'
    ,deleteTitle: 'Xóa'
}



class information {
    constructor(id,tenNgoaiTe, maNgoaiTe, mua, ban, maCanBoCapNhat, thoiGianCapNhat) {
        this.id = id;
        this.tenNgoaiTe = tenNgoaiTe;
        this.maNgoaiTe = maNgoaiTe;
        this.mua = mua;
        this.ban = ban;
        this.maCanBoCapNhat = 'defaut'
        this.thoiGianCapNhat = 'defaut'
    }
}

if1 = new information(1,'USD', 'NT1', 'YES', 'NO', 'defaut', 'defaut');
if2 = new information(2,'EURO', 'NT2', 'N0', 'YES', 'defaut', 'defaut');
if3 = new information(3,'RUB', 'NT3', 'YES', 'NO', 'defaut', 'defaut');
if4 = new information(4,'RUB', 'NT4', 'NO', 'YES', 'defaut', 'defaut');
if5 = new information(5,'USD', 'NT5', 'NO', 'YES', 'defaut', 'defaut');
if6 = new information(6,'EURO', 'NT6', 'YES', 'NO', 'defaut', 'defaut');

data.push(if1)
data.push(if2)
data.push(if3)
data.push(if4)
data.push(if5)
data.push(if6)

// khi load xong taon bo du lieu
$(document).ready(function (){

    renderTable(data)

})

var renderTable = (data) => {
    let bodyTable = $('#tableData > tbody');
    bodyTable.empty();
    for (let i = 0; i < data.length; i++) {

        let valueCheckBuy = data[i].mua === 'YES' ? 'checked' : "";
        let valueCheckSel = data[i].ban === 'YES' ? 'checked' : "";
        let htmlRow = '<tr>\n' +
            '            <td> ' + i + 1 +' </td>\n' +

            '            <td>' + data[i].tenNgoaiTe + ' </td>\n' +
            '            <td>' +data[i].maNgoaiTe + '</td>\n' +
            '            <td><input class="form-check-input" type="checkbox" ' + valueCheckBuy + '></td>\n' +
            '            <td><input class="form-check-input" type="checkbox" ' + valueCheckSel + '></td>\n' +
            '            <td>' +data[i].maCanBoCapNhat + '</td>\n' +
            '            <td>' +data[i].thoiGianCapNhat + '</td>\n' +
            '            <td><button type="button" onclick="setUpUpdate(event)" class="btn btn-warning" data-toggle="modal" data-target="#modelContent" id=' + data[i].id +'>Chỉnh sửa</button></td>\n' +
            '            <td><button type="button" class="btn btn-danger" name="' + data[i].id +'" data-toggle="modal" data-target="#modelContent" id=idRowDelete' + data[i].id +'>Xóa</button></td>\n' +
            '        </tr>'


        bodyTable.append(htmlRow);

        $('#idRowDelete' + data[i].id).on("click",function (){

            resetHtmlModal();

            let id = this.name;

            let info = data.find(obj => obj.id == id);

            // set up dete
            resetHtmlModal();
            let modalContent = $('.modal-body');
            modalContent.append(constant.deleteContent)
            $('.modal-footer').append(constant.deleteBtn).append(constant.exitBtn);
            $('.modal-title').append(constant.deleteTitle);
            $('#nameNT').text(info.tenNgoaiTe);
            $('#btnDelete').on('click',function (){
                console.log($('#nameNT').html());
            });
        })
    }
}

function setUpAdd(){
    resetHtmlModal();
    let modalContent = $('.modal-body');
    modalContent.append(constant.contentAdd)
    $('.modal-footer').append(constant.addBtn).append(constant.exitBtn);
    $('.modal-title').append(constant.addTitle);
}

var addData = () => {
    let infor = new information();
    infor.tenNgoaiTe = $('#name').val();
    infor.maNgoaiTe = $('#code').val();

    infor.mua = 'NO';
    infor.ban = 'NO'
    let arrCheckBox = $("input[name*='fromAdd']")
    for (let i = 0; i < arrCheckBox.length; i++) {
        if(arrCheckBox[i].name.includes("buy") && arrCheckBox[i].checked){
             infor.mua = 'YES';
        }else if (arrCheckBox[i].name.includes("sel") && arrCheckBox[i].checked){
            infor.ban = 'YES';
        }
    }
    infor.id = data.length + 1;
    data.push(infor);
    renderTable(data);
}

function resetHtmlModal(){
    let modalContent = $('.modal-body');
    modalContent.empty();
    $('.modal-footer').empty();
    $('.modal-title').empty();

}

var setUpUpdate = (e) => {

    resetHtmlModal();
    let modalContent = $('.modal-body');
    modalContent.append(constant.contentAdd)
    $('.modal-footer').append(constant.updateBtn).append(constant.exitBtn);
    $('.modal-title').append(constant.updateTitle);

    let id = e.target.id;
    let info = data.find(obj => obj.id == id);

    $('#name').val(info.tenNgoaiTe);
    $('#code').val(info.maNgoaiTe);
    $('#buy').attr("checked",info.mua === 'YES');
    $('#sel').attr("checked",info.ban === 'YES');
    $('#idForm').val(info.id);

    $('#btnUpdate').on('click',function () {

        let infoUpdate = getValueInForm();
        // let info = data.find(obj => obj.id === infoUpdate.id);
        let indexUpdate;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == infoUpdate.id){
                indexUpdate = i;
                break;
            }
        }
        data[indexUpdate] = infoUpdate;
        renderTable(data);
    })
}

var getValueInForm = () => {
    let infor = new information();
    infor.tenNgoaiTe = $('#name').val();
    infor.maNgoaiTe = $('#code').val();
    infor.id = $('#idForm').val();
    infor.mua = 'NO';
    infor.ban = 'NO'
    let arrCheckBox = $("input[name*='fromAdd']")
    for (let i = 0; i < arrCheckBox.length; i++) {
        if(arrCheckBox[i].name.includes("buy") && arrCheckBox[i].checked){
            infor.mua = 'YES';
        }else if (arrCheckBox[i].name.includes("sel") && arrCheckBox[i].checked){
            infor.ban = 'YES';
        }
    }
    return infor;
}

