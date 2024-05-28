
var textX = "text variable"; // value argument variable 

// TRANSLATION 1
////////////////////////////////////////////////////////////////////
var myInput1 = document.getElementById('input-field1'); // input field 1
var outText1 = "text variable";  // output for field on click outside 

// input field 1 - on blur-event function 
function callTrans(){
    translate_1(myInput1.value);
}

function translate_1(textX) {
    const inputText = textX;
    const inputLanguage = "en";
    const outputLanguage = "ta"
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(inputText,)}`;

    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      outText1 = json[0].map((item) => item[0]).join("");
      console.log(outText1);
      myInput1.value = outText1;
    })
    .catch((error) => {
      console.log(error);
    });
}
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


// TRANSLATION 2 
////////////////////////////////////////////////////////////////////
var inputTextArea1 = document.querySelector("#input-text1"); // Text area 1
var outText2 = "text variable";  // output for text area - console

// Text area 1 - event listener - INPUT
inputTextArea1.addEventListener("input", (e) => {
    translate_2(inputTextArea1);
  });

function translate_2(textX){
    const inputText = textX.value;
    const inputLanguage = "en";
    const outputLanguage = "ta"
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(inputText,)}`;

    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      outText2 = json[0].map((item) => item[0]).join("");
      console.log(outText2);
    })
    .catch((error) => {
      console.log(error);
    });
}
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


// TRANSLATION 3
////////////////////////////////////////////////////////////////////
var myInput2 = document.getElementById('input-field2'); // input field 2
var outText3 = "text variable";  // output for field key press enter 

// input field 2- event listener key press - capturing enter key
myInput2.addEventListener('keypress', (e) => {
   if (e.key == "enter" || e.code == "Enter") {        
        if (myInput2.value) {
            translate_3(myInput2.value);        
        };
     }
});

function translate_3 (textX) {
    const inputText = textX;
    const inputLanguage = "en";
    const outputLanguage = "ta"
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(inputText,)}`;

    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      outText3 = json[0].map((item) => item[0]).join("");
      console.log(outText3);
      myInput2.value = outText3;
    })
    .catch((error) => {
      console.log(error);
    });
}
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


// TRANSLATION 4
////////////////////////////////////////////////////////////////////
var inputTextArea2 = document.querySelector("#input-text2"); // Text area 2 input
var outText4 = "text variable";  // output for text area key press enter 

// Text area 2 - event listener capturing key press enter key 
inputTextArea2.addEventListener("keypress", (e) => {    
    if (e.key == "enter" || e.code == "Enter") {        
        if (inputTextArea2) {
            translate_4(inputTextArea2);
        };
     }

  });

//user is "finished typing," do something
function translate_4(textX){
    const inputText = textX.value;
    const inputLanguage = "en";
    const outputLanguage = "ta"
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(inputText,)}`;

    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      outText4 = json[0].map((item) => item[0]).join("");
      console.log(outText4);
      inputTextArea2.value = outText4;
    })
    .catch((error) => {
      console.log(error);
    });
}
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


// TRANSLATION 5
////////////////////////////////////////////////////////////////////
const inputVal = document.getElementById('input-field3');  // input field 3
var outText5 = "text variable";  // output for field on waiting  

// Input field 3 - event listener capturing key up and wait 
let timeout; inputVal.addEventListener('keyup', function() {
// Clear the timeout if it has already been set- 
// This will prevent the previous task from executing 
// if it has not been completed yet. 
clearTimeout(timeout);

// Make a new timeout set to go off in 1000ms 
timeout = setTimeout(function() { 
     // Put your code here that you want to run
     // after the user has stopped typing for a little bit 
     translate_5(inputVal.value);
    }, 1000); });

function translate_5(textX){
    const inputText = textX;
    const inputLanguage = "en";
    const outputLanguage = "ta"
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(inputText,)}`;

    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      outText5 = json[0].map((item) => item[0]).join("");
      console.log(outText5);
      inputVal.value = outText5;
    })
    .catch((error) => {
      console.log(error);
    });
}
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


// TRANSLATION 6
////////////////////////////////////////////////////////////////////
const inputTextArea3 = document.getElementById('input-text3');  // text area 3
var outText6 = "text variable";  // output for field on waiting  

// Input field 3 - event listener capturing key up and wait 
let timeout2; inputTextArea3.addEventListener('keyup', function() {
// Clear the timeout if it has already been set- 
// This will prevent the previous task from executing 
// if it has not been completed yet. 
clearTimeout(timeout2);

// Make a new timeout set to go off in 1000ms 
timeout2 = setTimeout(function() { 
     // Put your code here that you want to run
     // after the user has stopped typing for a little bit 
     translate_6(inputTextArea3);
    }, 1000); });

function translate_6(textX){
    const inputText = textX.value;
    const inputLanguage = "en";
    const outputLanguage = "ta"
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(inputText,)}`;

    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      outText6 = json[0].map((item) => item[0]).join("");
      console.log(outText6);
      inputTextArea3.value = outText6;
    })
    .catch((error) => {
      console.log(error);
    });
}
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////