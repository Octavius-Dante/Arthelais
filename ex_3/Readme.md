## Exercise 2 - CSS

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

3. **External CSS**

```html

```

</br></br>

<details>
<summary> HTML code sample </summary>
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

    h2{ color: aliceblue; 
    border: 4px dotted ;
    }
    p{ color: springgreen ; border: 1px ; border-style : inset ;}
</style>

</head>

<body>
  
<!-- inline CSS -->  
<body style="background-color: rgb(12, 112, 212);">

<!-- <body style="background-color: yellowgreen;"> -->

<div class="box">
<div class="box-title">
  <h2>What is HTML</h2>
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
  <h2>What is CSS</h2>
</div>

<div class="box-content">  
  <p> 
  CSS stands for Cascading Style Sheets, It is used to style / beautify our content
  </p>
</div>  
</div>

<div class="box">
  <div class="box-title">
  <h2>What is JS</h2>
</div>

<div class="box-content">   
  <p> 
  JS stands for Java Script, it is teh browser's programming lanaguage
  </p> 
</div>  
</div>

</body>

</html>

```

</br>
</br>

[refer w3schools website for detailed understanding on CSS](https://www.w3schools.com)

</br>
</br>
</details>

</br></br>
</br></br>
</br></br>

## End of Exercise 2 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_4"> Exercise 4-JS Basic </a>
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