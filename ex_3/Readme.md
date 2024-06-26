## Exercise 3 - CSS - Cascading Style Sheets

In this session we discuss about CSS Cascading Style Sheets

</br>

Cascading Style Sheets is used to style / beautify / format the HTML content.

</br>

CSS was introduced to reduce the work load of page beautification in html tag by defining classes of css and using those classes in the required div, or specific element section 

</br></br>

**There are 3 ways we can apply CSS.**
</br></br>

1. **Inline CSS** - the style is applied with the HTML control directly using a style property

```html

<tagName style="property:value; property:value...."> Content </tagName>

```

</br></br>

2. **Internal CSS**

```html

<style>

selector {
   property:value;
   property:value;

}
</style>

Selector-targer element(s)
tagName, .Clasname, #id

```

</br></br>

3. **External CSS** : The CSS which is defined as a separate file and linked to the html file using JS 

- It is reusable, can be utillized among many html pages (Level 1 Priority when no other CSS is used)
- When internal CSS is used in the page external CSS is considered secondary, The priority goes to internal CSS and it overrides external CSS
- When inline CSS is used it overrides internal CSS and priority is given for inline CSS

```html

<link rel="stylesheet" type="text/css" href="./css/mystyles.css" />

```

</br></br>

<details>
<summary> External CSS linked to HTML </summary>
</br>
</br>

**CSS file**
</br></br>

```css


    /* Html tag */
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

    /* Html tag */
    /* p {
      color: rgb(0, 0, 0);
      border: 1px;
      border-style: inset;
    } */

    /* ID */
    #idUser {
      background-color: black;
      color: yellowgreen;
    }

    /* ID */
    #idPass {
      background-color: darkblue;
      color: yellow;
    }

    /* Class */
    .abbr {
      font-family: cursive;
      color: yellow;
      font: bolder;
    }

    li {
      float: left;
      /* padding-left: 20px; */
      padding: 20px;
      ;
      list-style: none;
      border: 1px solid white;
      background-color: Orangered;
      text-align: center;
      text-transform: uppercase;
      color: white;
    }

    li :hover {
      background-color: yellow;
      color: black;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-weight: bold;
    }

    a {
      text-decoration: none;
    }

    /* duplication */
    /* td{
      border: 1px solid black;
    }

    th{
      border: 1px solid black;
    } */

    #data-expense td, th {
      border: 1px solid black;
      padding: 5px;
    }

    #data-expense th{
      background: red;
      color: white;
      font-family: cursive;
      font:bold;
    }

/* Zebra coloring */
    #data-expense tr:nth-child(even){
      background-color: white;
      color:black;
    }

    #data-expense tr:nth-child(odd){
      background-color: black;
      color:white;
    }

    /* zebra colouring if row not defined default column will be taken*/
    /*

    #data-expense :nth-child(odd){

    }

    #data-expense :nth-child(even){
      
    }

    */

    #data-expense{
      border-collapse: collapse;
    }

    #login{
      border-collapse: collapse;
      border-style: hidden;     
      
      td {
      border-style: hidden;
      padding: 5px;
    }
      
    }


```
</br></br>

**HTML file**
</br></br>

```html

<html>

<head>
  <script>
  </script>

<meta name="encoding" content="utf-8" />
<meta name="description" content="Basic HTML5 learning web page" />
<meta name="Author" content="Dante" />
<meta name="keywords" content="HTML5 learn html tutorials" />

<title> My first web page </title>

<link rel="stylesheet" type="text/css" href="./css/mystyles.css" />

<style></style>

</head>

<body>

  <!-- inline CSS -->

  <body style="background-color: rgb(12, 112, 212);">

    <!-- <body style="background-color: yellowgreen;"> -->

    <div class="box">
      <div class="box-title">
        <h2>What is <Span class="abbr">HTML</span></h2>
      </div>

      <div class="box-content">
        <p> HTML stands for
          <b><em>
              Hyper Text Markup Language
            </em>
          </b>, it is used for designing static web content
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
    </div>


    <div style="clear: left;">
    </div>
    <ul>

      <li><a href="https://github.com/Octavius-Dante/Nova-Proxima-">ABAP on Hana</a></li>
      <li><a href="https://github.com/Octavius-Dante/Arthelais">Ui5 and Fiori</a></li>
      <li><a href="https://github.com/Octavius-Dante/Nova-Prime">Restful ABAP</a></li>
      <li><a href="https://github.com/Octavius-Dante/Tetra_Proxima">SAP BTP Cloud</a></li>

    </ul>

    <div style="clear: left;"></div>
    <div style="padding-top: 50px;"></div>
    <table id="data-expense">
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
      <tr>
        <td>April</td>
        <td>$1600</td>
        <td>$3200</td>
        <td>$4000</td>
        <td>$8800</td>
      </tr>
      <tr>
        <td>May</td>
        <td>$2400</td>
        <td>$4800</td>
        <td>$6000</td>
        <td>$13200</td>
      </tr>
      <tr>
        <td>June</td>
        <td>$3200</td>
        <td>$6400</td>
        <td>$8000</td>
        <td>$17600</td>
      </tr>
      <tr>
        <td>July</td>
        <td>$4000</td>
        <td>$8000</td>
        <td>$10000</td>
        <td>$22000</td>
      </tr>
      <tr>
        <td>August</td>
        <td>$4800</td>
        <td>$9600</td>
        <td>$12000</td>
        <td>$26400</td>
      </tr>
      <tr>
        <td>September</td>
        <td>$5600</td>
        <td>$11200</td>
        <td>$14000</td>
        <td>$30800</td>
      </tr>
      <tr>
        <td>October</td>
        <td>$6400</td>
        <td>$12800</td>
        <td>$16000</td>
        <td>$35200</td>
      </tr>
      <tr>
        <td>November</td>
        <td>$12800</td>
        <td>$14400</td>
        <td>$18000</td>
        <td>$39600</td>
      </tr>
      <tr>
        <td>December</td>
        <td>$8000</td>
        <td>$16000</td>
        <td>$20000</td>
        <td>$44000</td>
      </tr>
    </table>


    <!-- Form with action definition-->
    <form method="GET" action="https://www.gmail.com">

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
            <td><input type="submit"></td>
          </tr>
        </tbod>
      </table>


      </div>
    </form>

  </body>

</html>

```

</br></br>
</details>


</br></br>


## CSS - sample codes and HTML files
</br></br>

**1. Internal CSS applied HTML page**
</br>

**index.html file sample # 1**
</br>

<details>
<summary> Code sample # 1 </summary>
</br>
</br>

```html

<html>

<head>
    <script>
    </script>

<!-- MetaData info for webpage -->

<meta name="encoding" content="utf-8" />
<meta name="description" content="Basic HTML5 learning web page" />
<meta name="Author" content="Dante" />
<meta name="keywords" content="HTML5 learn html tutorials" />

<!-- internal CSS -->
<style>

/* Html tag */ 
    h2{ color: white;       
    border: 4px dotted ;
    }

/* Html tag */    
    p{ color: rgb(0, 0, 0) ; border: 1px ; border-style : inset ;
    }

/* Class */    
    .box-content{
      color: white;
      background-color: teal;
      width: 300;
      border: 1px solid black;
    }

/* ID */
    #idUser{ background-color: black;
             color: yellowgreen;
    }

/* ID */
    #idPass{ background-color: darkblue;
             color: yellow;
    }

/* Class */
    .abbr{
      font-family: cursive ;
      color: yellow;
      font: bolder;
    }

</style>

</head>

<body>
  
<!-- inline CSS -->  
<body style="background-color: rgb(12, 112, 212);">

<!-- <body style="background-color: yellowgreen;"> -->

<div class="box">
<div class="box-title">
<!-- inline element container tag SPAN-->  
  <h2>What is <Span class="abbr">HTML</span></h2>
</div>

<div class="box-content">
  <p> HTML stands for
      <b><em>
          Hyper Text Markup Language
      </em>
  </b>, it is used for designing static web content
  </p>
</div>  
</div>

<div class="box">
  <div class="box-title">
<!-- inline element container tag SPAN-->  
  <h2>What is <Span class="abbr">CSS</Span></h2>
</div>

<div class="box-content">  
  <p> 
  CSS stands for Cascading Style Sheets, It is used to style / beautify our content
  </p>
</div>  
</div>

<div class="box">
  <div class="box-title">
<!-- inline element container tag SPAN-->    
  <h2>What is <Span class="abbr">JS</Span></h2>
</div>

<div class="box-content">   
  <p> 
  JS stands for Java Script, it is teh browser's programming language
  </p> 
</div>  
</div>


<br><br><br>

    <!-- Form with action definition-->
    <form method="GET" action="https://www.gmail.com">

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
</br>
</details>

</br></br>

**2. Float property**
</br> 
Assigned float property in CSS for a div class section, if float is assigned this can be aligned with left or right direction in style section
</br> </br> 

```html

<style>  
    .box {
      width: 250px;
      float: left;
      border: 1px solid black
    }
</style>

<div style="clear: left;">

```

</br>

**index.html file sample # 2**
</br>

<details>
<summary> Code sample # 2 </summary>
</br>
</br>

```html

<html>

<head>
  <script>
  </script>

  <!-- MetaData info for webpage -->

  <meta name="encoding" content="utf-8" />
  <meta name="description" content="Basic HTML5 learning web page" />
  <meta name="Author" content="Dante" />
  <meta name="keywords" content="HTML5 learn html tutorials" />

  <!-- internal CSS -->
  <style>
    /* Html tag */
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
      border: 1px solid black
    }

    /* Html tag */
    p {
      color: rgb(0, 0, 0);
      border: 1px;
      border-style: inset;
    }

    /* Class */
    .box-content {
      color: white;
      background-color: teal;
      width: 250px;
      height: 200px;
      border: 1px solid black;
    }

    /* ID */
    #idUser {
      background-color: black;
      color: yellowgreen;
    }

    /* ID */
    #idPass {
      background-color: darkblue;
      color: yellow;
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

  <!-- inline CSS -->

  <body style="background-color: rgb(12, 112, 212);">

    <!-- <body style="background-color: yellowgreen;"> -->

    <div class="box">
      <div class="box-title">
        <h2>What is <Span class="abbr">HTML</span></h2>
      </div>

      <div class="box-content">
        <p> HTML stands for
          <b><em>
              Hyper Text Markup Language
            </em>
          </b>, it is used for designing static web content
        </p>
      </div>
    </div>

    <div class="box">
      <div class="box-title">
        <h2>What is <Span class="abbr">CSS</Span></h2>
      </div>

      <div class="box-content">
        <p>
          CSS stands for Cascading Style Sheets, It is used to style / beautify our content
        </p>
      </div>
    </div>

    <div class="box">
      <div class="box-title">
        <h2>What is <Span class="abbr">JS</Span></h2>
      </div>

      <div class="box-content">
        <p>
          JS stands for Java Script, it is teh browser's programming language
        </p>
      </div>
    </div>

 
    <!-- Form with action definition-->
    <form method="GET" action="https://www.gmail.com">

      <div style="clear: left;">
      </div>
      <h3>Personal details</h3>
      <!-- <br><br> -->
      <div>
        <div>
          <label>Username</label>
          <input id="idUser" name="usr">
        </div>
        <!-- <br><br> -->
        <div>
          <label>Password</label>
          <input id="idPass" name="pass" type="password">
        </div>
        <!-- <br><br> -->
        <!-- this SUBMIT button will take the values mentioned with type name for input fields-->
        <div></div>
        <input type="submit"><br>
      </div>
      </div>
    </form>

  </body>

</html>

```

</br></br>
</details>

</br></br>

</br>

**3. Box Model in CSS**
</br> </br> 

It introduces border with padding spacing between content, 
</br> margin sits in the border and acts like an invisible border to the div section 

```html
 <style>

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
      padding:10px;
      /* padding:10px; */
      text-align: center;
    }

    li{
        float:left;
        /* padding-left: 20px; */
        padding: 20px;;
        list-style: none;
        border: 1px solid white;
        background-color: Orangered;
        text-align: center;
        text-transform: uppercase;
        color:white;
    }

</style>

```

**index.html file sample # 3**
</br>

<details>
<summary> Code sample # 3 </summary>
</br>
</br>

```html

<html>

<head>
  <script>
  </script>

  <!-- MetaData info for webpage -->

  <meta name="encoding" content="utf-8" />
  <meta name="description" content="Basic HTML5 learning web page" />
  <meta name="Author" content="Dante" />
  <meta name="keywords" content="HTML5 learn html tutorials" />

  <!-- internal CSS -->
  <style>
    /* Html tag */
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

    /* Html tag */
    /* p {
      color: rgb(0, 0, 0);
      border: 1px;
      border-style: inset;
    } */

    /* ID */
    #idUser {
      background-color: black;
      color: yellowgreen;
    }

    /* ID */
    #idPass {
      background-color: darkblue;
      color: yellow;
    }

    /* Class */
    .abbr {
      font-family: cursive;
      color: yellow;
      font: bolder;
    }

    li{
        float:left;
        /* padding-left: 20px; */
        padding: 20px;;
        list-style: none;
        border: 1px solid white;
        background-color: Orangered;
        text-align: center;
        text-transform: uppercase;
        color:white;
    }

  </style>

</head>

<body>

  <!-- inline CSS -->

  <body style="background-color: rgb(12, 112, 212);">

    <!-- <body style="background-color: yellowgreen;"> -->

    <div class="box">
      <div class="box-title">
        <h2>What is <Span class="abbr">HTML</span></h2>
      </div>

      <div class="box-content">
        <p> HTML stands for
          <b><em>
              Hyper Text Markup Language
            </em>
          </b>, it is used for designing static web content
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
          JS stands for <em><b>Java Script</b></em>, it is teh browser's programming language
        </p>
      </div>
    </div>


    <div style="clear: left;">
    </div>
    <ul>
      <a href="https://github.com/Octavius-Dante/Nova-Proxima-">
        <li>ABAP on Hana</li>
      </a>
      <a href="https://github.com/Octavius-Dante/Arthelais">
        <li>Ui5 and Fiori</li>
      </a>
      <a href="https://github.com/Octavius-Dante/Nova-Prime">
        <li>Restful ABAP</li>
      </a>
      <a href="https://github.com/Octavius-Dante/Tetra_Proxima">
        <li>SAP BTP Cloud</li>
      </a>
    </ul>


    <!-- Form with action definition-->
    <form method="GET" action="https://www.gmail.com">

      <div style="clear: left;">
      </div>
      <h3>Personal details</h3>
      <!-- <br><br> -->
      <div>
        <div>
          <label>Username</label>
          <input id="idUser" name="usr">
        </div>
        <!-- <br><br> -->
        <div>
          <label>Password</label>
          <input id="idPass" name="pass" type="password">
        </div>
        <!-- <br><br> -->
        <!-- this SUBMIT button will take the values mentioned with type name for input fields-->
        <div></div>
        <input type="submit"><br>
      </div>
      </div>
    </form>

  </body>

</html>

```

</br></br>
</details>

</br> </br> 

**4. Responsive Web Design - Pseudo classes in CSS :**
</br></br>

Pseudo classes are special elements which brings conditional styling on the content. It also allows event based styles 
</br>  example: when i hover the mouse on an element the style should change

</br> 

```html

    li :hover {
      background-color: yellow;
      color:black;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-weight: bold;
    }

    a{
      text-decoration: none;
    }

```

**index.html file sample # 4**
</br>

<details>
<summary> Code sample # 4 </summary>
</br>
</br>

```html

<html>

<head>
  <script>
  </script>

  <!-- MetaData info for webpage -->

  <meta name="encoding" content="utf-8" />
  <meta name="description" content="Basic HTML5 learning web page" />
  <meta name="Author" content="Dante" />
  <meta name="keywords" content="HTML5 learn html tutorials" />

  <!-- internal CSS -->
  <style>
    /* Html tag */
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

    /* Html tag */
    /* p {
      color: rgb(0, 0, 0);
      border: 1px;
      border-style: inset;
    } */

    /* ID */
    #idUser {
      background-color: black;
      color: yellowgreen;
    }

    /* ID */
    #idPass {
      background-color: darkblue;
      color: yellow;
    }

    /* Class */
    .abbr {
      font-family: cursive;
      color: yellow;
      font: bolder;
    }

    li {
      float: left;
      /* padding-left: 20px; */
      padding: 20px;
      ;
      list-style: none;
      border: 1px solid white;
      background-color: Orangered;
      text-align: center;
      text-transform: uppercase;
      color: white;
    }

    li :hover {
      background-color: yellow;
      color:black;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-weight: bold;
    }

    a{
      text-decoration: none;
    }

  </style>

</head>

<body>

  <!-- inline CSS -->

  <body style="background-color: rgb(12, 112, 212);">

    <!-- <body style="background-color: yellowgreen;"> -->

    <div class="box">
      <div class="box-title">
        <h2>What is <Span class="abbr">HTML</span></h2>
      </div>

      <div class="box-content">
        <p> HTML stands for
          <b><em>
              Hyper Text Markup Language
            </em>
          </b>, it is used for designing static web content
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
          JS stands for <em><b>Java Script</b></em>, it is teh browser's programming language
        </p>
      </div>
    </div>


    <div style="clear: left;">
    </div>
    <ul>

      <li><a href="https://github.com/Octavius-Dante/Nova-Proxima-">ABAP on Hana</a></li>
      <li><a href="https://github.com/Octavius-Dante/Arthelais">Ui5 and Fiori</a></li>
      <li><a href="https://github.com/Octavius-Dante/Nova-Prime">Restful ABAP</a></li>
      <li><a href="https://github.com/Octavius-Dante/Tetra_Proxima">SAP BTP Cloud</a></li>

    </ul>


    <!-- Form with action definition-->
    <form method="GET" action="https://www.gmail.com">

      <div style="clear: left;">
      </div>
      <h3>Personal details</h3>
      <!-- <br><br> -->
      <div>
        <div>
          <label>Username</label>
          <input id="idUser" name="usr">
        </div>
        <!-- <br><br> -->
        <div>
          <label>Password</label>
          <input id="idPass" name="pass" type="password">
        </div>
        <!-- <br><br> -->
        <!-- this SUBMIT button will take the values mentioned with type name for input fields-->
        <div></div>
        <input type="submit"><br>
      </div>
      </div>
    </form>

  </body>

</html>

```

</br>
</details>

</br> </br> 

**5. Adding zebra colored table**
</br>

```html

<style>
    #data-expense td, th {
      border: 1px solid black;
      padding: 5px;
    }

    #data-expense th{
      background: red;
      color: white;
      font-family: cursive;
      font:bold;
    }

/* Zebra coloring */
    #data-expense tr:nth-child(even){
      background-color: white;
      color:black;
    }

    #data-expense tr:nth-child(odd){
      background-color: black;
      color:white;
    }
</style>

```

**index.html file sample # 5**
</br>

<details>
<summary> Code sample # 5 </summary>
</br>
</br>

```html

<html>

<head>
  <script>
  </script>

  <!-- MetaData info for webpage -->

  <meta name="encoding" content="utf-8" />
  <meta name="description" content="Basic HTML5 learning web page" />
  <meta name="Author" content="Dante" />
  <meta name="keywords" content="HTML5 learn html tutorials" />

  <!-- internal CSS -->
  <style>
    /* Html tag */
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

    /* Html tag */
    /* p {
      color: rgb(0, 0, 0);
      border: 1px;
      border-style: inset;
    } */

    /* ID */
    #idUser {
      background-color: black;
      color: yellowgreen;
    }

    /* ID */
    #idPass {
      background-color: darkblue;
      color: yellow;
    }

    /* Class */
    .abbr {
      font-family: cursive;
      color: yellow;
      font: bolder;
    }

    li {
      float: left;
      /* padding-left: 20px; */
      padding: 20px;
      ;
      list-style: none;
      border: 1px solid white;
      background-color: Orangered;
      text-align: center;
      text-transform: uppercase;
      color: white;
    }

    li :hover {
      background-color: yellow;
      color: black;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-weight: bold;
    }

    a {
      text-decoration: none;
    }

    /* duplication */
    /* td{
      border: 1px solid black;
    }

    th{
      border: 1px solid black;
    } */

    #data-expense td, th {
      border: 1px solid black;
      padding: 5px;
    }

    #data-expense th{
      background: red;
      color: white;
      font-family: cursive;
      font:bold;
    }

/* Zebra coloring */
    #data-expense tr:nth-child(even){
      background-color: white;
      color:black;
    }

    #data-expense tr:nth-child(odd){
      background-color: black;
      color:white;
    }

    /* zebra colouring if row not defined default column will be taken*/
    /*

    #data-expense :nth-child(odd){

    }

    #data-expense :nth-child(even){
      
    }

    */

    #data-expense{
      border-collapse: collapse;
    }

    #login{
      border-collapse: collapse;
      border-style: hidden;     
      
      td {
      border-style: hidden;
      padding: 5px;
    }
      
    }
  </style>

</head>

<body>

  <!-- inline CSS -->

  <body style="background-color: rgb(12, 112, 212);">

    <!-- <body style="background-color: yellowgreen;"> -->

    <div class="box">
      <div class="box-title">
        <h2>What is <Span class="abbr">HTML</span></h2>
      </div>

      <div class="box-content">
        <p> HTML stands for
          <b><em>
              Hyper Text Markup Language
            </em>
          </b>, it is used for designing static web content
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
          JS stands for <em><b>Java Script</b></em>, it is teh browser's programming language
        </p>
      </div>
    </div>


    <div style="clear: left;">
    </div>
    <ul>

      <li><a href="https://github.com/Octavius-Dante/Nova-Proxima-">ABAP on Hana</a></li>
      <li><a href="https://github.com/Octavius-Dante/Arthelais">Ui5 and Fiori</a></li>
      <li><a href="https://github.com/Octavius-Dante/Nova-Prime">Restful ABAP</a></li>
      <li><a href="https://github.com/Octavius-Dante/Tetra_Proxima">SAP BTP Cloud</a></li>

    </ul>

    <div style="clear: left;"></div>
    <div style="padding-top: 50px;"></div>
    <table id="data-expense">
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
      <tr>
        <td>April</td>
        <td>$1600</td>
        <td>$3200</td>
        <td>$4000</td>
        <td>$8800</td>
      </tr>
      <tr>
        <td>May</td>
        <td>$2400</td>
        <td>$4800</td>
        <td>$6000</td>
        <td>$13200</td>
      </tr>
      <tr>
        <td>June</td>
        <td>$3200</td>
        <td>$6400</td>
        <td>$8000</td>
        <td>$17600</td>
      </tr>
      <tr>
        <td>July</td>
        <td>$4000</td>
        <td>$8000</td>
        <td>$10000</td>
        <td>$22000</td>
      </tr>
      <tr>
        <td>August</td>
        <td>$4800</td>
        <td>$9600</td>
        <td>$12000</td>
        <td>$26400</td>
      </tr>
      <tr>
        <td>September</td>
        <td>$5600</td>
        <td>$11200</td>
        <td>$14000</td>
        <td>$30800</td>
      </tr>
      <tr>
        <td>October</td>
        <td>$6400</td>
        <td>$12800</td>
        <td>$16000</td>
        <td>$35200</td>
      </tr>
      <tr>
        <td>November</td>
        <td>$12800</td>
        <td>$14400</td>
        <td>$18000</td>
        <td>$39600</td>
      </tr>
      <tr>
        <td>December</td>
        <td>$8000</td>
        <td>$16000</td>
        <td>$20000</td>
        <td>$44000</td>
      </tr>
    </table>


    <!-- Form with action definition-->
    <form method="GET" action="https://www.gmail.com">

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
            <td><input type="submit"></td>
          </tr>
        </tbod>
      </table>


      </div>
    </form>

  </body>

</html>

```
</br>
</details>

</br> </br> 

[refer w3schools website for detailed understanding on CSS](https://www.w3schools.com)


</br>
</br></br>

## End of Exercise 3 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_4"> Exercise 4-JS Basic </a>
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
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_3"> Exercise 3-CSS </a> -->
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_2"> Exercise 2-HTML5</a>
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