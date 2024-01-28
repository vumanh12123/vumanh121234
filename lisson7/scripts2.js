// if(condition){
//   // code if
//}

// condition => true => code if se duoc thuc thi
// condition => false => code if se Khong duoc thuc thi

    // const age = 19;
    // if (age > 18) {

    // }

// const score = 9;
// if ('1') {
//     console.log('Hoc sinh gioi ');    
// }
//flasy => gon cac gia tri <=> false
// truthy => gom cac gia tri <=> true
//
// null
// undse

// if(condition)

// =>condition => true => code if se duoc thuc thi
// =>condition => false => code else  se duoc thuc thii

// const score = 7.9
// if(score >=8.0){
//     console.log('Hoc sinh gioi');
// } else if (score 8.0 && score >= 7.9){
//     console.log('Hoc sinh kha');
// } else {
//     console.log('Hoc sinh trung binh');
// }

// In ra man hinh hom nay la thu may
// switch(6);

// case 2:
//     console.log('Monday');
// case 3:
//     console.log('Tueday');
// case 4:
//     console.log('Wenesday');
// case 5:
//     console.log('Thursday');
// case 6:
//     console.log('Friday');
// case 7:
//     console.log('Satuday');
// case 8:
//     console.log('sunday');

// Nhap 2 so tu ban phim, va khoi tao 1 bien sum
// => neu cong 2 so nhap > 10 thi gan cho bien sum gia tri = 10
// =>  neu tong 2 so vua nhap <=10 thi gan cho bien sum gia tri tong la 2 so do

//prompt(message, initValu);
// let a = prompt('Moi ban nhao gia tri a:');
// a = Number(a);
// let b = prompt('Moi ban nhap b ');
// b = Number(b);
// // let sum;
// console.log('a + b:', a + b);
// if(a + b > 10) {
//     sum = 10;
// } else {
//     sum = a + b;
// }

// Day la phan rur gon:
// condition ? code true : code else
// let sum = a + b > 10 ? 10 : a + b;

// console.log(sum);

// In ra màn hình các số 1-5
// for (let i = 1; i <= 5; i++);
// console.log(i);
// }
// câu lệnh while
// let i = 1
// while (i <= 5){
//     console.log(i);
//     i++;
// }
// Câu lệnh break:(dừng chạy chuong trình ngay lập tức)
// for (let i = 1; i <= 5; i++){
//     if (i === 3) {
//         break;
//     }
// }
// Câu lệnh contiune:(dừng câu lệnh ở đó và chạy phần tiếp theo)
// for (let i = 1; i <= 5; i++){
//     if (i === 3) {
//         contiune;
//     }
// }
  


// In ra man hình các số từ -10 đến 20
// for (let i = -10; i <= 20; i++);
// console.log(i);
// }

// In ra man hinh cac số chẵn từ -31 đến 53
// for (let i = -31; i <= 53; i++){
//     if (i % 2 === 0){
//     console.log(i);
//     }
// }

// In ra màn hình chua hết cho 3 trong đoạn từ 100 về 0
// for (let i=100; i => 0; i--){
//      if (i % 3 === 0){
//         console.log(i);
//      }
// }

// for (;;;){ (vong lap vo han)
//     console.log('infinite loog')
// }

// Quizzes
// 0. Hãy viết chương trình nhập vào một chuỗi s. Nếu chuỗi s có độ dài >= 8, in ra màn hình console “Chuỗi này ok”. 
// Ngược lại, in ra “Ngắn quá, dài thêm tí nữa”.
// 1. Hãy viết chương trình nhập vào một số a. 
// Nếu a >= 18, in ra màn hình console “Đủ 18 thì quẩy tiếp”. 
// Nếu a >= 16, in ra “Đợi thêm ít năm nữa”. 
// Ngược lại, in ra “Trẻ con không được ăn thịt chó”.

// 0. Hãy viết chương trình nhập vào một chuỗi s. Nếu chuỗi s có độ dài >= 8, in ra màn hình console “Chuỗi này ok”. 
// Ngược lại, in ra “Ngắn quá, dài thêm tí nữa”
// const s = prompt('Mời bạn nhập vào chuỗi s');
// if(s.length >=8){
//     console.log('chuỗi này ok');
// }else{
//     console.log('ngắn quá dài thêm tí nữa ');
// }

// 1. Hãy viết chương trình nhập vào một số a.
// Nếu a >= 18, in ra màn hình console “Đủ 18 thì quẩy tiếp”. 
// Nếu a >= 16, in ra “Đợi thêm ít năm nữa”. 
// Ngược lại, in ra “Trẻ con không được ăn thịt chó”.

// Quizzes
// 0. Hãy tính tổng các số từ 1 đến 50.
// 1. Hãy tính tổng các số chẵn từ -10 đến 50.
// 2. Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
// 3. Hãy dùng while để in ra dãy số từ 1 đến 200.
// 4. Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.
// 5. Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x, giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.

// 0. Hãy tính tổng các số từ 1 đến 50.
// let sum = 0;
// for (let i = 1; i <=50; i++) {
//     sum = sum + 1;
// }
// console.log(sum);

// 1. Hãy tính tổng các số chẵn từ -10 đến 50.
// let sum = 0;
// for (let i = -10; i <=50; i++) {
//     if (i % 2 === 0) {
//         sum = sum + 1;
//     }
// }
// console.log(sum);

// 2. Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]

// 3. Hãy dùng while để in ra dãy số từ 1 đến 200.

// 4. Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.
// let s  = prompt('Nhập chuỗi s');
// let l = Number(prompt('nhập l'));
// while(true) {
//     if (s.length >= l) {
//         break;
//     }
//     s = s + 'a';
// }

// console.log(s);
// console.log(s.length);
// console.log(l);

// 5. Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x, giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.
// let x;
// let y;

// do{ cach 1
//     x = Number(prompt('Nhập x'));
//     y = Number(prompt('Nhập y'));
// } while (x < 0 || y > 100 || y < x );

// for (; true; ) { cach 2
// 	x = Number(prompt('Nhập x'));
// 	y = Number(prompt('Nhập y'));
// 	if (x >= 0 && x < y && y <= 100) {
// 		break;
// 	}

// cach 3
for (; true;) {  
    x = Number(prompt('Nhập x'));
    y = Number(prompt('Nhập y'));
    if (x >= 0 && x < y && y <= 100) {
		break;
	}
}


while (x < y) {
	x = x + 1;
	y = y - 1;
	console.log('x: ', x);
	console.log('y: ', y);
}
