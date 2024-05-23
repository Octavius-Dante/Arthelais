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

**Reading value from input field**

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


**Validation of values in input fields**

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

  </body>

```
</br></br>









































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