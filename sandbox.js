//dates & times
const now = new Date();


console.log(now);
console.log(typeof now);

//years, months, days,times

console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

//timestamps

console.log('timestamp:', now.getTime());

//date strings

console.log(now.toDateString()); //короткая запись даты
console.log(now.toTimeString()); //короткая запись времени
console.log(now.toLocaleString());