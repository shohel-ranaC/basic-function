function bangladesh(){
    console.log("bangladesh's sanggith: ");
    console.log("amr sonar bangla, ami tumay valobasi");
}
bangladesh();


function add(num1, num2=10){   // function parameter
    const sum = num1 + num2;
    return sum;        // function return
}
const total = add(20);      // parameter value pass
const total2 = add(100, 100);
console.log(total);
console.log(total2);


// function address(name, id, department){
//     const nameIs = n
// }
var student1 = { id: 101, name: 'Asha', department: 'software', subject: 'Data Structure'};
var student2 = { id: 102, name: 'Shohel', department: 'CSE', subject: 'Data Algorithm'};

var Name = student1.name;
var Id = student2.id;
var Department = student1.department;
var update = student1.department = 'Management';

console.log(update);
console.log(Id);
console.log(Department);
// var student1 = {id: 12, phone: 1234, name: 'Faruk'};

// var Id =student1.name;
// console.log(Id);
