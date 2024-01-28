// 6. Nhập vào 1 dãy số s. Mỗi số cách nhau bởi dấu “,”.
// 1,2,3,4,5,6,7,8 => [1,2,3,4,5,6,7,8]
// string.split(',')
let s = prompt('Nhập dãy số');

const convertS = s.split(',');

for (let i = 0; i < convertS.length; i++) {
	convertS[i] = Number(convertS[i]);
}
// -Tìm số đầu tiên trong dãy lớn hơn 5 và chia hết cho 2.
// let result = null;
// for (let i = 0; i < convertS.length; i++) {
// 	if (convertS[i] > 5 && convertS[i] % 2 == 0) {
// 		result = convertS[i];
// 		break;
// 	}
// }
// if(result == null) {
//     console.log("Trong mảng không có phần tử nào hợp lệ")
// } else{
//     console.log("result: ", result);
// }
// => 6

// -Tìm tất cả số lẻ trong dãy s .
// => 1,3,5,7
for (let i = 0; i < convertS.length; i++) {
	if (convertS[i] % 2 === 1) {
		console.log(convertS[i]);
	}
}

// -Biến đổi dãy s thành dãy x mà các phần tử của dãy x là bình phương
// các phần tử của dãy s.
// x = '1,4,9,16,25,36,49,64'

for (let i = 0; i < convertS.length; i++) {
	convertS[i] = convertS[i] ** 2;
}
const x = convertS.join(',');
console.log(x);