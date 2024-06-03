## Exercise 24 - Fragments

</br></br>

**Exercise 1 : from previous session**

*Requirement :* 

- Create a sap.m.Table in the second tab (Supplier) for supplier data.
- The Columns are (name, since when, city & person name)
- The City columns must be editable. And when we clikc F4 help of city field, all the cities should come as in a pop-up

</br>

*View2.view.xml*

```xml

    <IconTabFilter iconColor="Positive" icon="sap-icon://supplier" text="Supplier">
        <Table >
    <!--/////////////////////////////////////////////////////////////////////////////////////////////-->
            <columns> 
                <Column >
                    <header>
                        <Text text="Name"/>
                    </header>
                </Column>
                <Column >
                    <header>
                        <Text text="City"/>
                    </header>
                </Column>
                <Column >
                    <header>
                        <Text text="Since When"/>
                    </header>
                </Column>
                <Column >
                    <header>
                        <Text text="Contact Person"/>
                    </header>
                </Column>                                                                                                
            </columns>
    <!--/////////////////////////////////////////////////////////////////////////////////////////////-->
        </Table>
    </IconTabFilter>


```

</br>

**Testing**

</br>
<img src="./files/ui5e24-1.png" >
</br></br>


**Difference between sap.m.table and sap.ui.table**

- *The ui.table will not display columns if we do not do binding with rows but the sap.m.table will display the columns always.*

- *The sap.m.table is a list eventually and all the properties we worked with list control works out of the box* 
*control extends from parent base class (sap.m.ListBase) - list modes -single select left, master select, multi select, delete, navigation everything works*

- 



</br></br> 

*View2.view.xml* --- *adding items*

```xml

    <IconTabFilter iconColor="Positive" icon="sap-icon://supplier" text="Supplier">
        <Table items="{/supplier}">
            <columns> 
                <Column >
                    <header>
                        <Text text="Name"/>
                    </header>
                </Column>
                <Column >
                    <header>
                        <Text text="City"/>
                    </header>
                </Column>
                <Column >
                    <header>
                        <Text text="Since When"/>
                    </header>
                </Column>
                <Column >
                    <header>
                        <Text text="Contact Person"/>
                    </header>
                </Column>                                                                                                
            </columns>
<!--/////////////////////////////////////////////////////////////////////////////////////////////-->
            <items>
                <ColumnListItem >
                    <Text text="{name}"/>
                    <Input value="{city}"/>
                    <Text text="{sinceWhen}"/>
                    <Link text="{person}"></Link>
                </ColumnListItem>
            </items>
<!--/////////////////////////////////////////////////////////////////////////////////////////////-->
        </Table>
    </IconTabFilter>


```

</br>

**Testing**

</br>
<img src="./files/ui5e24-2.png" >
</br></br>




</br></br></br></br>













**Exercise 2 : from previous session**

*Requirement :* 

- Find out in Ui5 SDK, how can we modularize SAP views 

</br></br>








</br>



</br></br>
</br></br>
</br></br>

## End of Exercise 24 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_25"> Exercise 25-Fragments Deep dive </a>
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
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_24"> Exercise 24-Fragments</a> -->
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