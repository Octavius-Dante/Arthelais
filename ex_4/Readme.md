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

**Type Script**

- It is an advanced version of Java Script
- It does syntax check at design time
- It's pure oops
- The Compilation of TS takes more time compared to java script
- Browser directly don't support TS, but Java script supports TS so TS file can be accessed and used in JS.


</br></br>
</br></br>
</br></br>

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