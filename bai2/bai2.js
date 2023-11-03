var arr = [1, 2, 3, 4, ];
 //        0  1  2  3
var arr2 = [ 5, 6, 8, 7, 9,8];

console.log(arr.concat(arr2)); // Gộp mảng

console.log(arr.join(" ")); // Chuyển mảng thành chuỗi

console.log(arr.slice(1, 3)); // Cắt mảng // 0 1 2 3   1<= x < 3

var arr3 = arr.splice(0, 3, 5, 6, 7, 9 , 100); // Cắt mảng và thêm phần tử vào mảng
console.log("arr3 :" + arr3)
console.log("arr :" +arr)

console.log(arr2.reverse()); // Đảo ngược mảng

console.log(arr2.sort()); // Sắp xếp mảng

console.log(arr2.indexOf(8)); // Tìm vị trí phần tử trong mảng

console.log(arr2.lastIndexOf(8)); // Tìm vị trí phần tử trong mảng

console.log(arr2.includes(10)); // Kiểm tra phần tử có tồn tại trong mảng không

console.log(arr2.find((item) => item > 5)); // Tìm phần tử đầu tiên thỏa mãn điều kiện

console.log(arr.length) // do dai mang

console.log(arr2.pop()); // Xóa phần tử cuối mảng
console.log(arr2)

console.log(arr2.push(10)); // Thêm phần tử vào cuối mảng
console.log(arr2)

console.log(arr2.shift()); // Xóa phần tử đầu mảng
console.log(arr2)

console.log(arr2.unshift(10)); // Thêm phần tử vào đầu mảng
console.log(arr2)

console.log(arr2.fill(10)); // Thay thế tất cả các phần tử trong mảng bằng 1 phần tử khác





//cau1
var arr = [1, 2, 3, 5]
var arr2 = arr
var arr3 = [...arr]

console.log(arr3);
console.log(arr2);


//cau2
var arrA=["hello", "xin chao"]
var arrB=["bonjour", "ola"]
var waysToSayHello = [...arrA, ...arrB]
var waysToSayHello2 = arrA.concat(arrB)


console.log(arrA);
console.log(arrB);
console.log(waysToSayHello);
console.log(waysToSayHello2);


//cau3
var arrX = [0, 1, 2, 3, 4, 5, 6, 7, 8]
var arrSquare = arrX.map((item) => item * item)
var arrOdds = arrX.filter((item) => item % 2 === 1)


console.log(arrX);
console.log(arrSquare);
console.log(arrOdds);

//cau4
var arr= [1,5,4,6]
var  filterRange = (arr, a, b) => {
    let newArr = arrCau4.slice( a , b + 1);
    return newArr;
}
console.log(newArr)