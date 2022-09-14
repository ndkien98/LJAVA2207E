var dataAll = [];
var currentPage = 0;
var pageSize = 7;
var totalPage = 0;
var constant = {
    contentAdd : '<label for="name">Tên người dùng</label>\n' +
        '                <input type="text" class="form-control" id="name">\n' +
        '                <input type="text" value="" hidden class="form-control" id="idForm">\n' +
        '\n' +
        '                <label for="email">Địa chỉ email</label>\n' +
        '                <input type="text" class="form-control" id="email">\n' +
        '\n' +
        '                <label for="type">Giới tính</label>\n' +
        '\n' +
        '                <form id="sex">\n' +
        '                    <label><input type="radio" class="form-check-input" name="sex" id="Male"> Nam</label>\n' +
        '                    <label><input type="radio" class="form-check-input" name="sex" id="Female"> Nữ</label>\n' +
        '                </form>' +
        '<select id="status" class="form-select" aria-label="Default select example">\n' +
        '    <option selected>--Trạng thái--</option>\n' +
        '    <option value="active">Hoạt động</option>\n' +
        '    <option value="inactive">Không hoạt động</option>\n' +
        '    <option value="locked">Khóa </option>\n' +
        '</select>'

    ,
    addTitle: 'Thêm mới',
    addBtn: '<button id="add" type="" onclick="servicesUser.addData()" class="btn btn-success" data-dismiss="modal">Thêm mới</button>'
    ,exitBtn: '<button id="exit" type="" class="btn btn-light" data-dismiss="modal" >Thoát</button>',
    updateTitle: 'Chỉnh sửa',
    updateBtn: '<button id="btnUpdate" type="" class="btn btn-warning" data-dismiss="modal">Chỉnh sửa</button>',

    deleteContent: '<label >Bạn chắc chắn muốn xóa ngoại tệ</label>\n' +
        '                <label id="nameNT"></label>',
    deleteBtn: '<button type="button" class="btn btn-danger" data-dismiss="modal" id="btnDelete">Xác nhận</button>'
    ,deleteTitle: 'Xóa'
}

var utilsServices = {
    renderTable: function (data) {
        $('table > tbody').empty();
        for (let i = 0; i < data.length; i++) {
            let htmlRow = '<tr>\n' +
                '            <td> ' + (i + 1) +' </td>\n' +
                '            <td> ' + data[i].id +' </td>\n' +
                '            <td>' + data[i].email + ' </td>\n' +
                '            <td>' +data[i].gender + '</td>\n' +
                '            <td>' + data[i].name + '</td>\n' +
                '            <td>' + data[i].status + '</td>\n' +
                '            <td><button type="button" onclick="setUpUpdate(event)" class="btn btn-warning" data-toggle="modal" data-target="#modelContent" id=' + data[i].id +'>Chỉnh sửa</button></td>\n' +
                '            <td><button type="button" class="btn btn-danger" name="' + data[i].id +'" data-toggle="modal" data-target="#modelContent" id=idRowDelete' + data[i].id +'>Xóa</button></td>\n' +
                '        </tr>'
            $('table > tbody').append(htmlRow);
        }
    }
    ,
    setUpModal: function (content,actionBtn,title){
        this.resetHtmlModal();
        let modalContent = $('.modal-body');
        modalContent.append(content)
        $('.modal-footer').append(actionBtn).append(constant.exitBtn);
        $('.modal-title').append(title);
    },
    setUpUpdate: function (e) {


    },
    setUpAdd: function () {
        // this.resetHtmlModal();
        // let modalContent = $('.modal-body');
        // modalContent.append(constant.contentAdd)
        // $('.modal-footer').append(constant.addBtn).append(constant.exitBtn);
        // $('.modal-title').append(constant.addTitle);
        this.setUpModal(constant.contentAdd,constant.addBtn,constant.addTitle);
    },
    resetHtmlModal: function () {
        let modalContent = $('.modal-body');
        modalContent.empty();
        $('.modal-footer').empty();
        $('.modal-title').empty();
    },
    next: function (){
        // let dataTable = window.localStorage.getItem("dataTable");
        document.getElementById('previousTable').style.pointerEvents = 'auto';
        currentPage ++ ;
        let startIndex = currentPage * pageSize;
        let data = dataAll.slice(startIndex,startIndex + pageSize);
        utilsServices.renderTable(data);
        if (currentPage == totalPage){
            document.getElementById('nextTable').style.pointerEvents = 'none';
        }
    },
    previous: function (){
        document.getElementById('nextTable').style.pointerEvents = 'auto';
        currentPage--;
        let startIndex = currentPage * pageSize;
        let data = dataAll.slice(startIndex,startIndex + pageSize);
        utilsServices.renderTable(data);
        if (currentPage == 0){
            document.getElementById('previousTable').style.pointerEvents = 'none';
        }
    }
}

var servicesUser = {

    addData: function () {
        let user = this.getUserInform();
        $.ajaxSetup({ // set up content json để gửi lên server
            'headers':{
                'Content-Type':'application/json',}})
        $.post("https://salty-anchorage-90590.herokuapp.com/user",JSON.stringify(user),function (data, status){
            console.log(data + " status: " + status);

            utilsServices.renderTable(data);
        })

    },
    getUserInform: function (){
        let user = {};
        user.name = $('#name').val();
        user.email = $('#email').val();
        // $('input[name="sex"]').each(input => {
        //     if (input.checked){
        //         user.gender = input.id;
        //     }
        // });
        let arrSex = $('input[name="sex"]');
        for (let i = 0; i < arrSex.length; i++) {
            if(arrSex[i].checked){
                user.gender = arrSex[i].id;
            }
        }
        user.status = $('#status option:selected').text();
        return user;
    },
    getPageWithIndex: function (pageIndex){
        let start = pageIndex * pageSize;
        let data = dataAll.slice(start,start + pageSize);
        currentPage = pageIndex;
        utilsServices.renderTable(data);
    }
}

$(document).ready(function (){

    $.get("https://salty-anchorage-90590.herokuapp.com/user",function (data){
        console.log(data);
        dataAll = data;
        // window.localStorage.setItem("dataTable",data);
        totalPage = parseInt(data.length / pageSize);
        if (data.length % pageSize > 0){
            totalPage = totalPage + 1;
        }
        let dataInTable = data.slice(currentPage * pageSize,(currentPage * pageSize) + pageSize)
        utilsServices.renderTable(dataInTable);

        // totalBtn = totalPage
        $('.pagination').append('<li class="page-item"><a onclick="utilsServices.previous()" class="page-link" id="previousTable">Previous</a></li>');
        for (let i = 0; i < totalPage; i++) {
            $('.pagination').append('<li class="page-item"><a class="page-link" onclick="servicesUser.getPageWithIndex(' + i + ')" href="#">' + (i + 1) + '</a></li>')
        }
        $('.pagination').append('<li class="page-item"><a onclick="utilsServices.next()" class="page-link" id="nextTable">Next</a></li>')
    })
})








