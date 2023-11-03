let sum = (sum1,sum2) => sum1 + sum2
console.log("Tong:", sum(1,2));

let div = (div1,div2) => div1 / div2



const arr = [1, 2, 3] 
const arr2 = [7, 8, 9]
const arrString = [ "abc", "bcd", "cde"]

const arr3 = [...arr,...arr2]
const arr4 = [...arr, 4, 5, 6]
const arr5 = arr.map((item) => item * 2 * 3)
const arr6 = arrString.filter((item) => item.includes("d"))


console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);



const object = {
    name: "minbon",
    age: 16
}
const object2 ={
    address: "GoVap",
    phone: "0901253965"
}


const object3 = {...object,...object2}
const object4 = {...object, birthday: "22/05/2007"}

console.log(object3);
console.log(object4);


let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
]

const value = parseInt(prompt("Độ tuổi cần tìm ?"))
console.log(value)
const ageExits = student.filter((item) => item.age > value)
ageExits.length ? console.log(ageExits) : console.log("Không tìm thấy")

const courseValue = (prompt("Khóa học cần tìm ?"))
console.log(courseValue)
const courseExits  = student.filter((item) => item.course.includes(courseValue))
console.log(courseExits);

// const value =parseInt(prompt("Nhap tuoi hoc vien: ")) ;
// console.log(value)
// const ageExits = student.filter((item) => item.age > value);
// ageExits.length ? console.log(ageExits) : console.log("Khong co hoc vien nao")

// const courseValue = prompt("Nhap khoa hoc: ");
// console.log(courseValue)
// const courseExits = student.filter((item) => item.course.includes(courseValue));
// console.log(courseExits)