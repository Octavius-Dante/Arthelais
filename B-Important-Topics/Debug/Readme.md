**Developer tools in browser debugging keys**

- F10 - Line by line execution skip code block **(ABAP - F6)**
- F11 - Go inside the function call **(Exactly not in ABAP)**
- Shift + F10 - Go out outside the current function call **(ABAP - F7)**
- F8 - Continue execution - / stop to next BP **(ABAP - F8)**
- F9 - this is like (ABAP F5) step by step 

</br></br>

F11 - when you debug you come across a function line 

- (F9) step by step mode will quickly execuet the function and goes to next code block
- In abap this will not happen it executes line by line here in browser JS code block function is also considered like a single line
- In this palce we have to use special key - F11
-
- - in function block F11 acts like F5 to go inside after getting inside we can use regula F9 step by step


 demonstration 
```bat
 line 1 ----- F9
 line 2 ----- F9
 line 3 ----- F9
 line 4 Function() -- here F9 will go to line 9 - F11 will go to line 6 step inside 
 line 5 --------{ 
 line 6 --------
 line 7 --------
 line 8 --------} 
 line 9 --------
 line 10 -------
```
Remember when you come across a function to step in we have F11 -- 


## End of the page
</br>
<p align="center"> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main"> Main page </a> </p>

<!-- - [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_38"> Exercise 38-Fiori Elements Basics</a> -->
</br></br>
