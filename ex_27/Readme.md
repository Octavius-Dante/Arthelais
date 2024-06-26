## Exercise 27 - OData GET

</br>

**Identify Gateway services Version**

*In Order to Work with Gateway services in SAP ERP (ECC | S/4 HANA) systems, Need to identify the version in the system,* 
<br> *SAP Gateway services version should be greater than 7.40*

*SAP_BASIS - 740 or above*
<br> and 
<br> *SAP_GWFND - 740 or above*


</br>
<img src="./files/ui5e27-1.png" >
</br></br>

**Configuration settings for Gateway services**

*In SPRO T-code in the following tree path the settings should be active as shown below*

</br>
<img src="./files/ui5e27-2.png" >
</br></br>


## OData Service Origin and Functionality

</br>

OData Service stands for **Open Data Protocol**, it is used to expose data over network **(http/https) protocol**.
</br> It was initially developed by an organization called *OASIS* nad later acquired by *Microsoft* and became an Open source.
</br> OData is a **REST (Representational State transfer)** also known as **Stateless communication.**

<br>

**OData Service is an open source** in the generation of technology and in the world of web applications billions of organizations are using it in day today life
this OData can be built using JAVA, .Net, Java Script also in cloud based applications.

<br>

**Stateful Communication** : contains session example SAP logon pad if there is inactivity the session times out.

<br>

**Stateless Communication** : doesn't operate based on session from back end it operates based on request and response if there is a request received it process it and sends response.

</br></br>

> [!IMPORTANT]
> Fiori only communicates to OData service it cannot communicate to CDS or ABAP directly it needs to be converted into OData service.

</br></br>

## Demo OData service in any ECC or S/4 HANA On-Premise systems

</br>


SAP Provides a sample OData service in every SAP system for demo and training purpose. Which contains different entity sets for training like Sales order, Product, supplier, customer, ..... GW_SAMPLEBASIC

By Default in your system it wont be active, we need to activate it. 

</br></br>

**Important T-codes for OData service**

*1. Maintain and register services :* **/n/IWFND/MAINT_SERVICE** 

*2. Test a service in SAP System :* **/n/IWFND/GW_CLIENT** 

*3. To detect runtime errors for service :* **/n/IWFND/ERROR_LOG** 

*4. SAP OData Service Builder :* **SEGW** 

</br></br>


**/n/IWFND/MAINT_SERVICE** 

</br>
<img src="./files/ui5e27-3.png" >
</br></br>

**/n/IWFND/GW_CLIENT**

</br>
<img src="./files/ui5e27-4.png" >
</br></br>

**/n/IWFND/ERROR_LOG** 

</br>
<img src="./files/ui5e27-5.png" >
</br></br>



**Sample basic OData service in T-code : /n/IWFND/MAINT_SERVICE**

</br></br>
<img src="./files/ui5e27-6a.png" >
</br></br>
<img src="./files/ui5e27-6b.png" >
</br></br>
<img src="./files/ui5e27-6c.png" >
</br></br>

</br></br>

The following links are used in my demo server the path starting from '/sap/opu/odata/IWBEP/------------' this remains the same only domain and port differs according to company's OData service path

</br></br>

## Service calls

</br>

1. *Service document - When we hit an OData service it loads the service document which shows collection of all the entity sets.* 
<br> *Entity Set - End point on which we apply all the CURDQ Operation.*

```http
http://vhcalnplci.dummy.nodomain:8000/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/?$format=xml
```

</br>
<img src="./files/ui5e27-7.png" >
</br></br>

> [!IMPORTANT]
> Entity type is a structure of entity set (aka) structure of business data

</br></br>

2. *Service metadata Document - Which holds the information of the data about the data. It contains all the list of service entity types composed of property and keys*

```http
http://vhcalnplci.dummy.nodomain:8000/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/$metadata
```

You can notice entity set structures field details and its length in this metadata

</br>
<img src="./files/ui5e27-8a.png" >
</br></br>

[Metadata XML sample here download it and open it in browser](https://github.com/Octavius-Dante/Arthelais/blob/main/ex_27/GWSAMPLE_BASIC-metadata.xml)

</br></br>

## OData service - GET Calls (aka) Read operations 

</br>

> [!IMPORTANT]
> First parameter in OData HTTP call starts with '?' question mark operations starts with '$' and all consecutive operations are added with '&' 

</br></br>

```http
Sample 1 : (ProductSet?$format=json)

Sample 2 : https://odata-api.blah.com/accounts?$expand=company&$filter=company/name eq 'Nebcorp'&$expand=company/company_plan

Sample with spaces for understanding : https://odata-api.blah.com/accounts ? $expand=company & $filter=company/name eq 'Nebcorp' & $expand=company/company_plan

```

</br></br>

**1. Read all the records of the EntitySet this is an equivalent to (SELECT * FROM DB.Table)** 

```http
http://vhcalnplci.dummy.nodomain:8000/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/ProductSet?$format=json
```

<details>
<summary> case 1. image sample of xml </summary>
</br></br>
<img src="./files/ui5e27-9.png" >
</details>
</br></br>

> [!IMPORTANT]
> Use JSON viewer or JSON formatter plugin in chrome browser for better readability of JSON data

</br></br>

> [!IMPORTANT]
> Pagination : business data will be huge cant load all billions of records in single go so small chunk of data is loaded and on demand it will load further data example  youtube video buffering 

</br></br>

**2. Read only top 2 records pagination sample 1 (SELECT * UP TO n ROWS FROM DB.Table)**

```http
http://vhcalnplci.dummy.nodomain:8000/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/ProductSet?$format=json&$top=2
```

<details>
<summary> case 2. image sample of xml </summary>
</br></br>
<img src="./files/ui5e27-10a.png" >
</details>
</br></br>

**3. Read only 2 records after skipping first 2 records pagination sample 2 (SELECT * UP TO ROWS n FROM DB.Table)**

```http
http://vhcalnplci.dummy.nodomain:8000/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/ProductSet?$format=json&$top=2&$skip=2
```

<details>
<summary> case 3. image sample of xml </summary>
</br>
<img src="./files/ui5e27-11.png" >
</details>
</br></br>

**4. Load selected properties only (SELECT Col1, Col2, Col3... FROM DB.Table)**

```http

// Without top and skip
http://vhcalnplci.dummy.nodomain:8000/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/ProductSet?$format=json&$select=ProductID,Name,Category,Price

// With top and skip 
http://vhcalnplci.dummy.nodomain:8000/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/ProductSet?$format=json&$top=2&$skip=2&$select=ProductID,Name,Category,Price
```

<details>
<summary> case 4. image sample of xml </summary>
</br>
<img src="./files/ui5e27-12.png" >
</details>
</br></br>

**5. Filter the data using where condition based on criteria (SELECT * FROM DB.Table WHERE condition)**

```http

// Before pressing enter - query looked like
http://vhcalnplci.dummy.nodomain:8000/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/ProductSet?$format=json&$select=ProductID,Name,Category,Price&$filter=Category eq 'Notebooks'

// After pressing enter - space and single quote got converted
http://vhcalnplci.dummy.nodomain:8000/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/ProductSet?$format=json&$select=ProductID,Name,Category,Price&$filter=Category%20eq%20%27Notebooks%27
```

<details>
<summary> case 5. image sample of xml </summary>
</br>
<img src="./files/ui5e27-13.png" >
</details>
</br></br>


**6. Getting the total count of the items in the data set (SELECT COUNT(*) FROM DB.Table)**

```http
http://vhcalnplci.dummy.nodomain:8000/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/ProductSet/$count
```

<details>
<summary> case 6. image sample of xml </summary>
</br>
<img src="./files/ui5e27-14.png" >
</details>
</br></br>

**7. Reading a record based on a key (SELECT SINGLE * FROM DB-Table WHERE Key-Field EQ 'key-Value')**

```http
// XML - Default
http://vhcalnplci.dummy.nodomain:8000/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/ProductSet('HT-2025')


// Requesting - JSON
http://vhcalnplci.dummy.nodomain:8000/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/ProductSet('HT-2025')?$format=json
```

<details>
<summary> case 7. image sample of xml </summary>
</br>
<img src="./files/ui5e27-15.png" >
<img src="./files/ui5e27-15a.png" >
</details>
</br></br>


**8. Navigating to the supplier data from the last tasks record**

<details>
<summary> case 8. image sample of xml </summary>
</br>
<img src="./files/ui5e27-16.png" >
<img src="./files/ui5e27-16a.png" >
</details>
</br></br>

**9. $expand operation (Select * from db.table.1 inner join db.table.2 on join-condition)**

```http
http://vhcalnplci.dummy.nodomain:8000/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/ProductSet('HT-2025')?$format=json&$expand=ToSupplier
```

<details>
<summary> case 9. image sample of xml </summary>
</br>
<img src="./files/ui5e27-17.png" >
<img src="./files/ui5e27-17a.png" >
</details>
</br></br>

**ABAP Select statements equivalent of above functionalities**

```abap

*&---------------------------------------------------------------------*
*& Report ZTEST
*&---------------------------------------------------------------------*
*&
*&---------------------------------------------------------------------*
REPORT ztest.

* Type 1 Select All data
SELECT * FROM snwd_pd INTO TABLE @DATA(lt_tab_all).

* Type 2 Select top 10 records / Type 3 skip logic cant be done in select it requires coding
SELECT * UP TO 10 ROWS FROM snwd_pd INTO TABLE @DATA(lt_tab_1).

* Type 4 - Select record with few Columns fields
SELECT product_id, category, price FROM snwd_pd INTO TABLE @DATA(lt_tab_2).

* Type 5 - Select records with WHERE condition (Non-KEY)
SELECT product_id, category, price FROM snwd_pd INTO TABLE @DATA(lt_tab_3)
  WHERE category EQ 'Notebooks'.

* Type 6 - Select the Total count of records in DB table
SELECT COUNT(*) FROM snwd_pd INTO @DATA(lv_count).

* Type 7 - Select a record based on key value WHERE condition
SELECT SINGLE * FROM snwd_pd INTO @DATA(ls_record)
  WHERE  product_id EQ 'HT-2025'.

*Type 8 - is association of record - JOIN on demand only possible in ABAP CDS view*


* Type 9 - Select records with join conditon
* - Single record based on Condition
SELECT * FROM snwd_pd AS a
  INNER JOIN snwd_bpa AS b
  ON a~supplier_guid = b~node_key
INTO TABLE @DATA(lt_tab_4)
WHERE b~bp_id EQ '0100000049'.

* - ALL records
SELECT * FROM snwd_pd AS a
  INNER JOIN snwd_bpa AS b
  ON a~supplier_guid = b~node_key
INTO TABLE @DATA(lt_tab_5).

BREAK-POINT.

```

</br></br>

OData Service details table : /IWBEP/I_SBD_GA


</br></br>
</br></br>
</br></br>

## End of Exercise 27 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_28"> Exercise 28-Create A Gateway Project</a>
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
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_27"> Exercise 27-Odata GET</a> -->
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