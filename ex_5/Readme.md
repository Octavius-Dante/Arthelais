## Exercise 5 - Java Script deep dive

</br></br>


<details>
<summary> JSON file sample multiple values like internal table </summary>
</br>
</br>

```json

{
    "empTab": [
        {
            "empId": 101,
            "empName": "jane",
            "salary": 250000,
            "currency": "USD"
        },
        {
            "empId": 102,
            "empName": "jack",
            "salary": 125000,
            "currency": "USD"
        },
        {
            "empId": 101,
            "empName": "jerry",
            "salary": 300000,
            "currency": "DIN"
        },
        {
            "empId": 101,
            "empName": "jill",
            "salary": 250000,
            "currency": "REN"
        },
        {
            "empId": 101,
            "empName": "julius",
            "salary": 145000,
            "currency": "POL"
        },
        {
            "empId": 101,
            "empName": "jasmin",
            "salary": 175000,
            "currency": "EUR"
        },
        {
            "empId": 101,
            "empName": "jessy",
            "salary": 150000,
            "currency": "YEN"
        },
        {
            "empId": 101,
            "empName": "jake",
            "salary": 450000,
            "currency": "USD"
        }
    ]
}

```

</br>
</details>

</br></br>

**Functions**
</br></br>

1. Named Function (function with a name)

```js

function functionName(param_1, param_2, . . . ){
     ~~code~~
}

```

</br>

2. Anonymous Function (function with no name which are built in just have to use it)

```js

function (){
     ~~code~~
}
```

</br></br>

**Output Functions in JS**

1. Alert
2. console.log (mainly for developers)
3. Document.write (this is gonna change the DOM)
4. HTML.Element.innerText

</br></br>


**1.(a) OnClick event -- Example -- Button click alert message**
</br>

```html

<body>
    <!-- onclick event-->
    <button onclick="alert('Welcome to JS')">Click Me</button>
</body>

```

</br></br>


**1.(b) Defined the same button with script functions**

```html

// write this code inside the script tag
<script> 

    function demoFunction()
    {
      alert('Welcome to SAP Ui5');
    }

</script> 

// use this button inside the body tag 
<body>

    <button onclick="demoFunction()">Click Me 2</button>

</body>

```
</br></br>


**2. Console log message** check this message in chrome browser F12 key (developer tools) console section

```html

<script>
    
    function consoleFunction()
    {
    // Print in console for developers
    var x = 'Text for displaying console log message'
    console.log("This is a demo" + x);
    // console.log('test value');
    }

</script>

  <body>

    <button onclick="consoleFunction()">Click Me console message</button>

  </body>


```

</br></br>

**3. Document.Write message** whole page changes and message is displayed (ABAP write statement)

```html

<script>
    
    function document_writeFunction()
    {
      document.write("Demo text message for document.write");
    }

</script>

  <body>

    <button onclick="document_writeFunction()">Document Write message</button>

  </body>


```

</br></br>

**4. Access element and display the message** 

```html

<script>
    
    function access_elementFunction()
    {
      var oMsg = document.getElementById('msg');
      oMsg.innerText = "Hey what's up!";
    }

</script>

  <body>

    <!-- Access element message-->
    <label id="msg"></label>    
    <button onclick="access_elementFunction()">Access element display message</button> 

  </body>


```

</br></br>

**Reading value from input field - getElementById Function**

```html

<script>

    function input_textFunction()
    {
      var oMsg = document.getElementById("label_text");
      var oInp = document.getElementById("max");
      oMsg.innerText = "Input field text is : " + oInp.value + " message showed";
    }

</script>

  <body>

    <label id="label_text"></label>    
    <input id="max">
    <button onclick="input_textFunction()">Get text Input</button>  

  </body>

// In developer tools - Inspect the element and Get the element ID 
// get the stored password in Console section type the following code example id="login-passwd"

// document.getElementById("login-passwd").value 

```
</br></br>


**Validation of values in input fields - getElementById Function**

```html

<script>

    // Validaiton of input fields
    function onLogin(){

      var oUser = document.getElementById("idUser");
      var sUser = oUser.value;

      // Chaining in JS - because getElementById returns an object 
      var sPass = document.getElementById("idPass").value;

      // var oPass = document.getElementById("idPass");
      // var sPass = oPass.value;

      // Single = equalto is for value assignment 
      // Double == equalto is for Compare value 
      // Triple === equalto is for Compare value and Data type

      if (sUser === "dante" && sPass === "dante"){
        document.write('Login success');
      }
      else {
        alert('Login failed try again!');
      }
    }

</script>

  <body>

<!-- Validation for input fields-->

  <h3>Personal details</h3>
  <!-- alignment of login details -->
  <table id="login">
    <tbod>
      <tr>
        <td><label>Username</label></td>
        <td><input id="idUser" name="usr"></td>
      </tr>
      <tr>
        <td><label>Password</label></td>
        <td><input id="idPass" name="pass" type="password"></td>
      </tr>
      <tr>
        <td><button onClick="onLogin()">Login</button></td>
      </tr>
    </tbod>
  </table>

  </body>

```
</br></br>


**Changing the color of screen element - getElementByClassName Function**

</br> sample snippet for complete code look below 

```html

<script>

// change the color of titles
    function getClass(){
// Get all aelements in an array which has same class name
      var arrElements = document.getElementsByClassName("box-title");
// loop over an array and process one by one       
      for(var i=0;i<arrElements.length;i++){
          var item = arrElements[i];
// cahnging CSS at runtime           
        item.style.backgroundColor = "black";
      }
    }


</script>

  <body>

    </br> </br>
    <div style="clear: left;"></div>
    <button onclick="getClass()">Screen element change</button>

  </body>

```

</br> </br>


**Creating new element on the screen -**


```html

<script>

    function addNewElement(){
      // 1. Creare a brand new element
      var oElement = document.createElement("h4");      
      // 2. creaet a text node  // 3. add the text to the text node
      var oTextNode = document.createTextNode("Aristotle");   
      
      // Value is taken from input field
      // var oTextNode = document.createTextNode(document.getElementById("max").value);   

      // 4. append the text node to the newly creraetd element
      oElement.appendChild(oTextNode);
      // 5. get the canvas element object
      var oCanvas = document.getElementById("canvas");
      // 6. add our newly created element inside the canvas
      oCanvas.appendChild(oElement);

    }

</script>

  <body>

    <button onclick="addNewElement()">Add New Element</button>    
    <div id="canvas"></div>

  </body>

```

</br></br>

<details>
<summary> <b> complete code is here </b> </summary>
</br>
</br>

```html

<html>

<head>

<style>

td ,th{
  color: white;  
}

h3{
  color: white;  
}

</style>

  <!-- MetaData info for webpage -->
  <meta name="encoding" content="utf-8" />
  <meta name="description" content="Basic HTML5 learning web page" />
  <meta name="Author" content="Dante" />
  <meta name="keywords" content="HTML5 learn html tutorials" />

  <script>

    // ALert message based on script by events
    function demoFunction() {
      alert('Welcome to SAP Ui5');
    }

    function consoleFunction() {

      // to trigger a debugger based on If condiiton 
      var alpha = 20, beta = 30, gamma = alpha + beta;
      if (gamma > 40) {
        // debugger;
      }

      // Print in console for developers
      var x = 'Text for displaying console log message'
      console.log("This is a demo" + x);
      // console.log('test value');
    }

    // change the whole DOM and displaying the message
    function document_writeFunction(){
      document.write("Demo text message for document.write");
    }


    function access_elementFunction(){
      var oMsg = document.getElementById('msg');
      oMsg.innerText = "Hey what's up!";
    }

    function input_textFunction(){
      var oMsg = document.getElementById("label_text");
      var oInp = document.getElementById("max");
      oMsg.innerText = "Input field text is : " + oInp.value + " message showed";
    }

    // Validaiton of input fields
    function onLogin(){

      var oUser = document.getElementById("idUser");
      var sUser = oUser.value;

      // Chaining in JS - because getElementById returns an object 
      var sPass = document.getElementById("idPass").value;

      // var oPass = document.getElementById("idPass");
      // var sPass = oPass.value;

      // Single = equalto is for value assignment 
      // Double == equalto is for Compare value 
      // Triple === equalto is for Compare value and Data type

      if (sUser === "dante" && sPass === "dante"){
        document.write('Login success');
      }
      else {
        alert('Login failed try again!');
      }
    }

// change the color of titles
    function getClass(){
// Get all aelements in an array which has same class name
      var arrElements = document.getElementsByClassName("box-title");
// loop over an array and process one by one       
      for(var i=0;i<arrElements.length;i++){
          var item = arrElements[i];
// cahnging CSS at runtime           
        item.style.backgroundColor = "black";
      }
    }

    function addNewElement(){
      // 1. Creare a brand new element
      var oElement = document.createElement("h4");      
      // 2. creaet a text node  // 3. add the text to the text node
      var oTextNode = document.createTextNode("Aristotle");   
      
      // Value is taken from input field
      // var oTextNode = document.createTextNode(document.getElementById("max").value);   
      
      // 4. append the text node to the newly creraetd element
      oElement.appendChild(oTextNode);
      // 5. get the canvas element object
      var oCanvas = document.getElementById("canvas");
      // 6. add our newly created element inside the canvas
      oCanvas.appendChild(oElement);

    }


  </script>

  <style>

h2 {
      color: white;
      /*
      border: 4px dotted;
      */
    }

    h3 {
      color: white;
      /*
      border: 4px dotted;
      */
    }

    /* Class */
    .box {
      width: 250px;
      float: left;
      /* border: 1px solid black; */
      margin: 20px;

    }

    /* Class */
    .box-title {
      color: white;
      background-color: rgb(23, 80, 86);
      width: 250px;
      border: 1px solid black;
      padding: 10px;
      /* padding:10px; */
      text-align: center;
    }

    /* Class */
    .box-content {
      color: white;
      background-color: teal;
      width: 250px;
      height: 200px;
      border: 1px solid black;
      padding: 10px;
    }

    /* Class */
    .abbr {
      font-family: cursive;
      color: yellow;
      font: bolder;
    }

  </style>

</head>

<body>

  <body style="background-color: rgb(12, 112, 212);">


    <div class="box">
      <div class="box-title">
        <h2>What is <Span class="abbr">HTML</span></h2>
      </div>

      <div class="box-content">
        <p> HTML stands for
          <b><em>
              Hyper Text Markup Language
            </em>
          </b>, it is used for designign static web content
        </p>
      </div>
    </div>

    <div class="box">
      <div class="box-title">
        <h2>What is <Span class="abbr">CSS</Span></h2>
      </div>

      <div class="box-content">
        <p>
          CSS stands for <em><b>Cascading Style Sheets</b></em>, It is used to style / beautify our content
        </p>
      </div>
    </div>

    <div class="box">
      <div class="box-title">
        <h2>What is <Span class="abbr">JS</Span></h2>
      </div>

      <div class="box-content">
        <p>
          JS stands for <em><b>Java Script</b></em>, it is teh browser's programming lanaguage
        </p>
      </div>
    
    
    </br> </br>
    <div style="clear: left;"></div>
    <button onclick="getClass()">Screen element change</button>

    </div>

<!-- Validation for input fields-->
<form>
  <div style="clear: left;"></div>
  <div style="padding-top: 35px;"></div>
  <h3>Personal details</h3>

  <!-- alignment of login details -->
  <table id="login">
    <tbod>
      <tr>
        <td><label>Username</label></td>
        <td><input id="idUser" name="usr"></td>
      </tr>
      <tr>
        <td><label>Password</label></td>
        <td><input id="idPass" name="pass" type="password"></td>
      </tr>
      <tr>
        <td><button onClick="onLogin()">Login</button></td>
      </tr>
    </tbod>
  </table>

  </div>
</form>


    <!-- onclick event-->
    <button onclick="alert('Welcome to JS')">Click alert</button>
    
    <!-- alert by script functions-->
    <button onclick="demoFunction()">Script function alert</button>

    <!-- Console log message button-->
    <button onclick="consoleFunction()">Console message</button>

    <!-- Document write message-->
    <button onclick="document_writeFunction()">Document Write message</button>
   
    <!-- Access element message-->
    <label id="msg"></label>    
    <button onclick="access_elementFunction()">Access element display message</button>    

    <label id="label_text"></label>    
    <input id="max">
    <button onclick="input_textFunction()">Get text Input</button>    

    <button onclick="addNewElement()">Add New Element</button>    
    <div id="canvas"></div>


  </body>

</html>

```

</br>
</br>
</details>

</br></br>

**Developer tools in browser debugging keys**

- F10 - Line by line execution **(ABAP - F6)**
- F11 - Go inside the function **(ABAP - F5)**
- Shift + F10 - Go out of current function or current module **(ABAP - F7)**
- F8 - Continue execution - / stop to next BP **(ABAP - F8)**

</br></br>

**Hardcoded Breakpoint in JS**

```js

// hardcoded Break-point
// keyword debugger

var alpha = 20, beta = 30, gamma = alpha + beta;
if ( gamma > 40){
    debugger;
}

```

</br></br>

**External CSS Linking - to the *.html page**

```html

<script src="js/myjs_lib.js"> 
</script>


```

</br></br>
</br></br>
</br></br>

## End of Exercise 5 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_6"> Exercise 6-JQuery </a>
</br>
<p align="center"> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main"> Main page </a> </p>


<!--

<details>
<summary> <b> ALL CODE CHANGES - TODAY SESSION </b> </summary>
</br>
</br>

</br>
</br>
<img src="./files/capmd12-96a.png" >
</br>
</br>
</details>

-->