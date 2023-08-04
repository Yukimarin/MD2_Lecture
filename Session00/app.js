// Ôn tập về JS nâng cao
// ES6
// 1.Arrow Function
// Hàm sẽ có khởi tạo và thực thi
// 3 cách khai báo:
//  Declaration Function
// function tinhTong(a, b) {
//   return a + b;
// }
// // Expression Function
// let tinhTong = function (a, b) {
//   return a + b;
// };
// // Arrow Function
// let tinhTong = (a, b) => {
//   return a + b;
// };

// 2.Template String: sử dụng dấu backtick + ${}

// 3.Spread Operator(Toán tử ...)
// let arr = [1, 2, 3];
// // Clone mảng với spread operator
// let newArr = [...arr];
// // console.log(newArr);
// // Nối các phần tử trong 2 mảng arr và arr1
// let arr1 = [4, 5, 6];
// // let result=[...arr,arr1] => kết quả: [1,2,3,[4,5,6]]
// let result = [...arr, ...arr1]; //[1,2,3,4,5,6]
// console.log(result);
// VD:
// let arr2 = [1, 2, 3];
// let arr = arr2; // ghi ở cùng 1 ô nhớ
// let arr3 = [...arr2]; // ghi ở 2 ô nhớ khác nhau dẫn đến là arr2 thay
// // đổi thi arr3 không nhận được sự thay đổi
// arr2.push(4);
// console.log(arr); //1,2,3,4
// console.log(arr3); //1,2,3

// 4.Destructuring (Phá vỡ cấu trúc)
// 4.1 Array
// let arr = ["Javascript", "Java", "NodeJS"];
// // Lấy giá trị Javascript: console.log(arr[0])
// let [a, b, c] = arr;
// console.log(a, b, c);

// 4.2 Object
// let student = {
//   id: 1,
//   name: "Nguyễn Văn A",
//   age: 18,
// };
// let { id, age } = student;
// console.log(id, age);

// 5.Ôn tập các hàm map(),forEach(),find(),filter(),findIndex(),...
// let arr = [1, 2, 3, 4];
//5.1 Sử dụng phương thức map() để nhân các phần tử trong mảng arr lên 2 lần
// let result = arr.map((e) => e * 2);
// // Khai báo biến result
// // Sử dụng phương thức map để duyệt qua từng phần tử của mảng arr
// // Mỗi lần duyệt sẽ nhân các phần tử đó lên 2 lần
// // Kết quả: sẽ trả về 1 mảng mới chứa các phẩn tử được *2
// console.log(result);//[2,4,6,8]

// 5.2 Sử dụng forEach()
// kết quả: chỉ duyệt qua từng phần tử của mảng và KHÔNG TRẢ VỀ MẢNG MỚI
// let result = arr.forEach((e) => e * 2);
// console.log(result); //undefined

// 5.3 find() tìm các phần tử lớn hơn 2
// Kết quả: Sẽ trả về giá trị đầu tiên trong mảng thỏa mãn điều kiện bài toán
// Nếu không tìm thấy giá trị thỏa mãn => undefined
// let result = arr.find((e) => e > 5);
// console.log(result);

// 5.4 findIndex() tìm các phần tử lớn hơn 2
// Kết quả: Sẽ trả về vị trí index của phần tử đầu tiên thỏa mãn điều kiện bài toán
// Nếu không tìm thấy giá trị thỏa mãn thì trả về -1
// let result = arr.findIndex((element) => element > 5);
// console.log(result);

// 5.5 filter() tìm các phần tử lớn hơn 2
// kết quả: Sẽ trả về mảng chứa tất cả các giá trị thỏa mãn điều kiện bài toán
// Nếu không tìm thấy giá trị thỏa mãn sẽ trả về mảng rỗng
// let result = arr.filter((e) => e > 5);
// console.log(result);

//Local Storage
// Cập nhật dữ liệu
// localStorage.setItem("key", JSON.stringify("value"))
// Lấy dữ liệu
// JSON.parse(localStorage.getItem("key"))
// Xóa dữ liệu
// localStorage.removeItem("key")

let student = {
  id: 1,
};

student.name = "nguyễn Văn A";
console.log(student);
delete student.name;
console.log(student);
