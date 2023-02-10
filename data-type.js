// 資料型別
// String: 儲存字串。
// Number: 儲存數字包含整數與符點數。
// Boolean: 儲存布林值，只有 true 和 false 兩種值。
// Null: 表示一個值為空的特殊值。
// Undefined: 表示一個未定義的特殊值。
// Object: 儲存一個多組鍵/值配對資料，可用於表達各種複雜資料。
// Symbol: ES6版本新推出的資料型別，儲存唯一且不可被改變的值，不可使用迴圈遍歷，用於辨別資料的特殊目的[例如處理以名字作為key遇上同名問題被覆蓋時的情境]。
// Function: 儲存函數

const stars = "*".repeat(10);
// Data types
console.log(stars, "DataTypes", stars);
console.log(typeof "Hello World"); // string
console.log(typeof 12000); // number
console.log(typeof true, typeof false); // boolean boolean
console.log(typeof { name: "Benson", age: 32, city: "台北市" }); // object

// String
console.log(stars, "String", stars);
const userName = "Benson";
const userCity = "台北市";
const userOccupation = "律師";
const userIntro = `Hi，我的名字是${userName}是一個住在${userCity}的${userOccupation}。`
console.log(userIntro);
console.log(typeof userIntro);
console.log(userIntro.length);

// Number
console.log(stars, "Number", stars);
const a = 10
const b = 3
const c = "10"

// Boolean
console.log(stars, "Boolean", stars);



