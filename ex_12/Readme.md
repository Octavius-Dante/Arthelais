## Exercise 12 - Json Model Property Binding

</br></br>

**Binding Types 4**

**Property binding** : - When we bind address of model data with a property of our control, is called property binding 
</br> E.G we bound */empStr/empId* with value property of input control

There are multiple ways of doing property binding following are the syntax : 

 1.1. Property={address_of_data}

 1.2. Property={Path:'address_of_data'} --- Complex binding syntax - ui5 will refuse this 
     
 1.3. oControl.bind-Name-Of-Property('address_of_data')
     
 1.4. oControl.bindProperty(sProp-Name, sPath); 



</br></br>

**How to fill data to the screen field using data model**

*controller JS file model definition*

```js

sap.ui.define(
    ['sap/ui/core/mvc/Controller',
    'logger/model/models'], 
    function(Controller, Models){
        return Controller.extend("logger.controller.ex12",{

            onInit: function(){            
                // Calling our own reuse calss to create model object
                var oModel = Models.createJSONModel();

                // Step 3. Make the model aware to the application
                // - Model settiing at application level - available in all the views     
                sap.ui.getCore().setModel(oModel);   

                 // - Model setting at View level - only specific to the view
                 // - this.getView().setModel(oModel);    
                 
            // Step 4. Binding Syntax Type 3, 4 
           ////////////////////////////////////////////////////                            
                // BINDING type 3
                var oSalary = this.getView().byId("idSalary");
                oSalary.bindValue('/empStr/Salary');
                
                // BINDING type 4
                var oCurr = this.getView().byId("idCurrency");
                oCurr.bindProperty("value", "/empStr/Currency");
            },

            onLoad: function(){
                this.getView().byId("idEmpId").setValue("609879");
                this.getView().byId("idEmpName").setValue("Argnan Carlyle");
                this.getView().byId("idSalary").setValue("400000"); 
                this.getView().byId("idCurrency").setValue("USD");
            },

        });
});

```

</br></br>

*XML view data binding*

```xml

<mvc:View xmlns:form="sap.ui.layout.form" controllerName="logger.controller.ex12" 
xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m"
xmlns:f="sap.ui.layout.form"
xmlns:core="sap.ui.core">

<!-- Simple form definition Form is the ibrary namesapce -->
<!-- Aggregation of control follows the same name space as the parent Form name -->

<!-- No need to mention library for this form xmlns:f="sap.ui.layout.form" -->
    <form:SimpleForm editable="true"> <!-- editable property aligns the controls properly in screen -->
    <form:title>
        <core:Title icon="sap-icon://customer" text="Employee Details" />
    </form:title>
        <form:content>  <!-- Aggregation name starts with small letter-->
            <Label text="Emp Id"/> <!-- control name starts with capital letter -->            
            
            <!--BINDING type 1 { } address of the data operator for data binding -->
            <Input id="idEmpId" width="25%" value="{/empStr/empId}"/> 
            <Label text="Emp Name"/>

            <!--BINDING type 2 have to instruct in Bootstrap for thsi type of binding-->
            <Input id="idEmpName" width="30%" value="{path: '/empStr/empName'}" /> 
            <Label text="Salary"/>
            <Input id="idSalary" width="20%" value="{/empStr/Salary}" />
            <Label text="Currency"/>
            <Input id="idCurrency" width="10%" value="{/empStr/Currency}" />
            <Label/> <!--empty label for spacing-->            
                <HBox>
                    <Button text="Load data" press="onLoad" width=""/>
                </HBox>
                        
        </form:content>
    </form:SimpleForm>

    </mvc:View>


```

</br></br>

*Model JS file*

```js

sap.ui.define(['sap/ui/model/json/JSONModel'], // Dependency asynchronous module definition (AMD)
    function (JSONModel) {
        'use strict';
        // 'use strict' is declaration instruction to throw error 
        // if mentioned it will throw error when a value is assigned without declaration
        return {
            createJSONModel: function () {
                // Step 1. create a brand new model object
                var oModel = new JSONModel();
                // Step 2. Load or set the data to the model
                // oModel.setData();
                oModel.loadData("model/mockdata/sample.json");
                return oModel;
            },
            createXMLModel: function () {
            },
            createResourceModel: function () {
            }
        };
    });

```

</br></br>

*Mockdata - model Json file*

```json

{
    "empStr": {
        "empId": 634,
        "empName": "Carlisle",
        "Salary": 450000,
        "Currency": "USD"
    },

    "empTab": [
        {
            "empId": 101,
            "empName": "jane",
            "salary": 250000,
            "currency": "USD"
        },
        {
            "empId": 102,
            "empName": "jack",
            "salary": 125000,
            "currency": "USD"
        },
        {
            "empId": 103,
            "empName": "jerry",
            "salary": 300000,
            "currency": "DIN"
        }
    ]
}

```

</br></br>

*Index Html file*

```html

<html>
    <head>

        <script src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"
                data-sap-ui-libs="sap.m"
                data-sap-ui-theme="sap_fiori_3_dark"
                data-sap-ui-resourceroots='{"logger" : "./"}'
                data-sap-ui-bindingSyntax="Complex"
        >     
        </script>

        <script>
            var oViewXML = new sap.ui.view({
                viewName: 'logger.view.ex12',
                type: 'XML',
                id: "idXMLView"
            });
            oViewXML.placeAt("canvas");
        </script>
        
    </head>
    <body class="sapUiBody">
        <div id="canvas"></div>
    </body> 

</html>

```

</br></br>

<details>
<summary> Disabling the screen field using View -property binding and data model </summary>
</br>
</br>

I want to disable / enable all the screen fields based on a single field value from data file (model) json

*setting a boolean true / false value to a field in the file - json*

```json
// Disable - i gave the word pranks can give any name of your choice
{
    "empStr": {
        "empId": 634,
        "empName": "Carlisle",
        "Salary": 450000,
        "Currency": "USD",
        "pranks": false
    }
}

// Enable
{
    "empStr": {
        "empId": 634,
        "empName": "Carlisle",
        "Salary": 450000,
        "Currency": "USD",
        "pranks": false
    }
}

```

</br></br>


*XMl view with enable property for the screen fields*

```xml 

<mvc:View xmlns:form="sap.ui.layout.form" controllerName="logger.controller.ex12" 
xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m"
xmlns:f="sap.ui.layout.form"
xmlns:core="sap.ui.core">

<!-- Simple form definition Form is the ibrary namesapce -->
<!-- Aggregation of control follows the same name space as the parent Form name -->

<!-- No need to mention library for this form xmlns:f="sap.ui.layout.form" -->
    <form:SimpleForm editable="true"> <!-- editable property aligns the controls properly in screen -->
    <form:title>
        <core:Title icon="sap-icon://customer" text="Employee Details" />
    </form:title>
        <form:content>  <!-- Aggregation name starts with small letter-->
            <Label text="Emp Id"/> <!-- control name starts with capital letter -->            
            
            <!--BINDING type 1 { } address of the data operator for data binding -->
            <Input id="idEmpId" width="25%" value="{/empStr/empId}" enabled="{/empStr/pranks}"/> 
            <Label text="Emp Name"/>

            <!--BINDING type 2 have to instruct in Bootstrap for thsi type of binding-->
            <Input id="idEmpName" width="30%" value="{path: '/empStr/empName'}" enabled="{/empStr/pranks}" /> 
            <Label text="Salary"/>
            <Input id="idSalary" width="20%" value="{/empStr/Salary}" enabled="{/empStr/pranks}"/>
            <Label text="Currency"/>
            <Input id="idCurrency" width="10%" value="{/empStr/Currency}" enabled="{/empStr/pranks}"/>
            <Label/> <!--empty label for spacing-->            
                <HBox>
                    <Button text="Load data" press="onLoad" width=""/>
                </HBox>
                     
        </form:content>
    </form:SimpleForm>

    </mvc:View>


```

</br>
</br>
</details>



</br></br>
</br></br>
</br></br>

## End of Exercise 12 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_13"> Exercise 13-Expression Binding XML Model </a>
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
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_12"> Exercise 12-Json Model Property Binding</a> -->
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_11"> Exercise 11-Model Basics </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_10"> Exercise 10-XML Views </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_9"> Exercise 9-Control Hierarchy 2</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_8"> Exercise 8-Ui5 Control Hierarchy </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_7"> Exercise 7-SAP Ui5 Framework </a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_6"> Exercise 6-JQuery </a>
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