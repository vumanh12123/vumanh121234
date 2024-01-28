// Bài 8: Cho array 1 như sau: 
// players = [
// 	{ id: 11, name: 'Messi', age: 33 },
// 	{ id: 12, name: 'Ronaldo', age: 34 },      
// 	{ id: 13, name: 'Young', age: 35 },        
// 	{ id: 14, name: 'Mane', age: 21 },          
// 	{ id: 15, name: 'Salah', age: 24 },
// ]
// Hãy chuyển đổi nó về array có dạng sau: 
// playersModified = { 
// 	11: {id: 11, name: "Messi", age: 33},
// 	12: {id: 12, name: "Ronaldo", age: 34},
// 	13: {id: 13, name: "Young", age: 35},
// 	14: {id: 14, name: "Mane", age: 21},
// 	15: {id: 15, name: "Salah", age: 24}
// }.
		
// *Các bài sau sẽ viết trong filee helpers.js dưới dạng module và import trong file main.js để sử dụng

players = {
	{ id: 11, name: 'Messi', age: 33 },
	{ id: 12, name: 'Ronaldo', age: 34 },      
	{ id: 13, name: 'Young', age: 35 },        
	{ id: 14, name: 'Mane', age: 21 },          
	{ id: 15, name: 'Salah', age: 24 },
};

let playersModified = {};

players.forEach(player => {
	playersModified[player.id] = player;
});

console.log(playersModified);