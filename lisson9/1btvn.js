// 4. Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các
// quý và năm tương ứng.
// Dữ liệu của năm: theo hàng.
// Dữ liệu của quý: theo cột.
let growth = [
	[5, 8, 9, 16],
	// 5 + 8 + 9 + 16 = 38 /4 = 9.5
	[2, 7, 1, 9],
	// 2 + 7 + 1 + 9 = 19 / 4 = 4.75
	[5, 6, 8, 12],
	// 5 + 6 + 8 + 12 = 31 / 4 = 7.75
	[10, 2, 1, 8],
	[20, 4, 9, 1],
];
// console.log(growth[1][2])
// -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm
// (Tính trung bình theo hàng).
// const newArr = [];
// for (let i = 0; i < growth.length; i++) {
// 	let sum = 0;
// 	for (let j = 0; j < growth[i].length; j++) {
// 		sum = sum + growth[i][j];
// 	}
// 	const avg = sum / growth[i].length;
// 	newArr.push(avg);
// }
// console.log(newArr);

// -Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
// let max = newArr[0];
// let year = 0;
// for (let i = 0; i < newArr.length; i++) {
// 	if (newArr[i] > max) {
// 		max = newArr[i];
// 		year = i;
// 	}
// }
// console.log(
// 	'Năm ',
// 	year + 1,
// 	' có giá trị tăng trưởng trung bình cao nhất, với giá trị là ',
// 	max
// );

// -Tìm giá trị tăng trưởng theo quý lớn nhất.
// let max = growth[0][0];
// for (let i = 0; i < growth.length; i++) {
// 	for (let j = 0; j < growth[i].length; j++) {
// 		if (growth[i][j] > max) {
// 			max = growth[i][j];
// 		}
// 	}
// }
// console.log(max);
// -Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).
const listAvg = [];
for (let i = 0; i < growth[0].length; i++) {
	let sum = 0;
	for (let j = 0; j < growth.length; j++) {
		sum = sum + growth[j][i];
	}
	const avg = sum / growth.length;
	listAvg.push(avg);
}
console.log(listAvg);