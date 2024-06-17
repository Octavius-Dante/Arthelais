## Exercise 2 - HTML5 basic 2

In this session we discuss about request and responses from web pages to server and server to webpages

</br></br>

Requests which can be sent to server to perform an action or retrieve data **Request has header and body**
</br></br>

Response is a reply from server for a request from client it has header and body and it could be of any data type 
</br> **(html, xml, json, excel, pdf, word..etc)**

</br>

**Request types :**

1. GET - read data
2. POST - Create new data
3. PUT - Update
4. DELETE - Remove data

</br>

**What are the Ways to talk to server from client ?**

1. Form Submit **(simplest and easiest one)**
2. Using HTTPRequest object
3. Using AJAX Call
4. Some framework

</br>

<details>
<summary> Defining form with Submit action login </summary>
</br>
</br>

```html

<html>
<head>
    <script>
    </script>
</head>
<body>
    <!-- Form with action definition-->
    <form method="get" action="https://www.gmail.com">

        <label>User Name</label>
        <input id="idUser" name="usr">

        <br><br>

        <label>Password</label>
        <input id="idPass" name="pass" type="password">

        <br><br>
        <!-- this SUBMIT button will take the values mentioned with type name for input fields-->
        <input type="submit"><br>
    </form>
</body>
</html>

```

</br></br>

testing it 

<img src="./files/ui5e_2-1.png" >
<img src="./files/ui5e_2-2.png" >
</br>
</br>
</details>

<details>
<summary> Submit button auto validation for a field type </summary>
</br>
</br>

```html

<html>
<head>
    <script>
    </script>
</head>
<body>

    <!-- Form with action definition-->
    <form method="get" action="https://www.gmail.com">
      <div class="login">

        <label>Number with limit min 10 and max 100</label>
        <input type="number" min="10" max="15"><br><br>

        <label>Email</label>
        <input type="email"><br><br>

        <!-- auto validation for number field type demo-->
        <input type="submit"><br>
      </div>    
    </form>

</body>
</html>

```

<img src="./files/ui5e_2-3.png" >
<img src="./files/ui5e_2-4.png" >
</br>
</br>
</details>


<details>
<summary> Block level elements Div and Span </summary>
</br>
</br>

**Div** :
</br>
The div is division tag used as a container for HTML elements used for grouping </br>
which is then styled with CSS or manipulated with JavaScript. </br>
it is a good practice to provide **class** (classification) property for every div element for grouping purpose

```html
<div>
```

</br> 

**Span** :
</br>
The span is a inline element tag , it never starts from a new line, always keeps it in same line

```html
<span>
```
</br></br>


```html

<html>
<head>
    <script>
    </script>
</head>
<body>

    <!-- Form with action definition-->
    <form method="get" action="https://www.gmail.com">
      <div class="login">

        <label>User Name</label>
        <input id="idUser" name="usr">

        <br><br>

        <label>Password</label>
        <input id="idPass" name="pass" type="password">

        <!-- auto validation for number field type demo-->
        <input type="submit"><br>
      </div>    
    </form>

</body>
</html>

```

<img src="./files/ui5e_2-5.png" >

</br>
</br>
</details>

<details>
<summary> Table, Rows and columns </summary>
</br>
</br>

```html

<html>

<head>
    <script>
    </script>
</head>

<body>

<table>
    <tr>
      <th>Month</th>
      <th>Savings</th>
      <th>Expenses</th>
      <th>Payments</th>
      <th>Income</th>
    </tr>
    <tr>
      <td>January</td>
      <td>$100</td>
      <td>$400</td>
      <td>$300</td>
      <td>$800</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
      <td>$420</td>
      <td>$400</td>
      <td>$900</td>    
    </tr>
    <tr>
      <td>March</td>
      <td>$800</td>
      <td>$1600</td>
      <td>$2000</td>
      <td>$4400</td>    
    </tr>  
  </table>


</body>

</html>

```

</br>
</br>
<img src="./files/ui5e_2-6.png" >
</br>
</br>
</details>


<details>
<summary> Defining iframe tag with layout parameters</summary>
</br>
</br>

```html

<html>
<head>
    <script>
    </script>
</head>
<body>

<iframe src ="https://www.youtube.com/" width="1350" height="900"></iframe>

<iframe width="1280" height="720" src="https://www.youtube.com/embed/aniRVWQ0WgM" title="Making of - A Plague Tale: Innocence [Behind the Scenes]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


</body>

</html>

```

</br>
</br>
</details>


</br>
</br></br>

## End of Exercise 2 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_3"> Exercise 3-CSS </a>
</br>
<p align="center"> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main"> Main page </a> </p>


</br></br>

**All Previous sessions**
</br></br>

<!-- - [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_37"> Exercise 37-Deploy app to launchpad</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_36"> Exercise 36-WebIde and Git integration</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_35"> Exercise 35-POST, GET and DELETE from Fiori</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_34"> Exercise 34-GET and Connect</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_33"> Exercise 33-Fiori Project Connect Odata</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_32"> Exercise 32-Connectivity</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_31"> Exercise 31-Function Import and Images</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_30"> Exercise 30-implementing CRUD</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_29"> Exercise 29-Implementing GET</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_28"> Exercise 28-Create A Gateway Project</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_27"> Exercise 27-Odata GET</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_26"> Exercise 26-Fiori Deployments</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_25"> Exercise 25-Fragments Deep dive</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_24"> Exercise 24-Fragments</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_23"> Exercise 23-Icon Tab bar</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_22"> Exercise 22-Route matched Handlers</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_21"> Exercise 21-Router Basics</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_20"> Exercise 20-Filters on List mode</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_19"> Exercise 19-Manifest JSON</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_18"> Exercise 18-List Control</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_17"> Exercise 17-Fiori Lite app</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_16"> Exercise 16-Formatters </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_15"> Exercise 15-Element Binding</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_14"> Exercise 14-Table control</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_13"> Exercise 13-Expression Binding XML Model</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_12"> Exercise 12-Json Model Property Binding</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_11"> Exercise 11-Model Basics </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_10"> Exercise 10-XML Views </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_9"> Exercise 9-Internal Silence of Ui5</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_8"> Exercise 8-Ui5 Control Hierarchy </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_7"> Exercise 7-SAP Ui5 Framework </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_6"> Exercise 6-JQuery </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_5"> Exercise 5-JS deep dive </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_4"> Exercise 4-JS basic </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_3"> Exercise 3-CSS </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_2"> Exercise 2-HTML5</a> -->
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_1"> Exercise 1 -Basic </a>


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