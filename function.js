function bangladesh(){
    console.log("bangladesh's sanggith: ");
    console.log("amr sonar bangla, ami tumay valobasi");
}
bangladesh();


function add(num1, num2=10){
    const sum = num1 + num2;
    return sum;
}
const total = add(20);
const total2 = add(100, 100);
console.log(total);
console.log(total2);