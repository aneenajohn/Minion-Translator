var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var text;

btnTranslate.addEventListener("click", clickHandler)

function clickHandler() {
    // getting input
    var inputText = txtInput.value
    // Processing input
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputDiv.innerText = translatedText;
        })
        // .then(json => console.log(json.contents.translated))---> puts the output on console..but we want it on output box.
        // here in the 2nd then json is just a var name you can use anything like abcd in place of json
        .catch(errorHandler)
    // look below for you we didnt pass error arg to errorHandler fnc
}
var serverURL = "https://api.funtranslations.com/translate/minion.json"
// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="  //---->Tanay's mock server
function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log("error ocuured", error);
    alert('Something wrong with server, Please try again after sometime');
}

// part 1)
// You can view this from Network section
// click the server call ..yoda.json..
// https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I%27m%20Aneena

// that's why we are using --> json.contents.translated
// {success: {total: 1},…}
// contents: {translated: "Testing, you are", text: "I'm Aneena", translation: "yoda"}
// text: "I'm Aneena"
// translated: "Testing,  you are"
// translation: "yoda"
// success: {total: 1}
// total: 1

// part 2)
// we didnt pass error arg to errorHandler fnc
// consider u wrote a func catch---> Rem catch is a call back fnc
// function catch(callbackfn){   //--->this callback fn is error handler
//     Do something
//     callbackfnc(error)
// }