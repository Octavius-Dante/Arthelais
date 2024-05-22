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

</br></br>

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
  </b>, it is used for designign static web content
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
  JS stands for Java Script, it is teh browser's programming lanaguage
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
      <!-- this SUBMIT button will take the values mentioend with type name for input fields-->
      <input type="submit"><br>
  </form>

</body>

</html>

```
</br>
</details>

</br></br>

Float property in CSS for a div section if float is assigned this can be aligned with left or right direction in style section
</br> </br> 

```html
float: left;
```

</br></br>

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
          JS stands for Java Script, it is teh browser's programming lanaguage
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
        <!-- this SUBMIT button will take the values mentioend with type name for input fields-->
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


[refer w3schools website for detailed understanding on CSS](https://www.w3schools.com)


</br></br>
</br></br>
</br></br>

## End of Exercise 3 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_4"> Exercise 4-JS Basic </a>
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