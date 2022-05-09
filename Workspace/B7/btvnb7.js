// the start HW1
let firstName = prompt("What is your first name?");
let lastName= prompt("what is your last name?");
let myAge = prompt("How old are you?");
alert("Hello " + firstName+ " " + lastName+ "," + " " + "năm nay mình"+" " + myAge+" tuổi.");
// the end HW1

// the start HW2 the length of string
let myStr= "hello Mindx";
let i = myStr.length;
alert("this is length of my string: " + i);
// the length of string

// backlash we are "mindx member"

let myBackLash = "we are \"mindx member\"";
alert("string with quotate: " + myBackLash);

// backlash we are "mindx member"

// the start connect two strings

let myStr1 = "mình đang học lập trình tại ";
let myStr2 = "mindx";
alert(myStr1 + myStr2);

// the end connect two strings

//the start tring method

let myUppercase="Phạm Bá Tuấn";
myUppercase= myUppercase.toUpperCase() ;
alert(myUppercase)

// the start "slice"
let txt = "I can eat bananas all day";
let x = txt.slice((10),(17));
alert(x);

//the start "replace" bananas  = apple
let y = txt.replace(("bananas"),("apple"));
alert("txt after replace: " + y);

// the start lowercase

let myLowerCase = myUppercase.toLowerCase();
alert("after lower case: " + myLowerCase);

//the start of fix code
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b); // 12
