## Different Type of models in UI5 

</br></br>

Model is an object of data, The model is used to 

- Hold application data
- Manage data exchange between view and model through binding
- Provides manipulation capabilities
- Also, allows us to communicate to SAP server

</br>

**Types of models :**

- Client side
- Server side 

</br>

**Client side model :**

A Client side model, keeps all the data in the browser once loaded. Suitable for small size of data.
</br> These models are like internal tables in ABAP used for Data manipulation.

</br>

**Client side model types**

- JSON model - (JSON data file )
- XML model  - (XML data file)
- Resource model (i18n translation text for screen elements file)

</br>

**Server side model :**

A Server side model, keeps all the data in the server, It loads the data on demand when requested 
</br> using request response architecture, suitable for large size of data
</br> This model is a hook to communicate from Fiori App to SAP Server.
</br> SAP Fiori Apps can **only talk to OData services**.

</br>

**Server side model types**

- OData model

</br></br>

**Steps to create model**

1. create a brand new model object

```js

new sap.ui.model.json.JSONModel
new sap.ui.model.xml.XMLModel
new sap.ui.model.resource.ResourceModel
new sap.ui.model.odat.v2.ODataModel

```

2. Load or set the data to the model

```js    
    oModel.setData, oModel.loadData
```

3. Make the model aware to the application

```js

sap.ui.getCore().setModel(oModel) - set at App level //application level - RECOMMENDED
this.getView().setModel(oModel)  // only that view - view level
this.getView().byId("idControl").setModel(oModel) // Control level

```

4. Data Binding 4 types (using path) 

- *Property binding :- Binding the address path with property of a control-Object is property binding*
- *Expression binding : - Binding an expression of an Ui element control-object is expression binding*
- *Aggregation binding : - Binding an aggregation to an Ui element control-object is aggregation binding*
- *Element binding : - Binding the address path of an element (child) to a dependent control-Object is called element binding*



