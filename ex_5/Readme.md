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


**OnClick event -- Example -- Button click alert message**
</br>

```html

<body>
    <!-- onclick event-->
    <button onclick="alert('Welcome to JS')">Click Me</button>
</body>

```

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

**Defined the same button with script functions**

```js

// write this code inside the script tag
<script> 

    function demoFunction(){
      alert('Welcome to SAP Ui5');
    }

</script> 

// use this button inside the body tag 
<body>

    <button onclick="demoFunction()">Click Me 2</button>

</body>

```
</br></br>

**Output Functions in JS**

- Alert
- console.log (mainly for developers)
- Document.write (this is gonna change the DOM)
- HTML.Element.innerText

</br></br>


**Console log message** check this message in chrome browser F12 key (developer tools) console section

```js

<script>
    
    function consoleFunction(){
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

**Developer tools in browser debugging keys**

- F10 - Line by line execution **(ABAP - F6)**
- F11 - Go inside the function **(ABAP - F5)**
- Shift + F10 - Go out of current function or current module **(ABAP - F7)**
- F8 - Continue execution - / stop to next BP **(ABAP - F8)**

</br>

```js

// hardcoded Break-point
// keyword debugger

var alpha = 20, beta = 30, gamma = alpha + beta;
if ( gamma > 40){
    debugger;
}

```


</br></br>

**Document.Write message**

```js

<script>
    
    function consoleFunction(){
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