
## Explanation on different bindings 

</br>

- *Property binding :- binding a address path with property control is property binding*
- *Expression binding : - binding an expression of an Ui element control is expression binding*
- *Aggregation binding : - binding an aggregation to an Ui element control is property binding*
- *Element binding : - xxx*

</br> 


## Property binding

</br> 

When we bind address of model data with a property of our control, is called property binding
</br> E.G we bound */empStr/empId* with value property of input control

</br> 

*Property binding : - Syntaxes*

```js

//There are multiple ways of doing property binding following are the syntax : 

// Type 1 : used in XML view
 Property={address_of_data}

// Type 2 : used in XML view
//--- Complex binding syntax need to be used in bootstrap or ui5 will refuse this 
 Property={Path:'address_of_data'} 
  
// Type 3 : used in controller.js
 oControl.bind-Name-Of-Property('address_of_data')

// Type 4 : used in controller.js
 oControl.bindProperty(sProp-Name, sPath); 


```

</br> 

working example

*view.xml*

```xml

<!-- Type 1 :  Property bidning -->
    <Input id="idSalary" width="20%" value="{/empStr/Salary}" />
    <Label text="Currency"/>

<!-- Type 2 : Property bidning -->
    <Input id="idEmpName" width="30%" value="{path: '/empStr/empName'}" /> 
    <Label text="Salary"/>


```

</br>

*controlelr.js*

```js

// Type 3 : Property bidning 
    var oSalary = this.getView().byId("idSalary");
    oSalary.bindValue('/empStr/Salary');
    
// Type 4 : Property bidning 
    var oCurr = this.getView().byId("idCurrency");
    oCurr.bindProperty("value", "/empStr/Currency");

```

</br> 


## Expression binding 

</br> 

*When we bind a expression a (logic) with the property of a model, is called expression binding.*


```xml

<Input id="idSalary" width="20%" enabled="{= ${/empStr/empName} === 'Baratheon' ? false : true }"/>

```

- if the condition Baratheon is true (first value - False) will be used to set in enabled property
- if the condition Baratheon is false (second value - True) will be used to set in enabled property

</br> 

```xml

<Input id="idEmpName" width="20%" enabled="{= ${/empStr/salary} > 250000 ? true : false }"/>

```

- if the condition salary is true (first value - True) will be used to set in enabled property
- if the condition salary is false (second value - false) will be used to set in enabled property

</br> 


## Aggregation binding 

</br> 

- In data model array structure is the right data type to be used for binding for table control

- Row property in table control need to bind with data model, Row property is an *Aggregation* of table control so this is called *Aggregation binding*

- *What is Absolute path > : - Absolute path is a address which we supply in Aggregation Binding*

- *What is Relative path > : - Relative path its a path which we bind with child control of the parent who is already bound to absolute path*
    *The path is always relative to its parent*

</br>

*view.xml*

```xml

<!-- here : rows is aggregation binding - Table control is aggregated with aggregation called rows -->
<t:Table rows="{/empTab}"> 

<t:Table rows="{/empTab}"> <!-- Absolute path is a parent-->
    <t:columns>           
        <t:Column>
            <t:label>
                <Label text="EmpId" /> 
            </t:label>
            <t:template>
                <Text text="{empId}" /> <!-- Relative path is a child-->
            </t:template>
        </t:Column>

        <t:Column>
            <t:label>
                <Label text="EmpName" /> 
            </t:label>   
            <t:template>
                <Text text="{empName}" /> <!-- Relative path is a child-->
            </t:template>                         
        </t:Column>
</t:Table>  

```

</br> 

## Element binding 

</br> 

*When we bind a single dataset (1 record) element with a dependent control is called element binding.*

- The element address will be bound to the dependent control as absolute path

- let say we have a table control with many records - user selects 1 record - that selected data set (is a data path relative data path)

-- Now use this path to display the record in another form control with input field  
-- now binding this relative path to form control is element binding 
-- for form control this is an Absolute path 

**Table control**

- For table control *Absolute path* (Parent) is data model file # in ABAP internal table name 
- For table control *Relative path* (Child)  is list of records in *Absolute path* # in ABAP internal table records
 
- *Relative path* selected dataset in table control is addressed as *Absolute path* for form control - this is *Element binding*.
- Form control is dependent control here

**Simple form control**

- For SF control *Absolute path* (Parent) is data structure from memeory # in ABAP single record structure
- For SF control *Relative path* (Child) is list of fields in *Absolute path* # in ABAP records structure fields

</br></br>

<img src="./files/Element-Binding.png">

</br></br>


```


```