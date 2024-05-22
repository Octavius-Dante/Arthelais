## Exercise 4 - Java Script Basics

</br></br>

You don't need to learn Java. The java and Java script has nothing in common except the word "Java"
</br> Both are different programming languages in their design, purpose and usage.

</br> JavaScript is a browser's programming language. It is the most used programming language on our planet.
</br> </br> 

- All the browsers directly understand JS.
- There is no need to compile the code it is automatically done at runtime
- In JS, we don't need to specify the data type of variables
- JS is case-sensitive
- JS follows Camel case naming conventions, First letter is small and and every consecutive words first letter will be in capital 
</br> **Eg. (onClick, onPress, onSwitch, onAction, toggleAction)**

- Every statement in JS ends with semicolon ;
- JS has 2 powerful system variables called document and window
- **Document** : is the object of **DOM**, using this we can access the HTML Elements directly
            
    - getElementsById
    - getElementsByClassName
    - getElementsByTagName

- **Window** : is the object of browser window (using this can open browser, open tab, close tab, alert pop up)

</br></br>

**Types of Java Script**

</br>

1. **Client-Side JS** - All the code will be executed on the client side (browser). 
</br>This gives speed to the application. 
</br>This UI5/Fiori focus on only client side JS

</br>

2. **Server-Side JS** - All the JS code executes on server side. 
</br>Since we cannot have a browser running to execute JS code, we need framework to run it. Eg NodeJS, XSJS

</br></br>

**What JS can do**
</br></br>

- Used to show output to the user
- Can be used to change the CSS at runtime
- Validate the user input
- Build application logic which runs on client side
- Imperative logic - If, looping, expressions etc...
- We can manipulate the DOM

</br></br>

**How to apply Java Script ?**
</br>

- Inline JS
- Internal JS
- External JS

</br></br>

**Inline JS**
</br> When JS code is written at the level of element itself, it is called inline JS. We write JS code corresponding to an event, AN event is triggered for an UI element when ever an action is performed by user.

</br>

eg. onClick is an event for a button control when click happens. You can check all [JS events here](https://www.w3schools.com/js/js_events.asp) 
</br> 

[Check all HTML events here](https://www.w3schools.com/jsref/dom_obj_event.asp)
</br>

```html

<element event="code">

```

</br></br>

**Internal JS**
</br> When we want to write reusable code. The code is written in functions at the page level, inside a tag called Script tag

```html

<script> 
    Funtion This_is_My_Function(params_1, params_1, . . . . )
    {
        // code here
    }
</script> 

```

</br></br>


**External JS**
</br> With the help of reusable files. we will create a .js file, and link it with the HTML page using script tag itself.

```html

<script src="path of js file">

```

</br></br>



## Java Script code samples -- Mini Exercises - Chrome (F12) - Console section
</br></br>


Sample # 1 variables and basic functions

```js

// integer
var x = 10;

// string 
var y = "10"

//typeof() function to return the data type

typeof(x); // 'number'

typeof(y); // 'string'

// converting string to number 
var z = parseInt(y);

xa = false;  
typeof(xa); // 'Boolean'

```

</br></br>


Sample # 2 String operations

```js

// defined a name with space in the middle
var name = "dante epicurus";

// usign split function to split the variabl value at defined space
name.split(" ");

// split function values stored into array
var arrName = name.split(" ");

// concatenation
var finalName = arrName[0] + "-" + arrName[1];

// string index starts with zero --  0, 1, 2, 3, 4, 5, 6, 7 . . . . . 

// string search
finalName.indexOf("dan"); // return 0 - success - index position 0 (d)

finalName.indexOf("s");   // return 13 - success - index position 13

finalName.indexOf("ban"); // return -1 - failed no value exist 

```

</br></br>

Sample # 3 Array variable - operations 

```js

// () - Paranthesis
// {} - Braces
// [] = Bracket

// array index stars from zero - 0,1,2,3,4,5,6 . . . . 

var arrFruits = ["apple","banana","cherry"];

// arrFruits;
// (3) ['apple', 'banana', 'cherry']
// 0: "apple"
// 1: "banana"
// 2: "cherry"
// length: 3
// [[Prototype]]: Array(0)

arrFruits.length;
// returns length of the array (items)
// 3

arrFruits[0];
// directly can access the element with index
// "apple"

arrFruits[1];
arrFruits[2];
arrFruits[3];

arrFruits[rrFruits.length; -1];
// returns last element in array


// inserting an item into array with index position 
arrFruits.splice(1,0, "mango");

arrFruits.splice(3,0, "kiwi"); // this inserts an item in 3rd index 

// 0 - represents - zero element
// 1 - remove 1 element 
// 2 - remove 2 elements

// arrFruits.splice(index position, how many elements need to be removed, "value");

// removing an item in array with index position
arrFruits.splice(3,1); // this removes an item in 3rd index 
arrFruits.splice(3,2); // this removes 2 item from 3rd index 
arrFruits.splice(3,3); // this removes 3 item from 3rd index 
arrFruits.splice(3,4); // this removes 4 item from 3rd index 

// insert an item at the end of the array -like ABAP Append
arrFruits.push("Pineapple");

// removing the last element in the array
arrFruits.pop();

// concatenate 2 arrays together

// define another array
arrDryFruits = ["cashew", "Almonds", "Groundnut", "Pistachio", "Hazelnut", "walnut", "chestnut", "kolanut"];

// concatenation 
arrFruits.concat(arrDryFruits);

// FINAL value will be placed in this new array
var arrFinal = arrFruits.concat(arrDryFruits);

// to print every item in the array using for loop 
for (var i = 0; i < arrFinal.length; i++) {
 const element = arrFinal[i];
 console.log(element);
}

// Removing all the data in the array variable 
arrFinal = [];


```

</br></br>

Sample # 4 Objects in JS

```js

// Definign an object variable

var oEmp = { "empID": 501, "empName": "Dan", "salary": 5600, "curr": "USD" }

// adding a property to the variable 
oEmp.gamer = false;

// adding a property to the variable 
oEmp.biker = true;

// adding a propertyto the variable 
oEmp.smoker = false;

// returned values will be 
// {empID: 501, empName: 'Dan', salary: 5600, curr: 'USD', gamer: false, …}
// biker : true
// curr : "USD"
// empID : 501
// empName :  "Dan"
// gamer : false
// salary :  5600
// smoker :  false

// Removing a property in object variable - "delete object.proeprty name" 
delete oEmp.smoker; 

typeof(oEmp);
// "object"

// convert a JSON object to a string 
var x = JSON.stringify(oEmp);

// Convert a String object to a JSON object
var y = JSON.parse(x);

```

</br></br>

## Just for Info

**Type Script**

- It is an advanced version of Java Script
- It does syntax check at design time
- It's pure oops
- The Compilation of TS takes more time compared to java script
- Browser directly don't support TS, but Java script supports TS so TS file can be accessed and used in JS.


</br></br></br>

## End of Exercise 4 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_5"> Exercise 5-JS deep dive </a>
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