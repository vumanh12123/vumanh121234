// Thực hành
// 1. Khai báo 1 mảng gồm các số bất kỳ.
const numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
// -Tính tích của các phần tử trong mảng đó.
let result = 1;
for (let number of numbers) {
	result = result * number;
}

// -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// Hướng làm
// Bước 1: tạo 1 mảng mới gồm các phần tử là các số chia hết cho 2
// Bước 2: tìm min trong mảng vừa tạo (ở bước 1)

// -Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// Bước 1: tạo 1 mảng mới gồm các phần tử là các số chia hết cho 3
// Bước 2: tìm max trong mảng vừa tạo (ở bước 1)

// -Tính giá trị trung bình của mảng.
// Bước 1: tính tổng các phần tử trong mảng
// Bước 2: trung bình cộng = tổng các phần tử trong mảng / số lượng phần tử trong mảng
// avg = sum / length

// -Lọc ra các số nguyên tố trong mảng.

// -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
for (let number of numbers) {
	if (number < 10) {
		console.log('Trong mảng có số nhỏ hơn 10');
		break;
	}
}
// -Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// for (let number of numbers) {
// 	if (number < 20) {
// 		console.log('Trong mảng có phần tử nhỏ hơn 20');
// 		break;
// 	}
// }
// -Nhập vào số n cho đến khi n là 1 số trong mảng s.n

// -Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần. (https://www.geeksforgeeks.org/bubble-sort/)


// . Tạo một danh sách đồ vật yêu thích của bạn với ul#favorite-list và các li.favorite-list-item. 

// const listTangLi = doccument.getElementsByclassName('favorite-list-ttem');
// Sử dụng DOM để thay đổi nội dung của tất cả li.favorite-list-item thành “I love this thing”.
// for(let tagLi of listTagLi){
// 	tagLi.innerText = 'i love this thing';
// 	tagLi.style.color = 'red;'
// } 
// Sử dụng DOM để thay đổi màu chữ của các li.favorite-list-item thành màu đỏ. 
// Nhập vào 1 đoạn text từ bàn phím. Thêm vào ul#favorite-list một li có nội dung là text vừa nhập vào.
// let input_t = prompt("Thêm vào list");
// let newli = document.createElement("li");
// newli.innerText = input_t;
// document.getElementById("favorite-list").append(newli);

// function sayHi() {
// 	alert('Hi friend');
// }

// document.getElementById('btn').onclick = sayHi;

// document.getElementById('btn').onclick = function () {
// 	console.log('Hello');
// };

// document.getElementById('btn').onclick = function () {
// 	console.log('Hello 2');
// };

// function sayHi() {
// 	alert('Hi friend');
// }

// document.getElementById('btn').onclick = sayHi;

// document.getElementById('btn').addEventListener('click', function () {
// 	console.log('addEventListener1');
// });

// document.getElementById('btn').addEventListener('click', function () {
// 	console.log('addEventListener2');
// });
// document.getElementById('btn').addEventListener('click', function () {
// 	console.log('addEventListener3');
// });






