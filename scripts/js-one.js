/*
// we can make variables!
let name = "Steven";

console.log("Hi " + name + " this is from the script!");

name = "Leo";
console.log("I reassigned the variable...see?");
console.log(name);

const foo = 17;
console.log("Can't change constants though: " + foo);
//foo = 12;
// the above actually creates an error and breaks the whole script so it is getting commented out!

// we can also do this
//var bar = "xyz";

// we can do numbers too
console.log(5 + (20 - 2) * 1.5);
*/

/*
######################################################
###     Now it is time to get more serious        ###
#####################################################
*/
var name = 'Steven';
var greeting = `My name is ${name}`; // variable embedding requres backticks
console.log(greeting);

// button stuff
const button = document.querySelector("button"); // checks for button class

// oh sweet we can make functions!
function greet() {
  const name = prompt("What is your name?"); // open's the window.prompt() for user input
  const greeting = document.querySelector("#greeting"); //  grabs the button's id
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet); // on-click action that runs function
// end of button

console.log("This is a multi-line\nparagraph in the console.");
console.log('We can also add quotes like how we might in "Python"');

// We need to ensure we typecast!
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

// Conditioning
var booleon = (5 > 2);
console.log(booleon);
// alert(0 == false); // this one is a fun alert window

// classic if-else
if (0)
{
    console.log("false?");
}
else {
    console.log("true?");
}
console.log(0 || 1);

var num = 7;
switch(num){
    case 3: 
      break;
    case 7:
        console.log("winner");
        break;
    case 8:
        break;
    default:
        console.log("switching it up")
        break;
}

// ternary
// condition ? run this code : run this code instead
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);


