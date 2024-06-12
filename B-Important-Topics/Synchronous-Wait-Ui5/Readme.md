
## Synchronours VS Asynchronours - Usage in Ui5 

</br>

**Asynchronous JavaScript** : *is the programming method where operations are run independently allowing the program to continue running while waiting for certain tasks to complete.* 

</br>

**Synchronous JavaScript** : *is the programming approach where tasks of a program are executed sequentially one at a time.*

</br>
<img src="./files/async-await.png" >
</br></br>


**Sample code for understanding**
</br></br>

*index.html with JS script example*

```html

<html>

<head>
    <!-- <script src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"></script> -->

    <script id="sap-ui-bootstrap" type="text/javascript" src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"
        data-sap-ui-libs="sap.m" data-sap-ui-theme="sap_horizon" data-sap-ui-resourceroots='{
        "spiderman" : "./"
    }'></script>

    <script>

        //////////////////////////////////////////////////////////////////////////
        // Normal alert function instant display         
        var oBtn1 = new sap.m.Button("idBtn1", {
            text: "Instant Alert",
            icon: "sap-icon://add-employee",
            press: function () {
                alert("Ui5 instant alert test");
            }
        });

        // TYPE 1 - Synchronous execution based on timer wait 
        //////////////////////////////////////////////////////////////////////////        
        // Display alert based on timer wait
        var oBtn2 = new sap.m.Button("idBtn2", {
            text: "Wait 2 seconds alert",
            icon: "sap-icon://pending",
            press: function () {

                let timeout;
                timeout = 0
                // Make a new timeout set to go off in 2000 milliseconds 
                timeout = setTimeout(function () {
                    message_disp();
                }, 2000); // timer in milliseconds 

                function message_disp() {
                    // Step 1. Put your logic here which gets executed  
                    // Step 2. Timer will wait and display the result of Step 1's execution 
                    alert("Ui5 2 seconds wait alert test");
                };
            }
        });

        // TYPE 2 - Synchronous flow based on another process completion
        //////////////////////////////////////////////////////////////////////////
        // Display alert based on Synchronous flow, 
        // Wait for a specific functionality to comeplete and display alert        
        var oBtn3 = new sap.m.Button("idBtn3", {
            text: "Wait for a sequence of process",
            icon: "sap-icon://lateness",
            press: function () {

                let preview_timer = setTimeout(function () {
                    abc(); // sequence 1
                    xyz(); // sequence 2                     
                    last(); // sequence 3
                    alert('Ui5 alert test first message');
                }, 1000);

                // Process 1 
                function abc() {
                    setTimeout(function () {
                        alert("Ui5 alert test process 1");
                    }, 100)
                };

                // Process 2 
                function xyz() {
                    setTimeout(function () {
                        alert("Ui5 alert test process 2");
                    }, 100)
                };

                // Process 2 
                function last() {
                    setTimeout(function () {
                        alert("Ui5 alert test last message");
                    }, 100)
                };
            }
        });

        // TYPE 3 - Synchronous execution based on another process completion
        //////////////////////////////////////////////////////////////////////////
        var oBtn4 = new sap.m.Button("idBtn4", {
            text: "Wait for a process to comeplete",
            icon: "sap-icon://process",
            press: function () {
                alert("Ui5 alert test after process completion");
            }
        });

        oBtn1.placeAt("content1");
        oBtn2.placeAt("content2");
        oBtn3.placeAt("content3");
        oBtn4.placeAt("content4");

    </script>
    <style></style>
</head>

<body class="sapUiBody">
    </br></br>
    Welcome! - Synchronous Java Script examples
    </br></br>
    <div id="content1"> </div>
    </br>
    <div id="content2"> </div>
    </br>
    <div id="content3"> </div>
    </br>
    <div id="content4"> </div>
</body>

</html>

```