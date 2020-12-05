// creating a ref for button from html in js
var btnTranslate = document.querySelector("#btn-translate");

// 1) part1
// // console.log(btnTranslate)
// this is to chk in browser console
// 1.right click and save <button>....</button> as global variable.
// 2.temp1---> becoomes a global variable.
// 3.you can use  this to contrl ur html from js , eg: temp1.style.backgroundColor ="red"

// 2)part2
// btnTranslate.addEventListener("click", function clickEventHandler(){
//    console.log("clicked") ;
// }
// )

// 3)part3
// Call back--->call me back -when this event happens call me back;
// when click happens call me--me ref to clickEventHandler()

var txtInput = document.querySelector("#txt-input");
console.log(txtInput);
console.log(txtInput.value);
// returns empty coz it returns a value only after you click.
btnTranslate.addEventListener("click", clickHandler)
// btnTranslate.addEventListener("click", clickHandler() )---> dnt use clickHandler()
// cos clickHandler() will immediately evoke the fnc
// while clickHandler would only evoke if you actually click

function clickHandler() {
    console.log("you clicked");
    console.log("input1",txtInput.value);
};