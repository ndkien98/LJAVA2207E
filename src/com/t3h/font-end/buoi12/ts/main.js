var dogName = 'mickey';
var dogAge = 10;
var dogDie = true;
// ex 2 interface
var customer = {
    firstName: 'TOM',
    lastName: 'JOIN',
    sayHi: function () { return 'helo' + customer.firstName + customer.lastName; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());


// class
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
