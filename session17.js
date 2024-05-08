debugger;
const todoList = ["a", "b", "c"];
let userInput = prompt("Press C/R/U/D?");
do {
  
  switch (userInput) {
    case "C":
      let todo = prompt("Input new todo job");
      todoList.push(todo);
      for (let key in todoList) {
        console.log(`${+key + 1}.${todoList[key]}`);
      }
      break;
    case "R":
      for (let key in todoList) {
        console.log(`${+key + 1}.${todoList[key]}`);
      }

      break;
    case "U":
      let index = +prompt("Nhập số thứ tự todolist cần update?");
      let update = prompt("Nhập nội dung mới?");
      todoList[index - 1] = update;
      for (let key in todoList) {
        console.log(`${+key + 1}.${todoList[key]}`);
      }
      break;
    case "D":
      break;
    case "E":
      alert("Thanks for using the app!");
      break;
    default:
      alert("Invalid command");
      break;
  }
} while (userInput != "E");

function freq(array) {
    let arr = array.split("");
    let checkedChars = []; // Mảng lưu trữ các ký tự đã kiểm tra
    for (let i = 0; i < arr.length; i++) {
      if (!checkedChars.includes(arr[i])) { // Kiểm tra xem ký tự đã được kiểm tra trước đó hay chưa
        let count = 0; // Đặt biến đếm về 0 cho mỗi ký tự mới
        for (let j = 0; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            count++;
          }
        }
        console.log(`Chữ ${arr[i]} xuất hiện ${count} lần`);
        checkedChars.push(arr[i]); // Thêm ký tự đã kiểm tra vào mảng
      }
    }
  }
  freq("Hello World!");
  let colors = ['red', 'green', 'blue'];
colors.blog = 'homiedev.com';

for (let i in colors) {
   console.log(i); // "0", "1", "2", "blog"
}

for (let i of colors) {
   console.log(i); // "red", "green", "blue"
}