## Exercise 6 - JQuery

</br></br>

Major representation of JQuery "write less and do more", it is a collection of Java Script library and function out of the box.

1. it is free
2. Open source 
3. It is used by top brands
4. It is an industry standard
5. Simplifies our JS code

</br>

**How to get this library**

1. Download and make a local reference 
2. Reference it from CDN **(Content Delivery/Distribution Network)** - refer the latest version of JQuery 

</br>

**Local reference**
</br>
</br> Go to this website (https://jquery.com/) and download the file and same way we referred the script refer this JQuery (JS) file
</br> (not recommended because JQuery version may change and need to make changes every time to stay updated)

</br>

**Refer it from CDN**
</br>
</br> Go to this page (https://jquery.com/download/) and read about CDN and use any of the given CDN link.
</br> I used (https://developers.google.com/speed/libraries#jquery) have to link the online version to our project 
</br> like how we refer our JS script similarly an online link
</br>

```html

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

```

</br></br>

**How to use it**

' $ - indicates browser that we want to use JQuery

</br>

```html

$(selector).action();

```

</br></br>

**Changing the screen element using JQuery** - same task we did in JS code in previous session

```html

<!-- Link the JQuery script -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<script>

// change the screen element using JQuery --- color of titles
    function jqueryChange() {
      $(".box-title").css("background-color", "black");
    }    

</script>

  <body>

    </br> </br>
    <div style="clear: left;"></div>
    <button onclick="jqueryChange()">Screen element change JQUERY</button>

  </body>

```

</br></br>

**Hiding and Showing the screen element using JQuery**

```html

<!-- Link the JQuery script -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<script>

    // Hide screen element using JQuery 
    function screenElementHide() {
      $(".box").hide();
    }

    // Show screen element using JQuery 
    function screenElementShow() {
      $(".box").show();
    }

</script>

  <body>

      </br> </br>
      <div style="clear: left;"></div>
      <button onclick="screenElementHide()">Screen element Hide JQUERY</button>

      </br> </br>
      <div style="clear: left;"></div>
      <button onclick="screenElementShow()">Screen element Show JQUERY</button>

  </body>

```





















</br></br>
</br></br>
</br></br>

## End of Exercise 6 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_4"> Exercise 7-SAP Ui5 Framework </a>
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