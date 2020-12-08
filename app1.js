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
var outputDiv =document.querySelector("#output");
// console.log(outputDiv);
// outputDiv.innerText="Aneena is a legend"
// --> .innerText writes the value to the output box.
// console.log(txtInput);
// console.log(txtInput.value);
// returns empty coz it returns a value only after you click.
btnTranslate.addEventListener("click", clickHandler)
// btnTranslate.addEventListener("click", clickHandler() )---> dnt use clickHandler()
// cos clickHandler() will immediately evoke the fnc
// while clickHandler would only evoke if you actually click

// 5) patr5 
function clickHandler(){
    var content = "translated text for ";
    outputDiv.innerText= content +txtInput.value +" : "+" bhgt ftctfe rx<>nug 6guy&"  
    console.log(outputDiv); 
}

// 4)part4
// function clickHandler() {
//     console.log("you clicked");
//     console.log("input1",txtInput.value);
// }; 
 

// 4)part4
// // Live exercise
// 1.document.querySelector("textarea")-->Select the first textarea tag.
// document.querySelectorAll("textarea")---> all textarea wud be selected..in the previous one only the 1st textarea
// 2.document.querySelector(.btn-primary)-->Select the first element with a class btn-primary
// 3.document.querySelector(#input-btn)-->Select the first element with an id input-btn.
// 4.document.querySelector("input[name='translator']")-->Select the first input element with an attribute name='translator'.



// part6

// everything below this is done in browser console
// for going to next line in console give shift enter
// var url1=" https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am aneena"
// // this is the url for backend
// undefined
// console.log(url1)
// VM246:1  https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am aneena
// undefined
// function constructURL(text){
//     return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="+text }
// undefined
// var text1="I am batman"
// undefined
// var text2="I am ironman"
// undefined
// var text3="I am shakthiman"
// undefined
// function doFetch(text){
//     fetch(constructURL(text)).
//           then(response=>response.json()).
//           then(json=>console.log(json))
// VM850:4 Uncaught SyntaxError: Unexpected end of input
// function doFetch(text){
//     fetch(constructURL(text)).
//           then(response=>response.json()).
//           then(json=>console.log(json)) }
// undefined
// doFetch(text1)
// undefined
// VM862:4 {success: {…}, contents: {…}}contents: {translated: "Testing,  you are", text: "I am batman", translation: "yoda"}success: {total: 1}__proto__: Object
// doFetch(text2)
// undefined
// VM862:4 {success: {…}, contents: {…}}contents: {translated: "Testing,  you are", text: "I am ironman", translation: "yoda"}success: {total: 1}__proto__: Object
// doFetch(text3)
// undefined
// VM862:4 {success: {…}, contents: {…}}contents: {translated: "Testing,  you are", text: "I am shakthiman", translation: "yoda"}success: {total: 1}__proto__: Object




