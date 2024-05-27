
## Explanation on different bindings 

- *Property binding :- binding a address path with property control is property binding*
- *Expression binding : - binding an expression of an Ui element control is expression binding*
- *Aggregation binding : - binding an aggregation to an Ui element control is property binding*
- *Element binding : - xxx*

</br> </br>


## Property binding
</br> </br>

When we bind address of model data with a property of our control, is called property binding
</br> E.G we bound */empStr/empId* with value property of input control

</br> </br>

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

</br> </br>

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

</br> </br>


## Expression binding 

</br> </br>

*When we bind a expression a (logic) with the property of a model, is called expression binding.*


```xml

<Input id="idSalary" width="20%" enabled="{= ${/empStr/empName} === 'Baratheon' ? false : true }"/>

```

- if the condition Baratheon is true (first value - False) will be used to set in enabled property
- if the condition Baratheon is false (second value - True) will be used to set in enabled property

</br> </br>

```xml

<Input id="idEmpName" width="20%" enabled="{= ${/empStr/salary} > 250000 ? true : false }"/>

```

- if the condition salary is true (first value - True) will be used to set in enabled property
- if the condition salary is false (second value - false) will be used to set in enabled property

</br> </br>


## Aggregation binding 

</br> </br>

- In data model array structure is the right data type to be used for binding for table control

- Row property in table control need to bind with data model, Row property is an *Aggregation* of table control so this is called *Aggregation binding*

- *What is Absolute path > : - Absolute path is a address which we supply in Aggregation Binding*

- *What is Relative path > : - Relative path its a path which we bind with child control of the parent who is already bound to absolute path*
    *The path is always relative to its parent*


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

</br> </br>

## Element binding 

</br> </br>


```


```