
class information{
    constructor(BOS, Ten_chi_nhanh, So_ngoai_te_mua, Loai_ngoai_te, Ngay_dang_ki_nhan_tien, Trang_thai){
        this.BOS = BOS;
        this.Ten_chi_nhanh = Ten_chi_nhanh;
        this.So_ngoai_te_mua = So_ngoai_te_mua;
        this.Loai_ngoai_te = Loai_ngoai_te;
        this.Ngay_dang_ki_nhan_tien = Ngay_dang_ki_nhan_tien;
        this.Trang_thai = Trang_thai;
    }
}

var if1 = new information('120', 'CN Ha Noi',10000 , 'USD', '02/08/2022', 'Chấp nhận')
var if2 = new information('80', 'CN Ha Nam', 400, 'RUB', '04/08/2022', ' Khong chap nhan')
var if3 = new information('160', 'CN Thanh Hoa', 8000, 'EURO', '05/08/2022', 'Chấp nhận')
var if4 = new information('17', 'CN Ha Tinh', 1000, 'USD', '09/08/2022', 'Khong chap nhan')
var if5 = new information('19', 'Hà Nội', 1000, 'USD', '09/08/2022', 'Chấp nhận')
var if6 = new information('20', 'Hà Nội', 1000, 'USD', '09/08/2022', 'Chấp nhận')

var arr =[]
arr.push(if1); 
arr.push(if2); 
arr.push(if3); 
arr.push(if4);
arr.push(if5);
arr.push(if6);

console.log(arr)

window.onload = function(){

    let table = document.getElementById("idTable");
    
    let row = table.insertRow();
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);

    cell0.innerHTML = "1";
    cell1.innerHTML = arr[0].BOS;
    cell2.innerHTML = arr[0].Ten_chi_nhanh;
    cell3.innerHTML = arr[0].So_ngoai_te_mua;
    cell4.innerHTML = arr[0].Loai_ngoai_te;
    cell5.innerHTML = arr[0].Ngay_dang_ki_nhan_tien;
    cell6.innerHTML = arr[0].Trang_thai;
    

}


let searchData = () => {

    let result = arr;

    // let statusSelection = document.getElementById("Trang_thai");
    //
    // let text = statusSelection.options[statusSelection.selectedIndex].text;
    //
    // result = arr.filter(data => data.Trang_thai === text)

    // let fromDate = new Date(document.getElementById("fromDate").value);
    // let toDate = new Date(document.getElementById("toDate").value);
    //
    // result = arr.filter(data => {
    //     let arrValueD = data.Ngay_dang_ki_nhan_tien.split("/");
    //     let dataDate = arrValueD[2] + "-" + arrValueD[1] + "-" + arrValueD[0];
    //     let dateObject = new Date(dataDate);
    //     return fromDate <= dateObject && dateObject <= toDate;
    // })

    let obj = {};
    obj.Loai_ngoai_te = getTextSelection('Loai_ngoai_te');
    obj.Trang_thai = getTextSelection('Trang_thai');
    obj.Ten_chi_nhanh = getTextSelection('Ten_chi_nhanh');
    obj.Ngay_dang_ki_nhan_tien_fromDate = document.getElementById('fromDate').value;
    obj.Ngay_dang_ki_nhan_tien_toDate = document.getElementById('toDate').value;

    let arrKey = Object.keys(obj);


    result = arr.filter(data => {

        let conditionsPass = 0;

        for (const keyObj in obj) {
            let valueData ;
            let valueCondition ;
            if (keyObj === 'Ngay_dang_ki_nhan_tien_fromDate'){
                valueData = data['Ngay_dang_ki_nhan_tien'];
                valueCondition = obj['Ngay_dang_ki_nhan_tien_fromDate'];

                if(valueCondition === '' || getDate(valueCondition) <= getDate(valueData)) {
                    conditionsPass++;
                }
            }else if(keyObj === 'Ngay_dang_ki_nhan_tien_toDate'){
                valueData = data['Ngay_dang_ki_nhan_tien'];
                valueCondition = obj['Ngay_dang_ki_nhan_tien_toDate'];
                if(valueCondition === '' || getDate(valueData) <= getDate(valueCondition)) {
                    conditionsPass++;
                }
            }else {
                valueData = data[keyObj];
                valueCondition = obj[keyObj];
                if (valueCondition.includes("--") || valueCondition === valueData)
                    conditionsPass++;
            }
        }
        return conditionsPass === arrKey.length;
    })

    setDataToTable(result);
}

let getDate = (dateStr) => {
    let arrValue = dateStr.split("/");
    return new Date(arrValue[2] + "-" + arrValue[1] + "-" + arrValue[0]);
}

function getTextSelection(id){
    let selectE = document.getElementById(id);
    return selectE.options[selectE.selectedIndex].text;
}

function setDataToTable(arr){

    let table = document.getElementById("idTable");

    let totalRow = table.rows.length;

    for(let i=totalRow -1; i > 0 ; i --){
        table.deleteRow(i);
    }

    for(let i = 0;i<arr.length; i++){

        let row = table.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
    
        cell0.innerHTML = new String(i + 1);
        cell1.innerHTML = arr[i].BOS;
        cell2.innerHTML = arr[i].Ten_chi_nhanh;
        cell3.innerHTML = arr[i].So_ngoai_te_mua;
        cell4.innerHTML = arr[i].Loai_ngoai_te;
        cell5.innerHTML = arr[i].Ngay_dang_ki_nhan_tien;
        cell6.innerHTML = arr[i].Trang_thai;

    }
}
