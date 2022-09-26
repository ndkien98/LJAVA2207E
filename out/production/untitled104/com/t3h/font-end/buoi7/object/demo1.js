var myFirstObject = {
    firstName: 'kiennd',
    favoriteAuthor: 'Music',
    10: 'Đây là số 10',
    greet: function() {
        console.log('Hello Bro!');
    }
};

console.log(myFirstObject);

console.log(myFirstObject.firstName)            //kiennd
console.log(myFirstObject['favoriteAuthor']);        //Music
console.log(myFirstObject.greet()); //Hello Bro!
console.log(myFirstObject['10']);  //'Đây là số 10',
console.log(myFirstObject.lastName);     //undefined

//Khoi tao object

//3.1 literal
const dog = { };
dog.name = "cho tay"
console.log(dog.name)

var test = {1: 'Test'};
var myCar = {
    brand: 'Mazda 3',
    run: function() {
        console.log('running');
    }
};

//3.2 constructor
//c1
const cat = new Object();
//c2
function Liveedu(student) {
    //properties
    this.student = student;

    //methods
    this.watch = function() {
        console.log(this.student + 'learns new tech skills');
    }
}

// instantiating the object
var liveedu = new Liveedu('kiennd ');

// accessing methods and properties
console.log(liveedu.student);
liveedu.watch(); //output is Quan learns new tech skills
console.log(Object.getPrototypeOf(liveedu)); //output is object

//3.3 static method
const horse = Object.create({ })

//4 get,set

let hello='HI';
let world='VN';

// Old way
const objOld = {
    hello: hello,
    world: world
}

// Modern way
const objNew = {
    hello,
    world,
}
console.log(objOld);
console.log(objNew);

// 5

//Hàm khởi tạo đối tượng

//c1
function person(name, age) {
    this.name = name;
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}

//Tạo đối tượng
var p = new person("Khoa", 19);

p.changeName("Vân");
//Giờ p.name bằng "Vân"

//c2
var myFirstObject2 = {
    firstName: 'kiennd',
    favoriteAuthor: 'Music',
    10: 'Đây là số 10',
    greet: function() {
        console.log('Hello Bro!');
    }
};

// 6 getter, setter

var obj = {
    age: 0,

    set ageInfo(age) {                              //Định nghĩa setter
        console.log('setter - ' + age);
        this.age = age;
    },

    get ageInfo() {                                 //Định nghĩa getter
        console.log('getter');
        return "Thông tin tuổi: " + this.age;
    }
};

obj.ageInfo = 25;          //Gán -> Tự động gọi settter
console.log(obj.ageInfo);        //Không phải gán -> Tự động gọi getter

// 6 this

const objT = {
    username: 'T3h',
    hello() {
        console.log(`My name is ${this.username}`)
    }
}

objT.hello(); // My name is Khoa

// 7) Kiểu dữ liệu tham trị và tham chiếu

//tao ra biến a
let a = 1;
//Tạo ra biến b gán bằng giá trị biến a
let b = a;
a = 3;
console.log(b); // b không bị thay đổi


// Ví dụ : Truyền tham số dạng tham trị
function changeNumber(a){
    //let a = b
    a = 0;
    console.log(a);//0
}

var b2 = 1;
changeNumber(b2);
console.log(b2)//1

//Tham chiếu
// khơi tạo biến a2 gán giá trị cho object, thục chất a2 lưu địa chỉ ô nhớ của object (a = #a003)
let a3 = {
    name: "cat"
}
// Tạo ra biến b3 gán giá trị biến a cho b, thực chất b nhận giá trị ô nhớ của object mà biến a đã lưu ( b = #a003)
let b3 = a3;

// Khi thay đổi giá trị của một thuộc tính của object vì cả 2 biến cùn tham chiếu đến cùng 1 địa chỉ ô nhớ lên khi b thay đổi => a của bị thay đổi
b3.name = "dog"
console.log(a3.name);

// vd 2

// Tạo ra 2 object lồng nhau,
const a4 = { // a4 chứa địa chỉ ô nhớ tham chiếu tới object (#a002) ({ id: 1, info: #i001 })
    id: 1,
    info: { // info chứa địa chỉ ô nhớ tham chiếu tới object là (#i001)
        name: 'T3h',
        age: 23
    }
}

const info = a4.info;
info.name = 'kiennd';
console.log(a4.info.name) // mặc dù biến a và info là const hằng nhưng đang lưu chữ địa chỉ ô nhớ, khi thay đổi là thay đổi giá trị của ô nhớ name lên vẫn thay được
// nếu thay info = b mới sảy ra lỗi

// vd 3, truyền tham chiếu
function changeName(people){
    let term = people;
    term.name = 'T3h';
    console.log("change name to " + people.name);
}

function changeName2(people){
    let manTerm = JSON.parse(JSON.stringify(people));
    manTerm.name = 'Hùng';
    console.log("change name to " + people.name);
}

const man = {name: 'Tuấn'};
changeName(man);
console.log(man.name); // T3h
changeName2(man);
console.log(man.name); // T3h



// class
class SinhVien {

    //Hàm khởi tạo
    constructor(hoTen, gioiTinh, MSSV, namSinh) {
        this.hoTen = hoTen;
        this.gioiTinh = gioiTinh;
        this.namSinh = namSinh;
        this.MSSV = MSSV;
    }

    //Khai báo phương thức
    hocBai() {
        console.log('Đang học bài...');
    }
    diNgu() {
        console.log('Đang ngủ...');
    }
    xemPhim() {
        console.log('Đang xem phim...');
    }

}


var sinhVien1 = new SinhVien("Ngô Minh Trung", "Nam", "B1704863", "1999");
console.log(sinhVien1);


// 8 So sánh object

const object1 = {
    value: 1
};

const object2 = {
    value: 1
};

const object3 = object1;

console.log(object1 === object3); // => true
console.log(object1 === object2); // => false

console.log(object1 == object3); // => true
console.log(object1 == object2); // => false

console.log(Object.is(object1, object3)); // => true
console.log(Object.is(object1, object2)); // => false


// so sanh thu cong
function isObjectEqual(object1, object2) {
    return object1.value === object2.value;
}

const object1t = {
    value: 1
};

const object2t = {
    value: 1
};

const object3t = {
    value: 2
};

isObjectEqual(object1t, object2t); // => true
isObjectEqual(object1t, object3t); // => false

// So sanh nong
function shallowObjectEqual(object1, object2) {

    // Lấy danh sách key của obj
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    // So sánh giá trị bên trong của các thuộc tính
    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
}

const object11 = {
    value: 1,
    name: 'Test'
};

const object21 = {
    value: 1,
    name: 'Test'
};

const object31 = {
    value: 1,
    name: 'Test Test'
};

const object41 = {
    value: 1
};

console.log(shallowObjectEqual(object11, object21)); // => true
console.log(shallowObjectEqual(object11, object31)); // => false
console.log(shallowObjectEqual(object11, object41)); // => false

// So sánh sâu
function deepObjectEqual(object1, object2) {
    // Lấy danh sách thuộc tính của object
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    // Kiểm tra chiều dài
    if (keys1.length !== keys2.length) {
        return false;
    }
    // Duyệt danh sách thuộc tính của object
    for (const key of keys1) {
        // Lấy ra giá trị của hai thuộc tính mỗi object
        const val1 = object1[key];
        const val2 = object2[key];
        // Kiểm tra xem hai giá trị của thuộc tính đấy có phải là object hay không
        const areObjects = isObject(val1) && isObject(val2);

        if (
            areObjects && !deepObjectEqual(val1, val2)//nếu giá trị là hai object tiếp tục gọi đệ quy lại hàm để so sánh
            || // hoặc nếu không
            !areObjects && val1 !== val2 // So sánh hai giá trị của object nếu hai trường dữ liệu đấy là hai trường thường
        ) {
            // nếu khác nhau trả về false
            return false;
        }
    }
    return true;
}
function isObject(object) {
    return object != null && typeof object === 'object';
}

const object1s = {
    value: 1,
    name: 'Test',
    address: {
        city: 'Ha Noi'
    }
};

const object2s = {
    value: 1,
    name: 'Test',
    address: {
        city: 'Ha Noi'
    }
};

console.log(deepObjectEqual(object1s, object2s)); // => true

console.log(JSON.stringify(object1s) === JSON.stringify(object2s)); // true
