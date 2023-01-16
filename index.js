// let a = 0;
//  function abc(){
//     a = 10;
//  }
//   function vv(){
//     console.log(a);
//   }
//   vv();
//   console.log(typeof(null))
//   console.log(typeof(undefined))
//   console.log(typeof(Array))
console.log("hey..");

let studentRecords = [
    {name: 'Jhon',id: 123 ,marks:98},
    {name: 'baba',id: 101 ,marks:23},
    {name: 'yaga',id: 200 ,marks:45},
    {name: 'wick',id: 115 ,marks:75}
]

// question 1 solution
const nameUpper=studentRecords.map(element=>(element.name.toUpperCase()))
console.log(nameUpper)
// let arrName=[];
// for(let i=0;i<studentRecords.length;i++){
// arrName.push(studentRecords[i].name.toUpperCase())
// }
// console.log(arrName);
// studentRecords.map(index)
// question 2 solution
const highMark=[]
 studentRecords.forEach(element=>{
    if(element.marks>50){
       highMark.push(element) 
    }
})
console.log(highMark)

// question 3 solution
const highIdMarks=[];
studentRecords.forEach(item=>{
if(item.id>120 && item.marks>50){
    highIdMarks.push(item)
}
})
console.log(highIdMarks);

// question 4 solution
let sumOFMarks=0
studentRecords.map(item=>{
    sumOFMarks+=item.marks;
})
console.log(sumOFMarks)
// question 5 solution
let nameOfHigh=[];
studentRecords.forEach(element=>{
    if(element.marks>50){
        nameOfHigh.push(element.name)
    }
})
console.log(nameOfHigh);

// question 6 solution
let highIdHighMarks=0;
studentRecords.forEach(element=>{
    if(element.id>120){
        highIdHighMarks+=element.marks
    }
})
console.log(highIdHighMarks)

// question 7 solution
// const graceMarks=
studentRecords.forEach(element=>{
    if(element.marks<50){
        element.marks+=15
    }
})
let graceMarks=0;
studentRecords.forEach(element=>{
    if(element.marks>50){
        graceMarks +=element.marks
    }
})
console.log(graceMarks)

// Question 8 solution
function student(a,b,c){
    this.name = a,
    this.class = b,
    this.rollno = c
}
const stuArr=[]

let student1 = new student(1,'jhon',12)
let student2 = new student(2,'sown',12)
let student3 = new student(3,'wick',12)
let student4 = new student(4,'trixi',12)
let student5 = new student(5,'taylor',12)
let student6 = new student(6,'selena',12)
stuArr.push(student1)
stuArr.push(student2)
stuArr.push(student3)
stuArr.push(student4)
stuArr.push(student5)
stuArr.push(student6)

console.log(stuArr);
