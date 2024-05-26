## Exercise 13 - Expression Binding XML Model

</br>

**Default binding mode for JSON model** 

- *Two way binding mode*

</br>

> [!IMPORTANT]
> One way or Two way model, the model data change happens in the view wont be reflected to the file without an exclusive logic only the memory buffer is manipulated

</br>

<!-- **Disable or enable screen elements with help of models - using a button** -->

<details>
<summary> Code samples for two way binding with models </summary>
</br>
</br>

1. View data is loaded from a model 
2. Changing a view data in the screen should affect the model (communicate the change to model and modify it)
3. Then the View is reloaded from the model this should (disable or enable screen elements)

</br></br>

*controller.js* # 1

```js

sap.ui.define(
    ['sap/ui/core/mvc/Controller',
        'logger/model/models'],
    function (Controller, Models) {
        return Controller.extend("logger.controller.ex13", {

            onInit: function () {
                // Calling our own reuse class to create model object
                var oModel = Models.createJSONModel();

                // - Model settiing at application level - available in all the views     
                sap.ui.getCore().setModel(oModel);

                // BINDING type 3
                var oSalary = this.getView().byId("idSalary");
                oSalary.bindValue('/empStr/Salary');

                // BINDING type 4
                var oCurr = this.getView().byId("idCurrency");
                oCurr.bindProperty("value", "/empStr/Currency");
            },

            onLoad: function () {

                /// Exercise 13 -  change is here
/////////////////////////////////////////////////////////////////////
                
                //Step 1 : Get the model object
                var oModel = sap.ui.getCore().getModel();

                //Step 2 : cahnge the data in the model 
                var objData = oModel.getProperty("/empStr"); // getting everything in the path of the structure 
                console.log(objData);
                oModel.setProperty("/empStr/empName", "Spiderman");

/////////////////////////////////////////////////////////////////////       

            },

            /// Exercise 13 -  change is here
/////////////////////////////////////////////////////////////////////
            onShow: function () {
                //Step 1 : Get the model object
                var oModel = sap.ui.getCore().getModel();

                //Step 2 : cahnge the data in the model 
                var objData = oModel.getProperty("/"); // get everything in the model
                console.log(objData);
                // oModel.setProperty("/empStr/empName", "Spiderman");
            }
//////////////////////////////////////////////////////////////////// 
        });
    });

```

</br></br>

*view.xml* # 1 

```js

<mvc:View xmlns:form="sap.ui.layout.form" controllerName="logger.controller.ex13" 
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
       <!-- /// Exercise 13 -  change is here
///////////////////////////////////////////////////////////////////// -->
                    <Button text="Show" press="onShow"/>
<!-- ///////////////////////////////////////////////////////////////  -->
                </HBox>
                     
        </form:content>
    </form:SimpleForm>

    </mvc:View>


```

</br></br>

**Testing of the View to model changes**

*check the developer tools console section when the page is loaded*

<img src="./files/ui5e13_1.png" >
<img src="./files/ui5e13_2.png" >
<img src="./files/ui5e13_3.png" >
<img src="./files/ui5e13_4.png" >

</br></br>

</br>
</br>
</details>

</br></br>

**Features :-**

1 . *Can we have multiple models in a UI5 app - Yes*

2 . *How will system differentiate between these models* 

    Using named model, we will have a default, we need to set the model to the app with a name, 
    which is the identifier for the model. And use *name>* in the binding

3 . *Which model is used the most in the real-time?* - *JSON + Resource + OData*

4 . *What is the right way if i want to initialize my model and share with all controllers/views*

    set it at application level, we can further modularize controller code.

</br></br>

**Defined multiple model and forcing the view to select the model by name**

<details>
<summary> Code sample </summary>
</br>
</br>

```js

sap.ui.define(
    ['sap/ui/core/mvc/Controller',
        'logger/model/models'],
    function (Controller, Models) {
        return Controller.extend("logger.controller.ex13", {

            onInit: function () {
                // Calling our own reuse calss to create model object
                var oModel = Models.createJSONModel("model/mockdata/sample.json"); // model path passed 

                // - Model settiing at application level - available in all the views     
                sap.ui.getCore().setModel(oModel); // a - model with no name is the default model 

                /// Exercise 13 -  change is here 
///////////////////////////////////////////////////////////////////////////
                // Create JSON model 2 
                var oModel2 = Models.createJSONModel("model/mockdata/dataset.json"); // model path passed 

                // named model - we need to give a name
                sap.ui.getCore().setModel(oModel2, "got"); // a model with name
///////////////////////////////////////////////////////////////////////////

                // BINDING type 3
                var oSalary = this.getView().byId("idSalary");
                oSalary.bindValue('/empStr/Salary');

                // BINDING type 4
                var oCurr = this.getView().byId("idCurrency");
                oCurr.bindProperty("value", "/empStr/Currency");
            },

            onLoad: function () {
                //Step 1 : Get the model object
                var oModel = sap.ui.getCore().getModel();

                //Step 2 : cahnge the data in the model 
                var objData = oModel.getProperty("/empStr"); // getting everything in the path of the structure 
                console.log(objData);
                oModel.setProperty("/empStr/empName", "Spiderman");
            },

            onShow: function () {
                //Step 1 : Get the model object
                var oModel = sap.ui.getCore().getModel();

                //Step 2 : cahnge the data in the model 
                var objData = oModel.getProperty("/"); // get everything in the model
                console.log(objData);
                // oModel.setProperty("/empStr/empName", "Spiderman");
            },
        });
    });

```

</br></br>

```xml

<mvc:View xmlns:form="sap.ui.layout.form" controllerName="logger.controller.ex13" 
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
       <!-- /// Exercise 13 -  Forced the screen field to pick the data from named model 'got'
//////////////////////////////////////////////////////////////////////// -->            
            <Input id="idEmpName" width="30%" value="{path: 'got>/empStr/empName'}" enabled="{/empStr/pranks}" /> 
<!-- //////////////////////////////////////////////////////////////////  --> 
                  
            <Label text="Salary"/>
            <Input id="idSalary" width="20%" value="{/empStr/Salary}" enabled="{/empStr/pranks}"/>
            <Label text="Currency"/>
            <Input id="idCurrency" width="10%" value="{/empStr/Currency}" enabled="{/empStr/pranks}"/>
            <Label/> <!--empty label for spacing-->            
                <HBox>
                    <Button text="Load data" press="onLoad" width=""/>
                    <Button text="Show" press="onShow"/>       
                </HBox>
                     
        </form:content>
    </form:SimpleForm>

    </mvc:View>


```

</br>
</details>

</br></br>

**Defined a button and forcing the view to switch between multiple models**


<details>
<summary> Code sample </summary>
</br>
</br>

</br></br>
s
</br>
</br>
</details>


</br>
</br></br>

## End of Exercise 13 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_14"> Exercise 14-Table control </a>
</br>
<p align="center"> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main"> Main page </a> </p>


</br></br>

**All Previous sessions**
</br></br>
<!-- 
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_37"> Exercise 37-Deploy app to launchpad</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_36"> Exercise 36-WebIde and Git integration</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_35"> Exercise 35-POST, GET and DELETE from Fiori</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_34"> Exercise 34-GET and Connect</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_33"> Exercise 33-Fiori Project Connect OData</a>
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
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_13"> Exercise 13-Expression Binding XML Model</a> -->
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_12"> Exercise 12-Json Model Property Binding</a>
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