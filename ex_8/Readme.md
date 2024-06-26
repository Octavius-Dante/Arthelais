## Exercise 8 - Ui5 Control Hierarchy & MVC Architecture | Design pattern

</br></br>

1. We never use document API to get the element objects because this API provides HTML element objects to us.
</br> We need to obtain SAP UI5 element objects so that we can call he attributes and functions of SAP ui5 elements as per SDK

2. To obtain the UI5 element object, we can use **sap.ui.getCore() - Running application object**
 </br> and then on top of it we can call a method **byId('Controlled')** to get the object of Ui5 element

3. Once we have the Ui5 element object, we can call setter and getter methods to play with attributes

4. For every attributes in SAP Ui5 class we will have setter and getter methods. 
</br> EG. if we have a text property we will have **setText and getText** methods

5. If there is an Attribute, Method, event, aggregation. Which is not visible in a class, 
</br> check its parent class may be it is inherited from its parent class

6. If there is an event, we will have **fireEvent, attachEvent, detachEvent** methods available to play with events of the control

7. If we have aggregations usually we will have methods like **addAgg, removeAgg, setAgg....**

8. Every JS file in SAP Ui5 except views, follows a special syntax (template or skeleton) called scaffolding template.
</br> Because a JS file is treated like a class. A class can depend on other classes (module), hence we will need this skeleton.

```js
sap.ui.define([dep1, dep2, ...], function(obj1, obj2, ...){
}); // --- for a controller class sap/ui/core/mvc/Controller

```


</br></br>


<img src="./files/Sap_ui5_control.png" >


</br></br>


**Association - Relationship between 2 classes**

1. Aggregation : Lose coupling, both object can function independently. [0..N]
2. Composition : Tight coupling, both objects cannot function independently, must have relation. [1..N]


</br></br>


**Reading value from input in Ui5**

```html

<html>
<head>
    <script>
        var oBtn = new sap.m.Button("idBtn", {
            text: "Create Employee data",
            icon: "sap-icon://add-employee",
            press: function () {

// Type 1 
                // Step1 : get the application object (instrance)
                var oCore = sap.ui.getCore();
                // Step 2 : Obtain the Ui5 control object - sap.ui.getCore().byid("idInp")
                var oInp = oCore.byId("idInp");
                // Step 3 : We have a value, so we can write setter and getter for same
                var sVal = oInp.getValue();
                // Step 4 : print on screen
                alert(sVal);
// Type 2 
                // chaining code of above statements
                alert(sap.ui.getCore().byId("idInp").getValue());

            }
        });
        oBtn.placeAt("content");    //button 
        new sap.m.Input("idInp").placeAt("content2"); // input field
    </script>
</head>

<body class="sapUiBody">
    <div id="content"> </div> <!-- button -->
    <div id="content2"> </div> <!-- input field -->
</body>

</html>

```

</br></br>


**Event based activity in Ui5** : -- button should be active based on another button's click action 

```html

<html>

<head>

    <script>
// Button 1 - definition        
        var oBtn = new sap.m.Button("idBtn", {
            text: "Create Employee data",
            icon: "sap-icon://add-employee",
            press: function(){ }
        });

// Button 2 - definition
        var oBtn2 = new sap.m.Button({
        text: "Attach",
        icon: "sap-icon://validate",
        press: function(){
        // Step 1 : get the object of Button 1
            var oBtnNew = sap.ui.getCore().byId("idBtn");
        // Step 2: Attach the event dynamically to the function
            oBtnNew.attachPress(function(){
        // Alert message Text - getting value from Input field                 
                alert(sap.ui.getCore().byId("idInp").getValue());    
            }); 
        }    
    });
       
        oBtn.placeAt("content");    // Button 1            
        new sap.m.Input("idInp").placeAt("content2");   // Input field
        oBtn2.placeAt("content3");  // Button 2

    </script>

    <style></style>
</head>

<body class="sapUiBody">
    Welcome!
    <div id="content"> </div>
    <div id="content2"> </div>
    <div id="content3"> </div>
</body>

</html>

```

</br></br>

## Model View Control - Architecture (Conventional) | Ui5 Architecture 
</br></br>
<img src="./files/mvc_ui5_DP.png" >
</br></br>

**Creating a JS view**

1. Create **View folder and Controller folder** inside webapp folder of project directory
2. Create **Main.view.js** file inside **(View folder)**

</br></br>

<details>
<summary> JS view sample </summary>
</br>
</br>

*controller - JS*

```js
// This is Scaffolding template 
sap.ui.define(
    ['sap/ui/core/mvc/Controller'],
    function (Controller) {
        return Controller.extend("spiderman.controller.Main", {

        });
    });

```

</br></br>

*view - JS*

```js

sap.ui.jsview("spiderman.view.Main", {

    // This is a fixed function of js view 
    getControllerName: function () {
        return "spiderman.controller.Main";
    },

    createContent: function () {

        var oBtn = new sap.m.Button("idBtn", {
            text: "Create Employee data",
            icon: "sap-icon://add-employee",
            press: function () { }
        });

        var oBtn2 = new sap.m.Button({
            text: "Attach",
            icon: "sap-icon://validate",
            press: function () {
                // Step 1 : get the object of Button 1
                var oBtnNew = sap.ui.getCore().byId("idBtn");
                // Attach the event dynamically to the function
                oBtnNew.attachPress(function () {
                    alert(sap.ui.getCore().byId("idInp").getValue());
                });
            }
        });

        var oInp = new sap.m.Input("idInp");
        
        // oBtn.placeAt("content"); 
        // oInp.placeAt("content2");
        // oBtn2.placeAt("content3");

        // This is how the values are placed to web in JS view 
        return [oInp,oBtn,oBtn2];
        
    }
});

```

</br></br>

*index - html*

```html

<html>

<head>
    <!-- <script src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"></script> -->
    <script id="sap-ui-bootstrap" 
            type="text/javascript" 
            src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"
            data-sap-ui-libs="sap.m" 
            data-sap-ui-theme="sap_horizon" 
            data-sap-ui-resourceroots='{ "spiderman" : "./" }'></script>
    <script>
/////////////////////////////////////////
    // Earlier in HTML view we had lot of code written here which got shifted to JS view 
    // code is shifted to (webapp\view\Main.view.js) file
/////////////////////////////////////////
/// NEW CODE BLOCK ///
        var oView = new sap.ui.view({
            viewName: 'spiderman.view.Main',
            type: 'JS'
        });

        // Now we can place all the screen elements in this one div
        oView.placeAt('content');
/////////////////////////////////////////
    </script>
    
    <style></style>

</head>

<body class="sapUiBody">
    Welcome!
    <div id="content"> </div>
    <!-- <div id="content2"> </div> -->
    <!-- <div id="content3"> </div> -->
</body>

</html>

```
</br>
</br>
</details>


</br></br>

**How to see the Preview of the page properly in VSCode and BAS**

Live preview and Show preview - will mostly fail due to lack of authorization to access bootstrap link

so in command palette > **live preview : Show Preview external browser** should be selected as shown below

</br>

<img src="./files/ui5e8_1.png" >


</br> Above method is first time once the port is active next time onwards can select port option in the window
</br>

<img src="./files/ui5e8_2.png" >



</br></br>


[All SAP Fiori apps reference library provided by SAP](https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/home)

[SAP Sample Fiori SDK screen elements documentation](https://sapui5.hana.ondemand.com/)


</br>
</br></br>

## End of Exercise 8 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_9"> Exercise 9-Control Hierarchy 2</a>
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
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_8"> Exercise 8-Ui5 Control Hierarchy </a> -->
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_7"> Exercise 7-SAP Ui5 Framework </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_6"> Exercise 6-JQuery </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_5"> Exercise 5-JS deep dive </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_4"> Exercise 4-JS basic </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_3"> Exercise 3-CSS </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_2"> Exercise 2-HTML5</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_1"> Exercise 1 -Basic </a>


<!--



-->