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
      $(".box").fadeOut(5000);      // variant 2 slowly disappear animation 
    }

    // Show screen element using JQuery 
    function elementShow() {
      //$(".box").show();           // variant 1 right away instantly show 
      $(".box").fadeIn(5000);       // variant 2 slowly appear animation
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
    function playImageIncrease() {
      $("#myImg").animate({
        width: '+=100px',
        height: '+=62px'
      });
    }

// Image manipulation function jquery
    function playImageDecrease() {
      $("#myImg").animate({
        width: '-=100px',
        height: '-=62px'
      });
    }    

    function imageDance() {
      $("#myImg").animate({
        width: '+=100px',
        height: '+=62px'
      }, function() {
        $(this).animate({
          width: '-=100px',
          height: '-=62px'
        });
      });
    }

// the above same code to run in infinite loop 
    function imageDanceLoop() {
      $("#myImg").animate({
        width: '+=100px',
        height: '+=62px'
      }, function() {
        $(this).animate({
          width: '-=100px',
          height: '-=62px'
        }, function(){
            imageDanceLoop();
        });
      });
    }

</script>

<!-- Same image animation in mouse hover action -->
  <script>
    // once my page is fully loaded
    $(document).ready(function () {
      // attach an event dynamically to our image
      $('#hImg').mouseover(function () {
        //user mouse over on image, now this code will be called
        $("#hImg").animate({
          width: '+=100px',
          height: '+=62px'
        }, function () {
        $(this).animate({
          width: '-=100px',
          height: '-=62px'
        });
      });
      })
    });
  </script>


<body>

  <div class="box3"> 
    <img src="images/1222.jpg" width="300px" height="188px" id="myImg">
    </br> </br>
    <div style="clear: left;"></div>
    <button onclick="playImageIncrease()">Image Increase JQUERY</button>

    </br> </br>
    <div style="clear: left;"></div>
    <button onclick="playImageDecrease()">Image Decrease JQUERY</button>    
    
    </br> </br>
    <div style="clear: left;"></div>
    <button onclick="imageDance()">Image Dance JQUERY</button> 

    </br> </br>
    <div style="clear: left;"></div>
    <button onclick="imageDanceLoop()">Image Dance Loop JQUERY</button> 
   </div>    

<!-- Mouseover animation image -->
    <div class="box4">
     <img src="images/sample.jpg" width="300px" height="188px" id="hImg">
    <div>

</body>

```

</br>
</br></br>

## End of Exercise 6 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_7"> Exercise 7-SAP Ui5 Framework </a>
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
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_6"> Exercise 6-JQuery </a> -->
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_5"> Exercise 5-JS deep dive </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_4"> Exercise 4-JS basic </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_3"> Exercise 3-CSS </a>
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