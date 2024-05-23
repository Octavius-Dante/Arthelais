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
    function elementHide() {
      //$(".box").hide();           // variant 1 right away instantly hide 
      $(".box").fadeOut(5000);      // varaint 2 slowly disappear animation 
    }

    // Show screen element using JQuery 
    function elementShow() {
      //$(".box").show();           // variant 1 right away instantly show 
      $(".box").fadeIn(5000);       // varaint 2 slowly appear animation
    }

</script>

  <body>

    <div class="nobox">
      </br> </br>
      <div style="clear: left;"></div>
      <button onclick="elementHide()">Hide Element JQUERY</button>

      </br> </br>
      <div style="clear: left;"></div>
      <button onclick="elementShow()">Show Element JQUERY</button>
    </div>

  </body>

```

</br></br>

**JS - Asynchronous Non Blocking IO**

</br>

There will be immediate response from a function it wont wait for a function to be completed and perform next action it immediately executes.


```html

<!-- Link the JQuery script -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<script>

    // Hide screen element using JQuery 
    function elementHide() {
      //$(".box").hide();           
      $(".box").fadeOut(5000);      
    
    // JS non-blocking IO example 
    alert("Fade out effect is executed");
    }

</script>

  <body>

    <div class="nobox">
      </br> </br>
      <div style="clear: left;"></div>
      <button onclick="elementHide()">Hide Element JQUERY</button>

  </body>

```

</br></br>

**JS - Synchronous - execution**

</br>

Example of same block with synchronous activity.
</br>Check for the JQuery function name online for documentation to see what are all the parameters can be used.

```html

<script>
    // Hide screen element using JQuery 
    function elementHide() {
      //$(".box").hide();           
      $(".box").fadeOut(5000, function(){    
        alert("Fade out effect completed");
      });         
    }
</script>

<!-- it can be written in following alternative way -->

<script>
    // Hide screen element using JQuery 
    function elementHide() {
      //$(".box").hide();           
      $(".box").fadeOut(5000, callBack());         
    }

    function callBack(){
      alert("Fade out effect completed");
    }
</script>

```

</br></br>

**Image manipulation in JQuery**

```html

<script>

// Image manipulation function jquery
    function playImage() {
      $("#myImg").animate({
        width: '+=100px',
        height: '+=62px'
      });
    }

</script>

<body>

  <div class="box3"> 
    <img src="images/1222.jpg" width="300px" height="188px" id="myImg">
    </br> </br>
    <div style="clear: left;"></div>
    <button onclick="playImage()">Image play JQUERY</button>
  </div>    

</body>

```

</br></br>










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