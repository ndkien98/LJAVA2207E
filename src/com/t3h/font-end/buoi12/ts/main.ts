var dogName: string = 'mickey';

var dogAge = 10;

var dogDie: boolean = true;
interface IPerson {
    firstName:string,
    lastName:string,
    sayHi: ()=>string
}

// ex 2 interface
var customer:IPerson = {
    firstName: 'TOM',
    lastName: 'JOIN',
    sayHi: () => {return 'helo' + customer.firstName + customer.lastName}
}
console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())


// class
class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    getSalary() : number {
        return 10000;
    }
}

