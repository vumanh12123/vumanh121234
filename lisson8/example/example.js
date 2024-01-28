// Cho mảng sau: numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
const numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];

// Tìm phần tử nhỏ nhất / lớn nhất trong mảng.
let min = numbers [0];
let max = numbers [0];
for ( let num of numbers) {
   if (num < min) {
      min = num;
   }
   if (num  > max) {
    max = num;
   }
}

// Tinh tong cac phan tu trong mang
let sum  = 0;
for (let number of numbers){
   sum = sum + number;
}
console.log(sum);

// Tính trung bình cộng
const avg = sum / numbers.length;

// Tính phần tử đầu tiên chia hết cho 3 trong mảng.
for (let number of numbers) {
   if (number % 3 ===0) {
      console.log(number);
      break;
   }
}

// Tìm các phần tử là số nguyên tố trong mảng 
for (let number of numbers) {
	let count = 0;
	for (let i = 1; i <= number; i++) {
		if (number % i === 0) {
			count++;
		}
	}
	if (count === 2) {
		console.log(number + ' là số nguyên tố');
	}
}
