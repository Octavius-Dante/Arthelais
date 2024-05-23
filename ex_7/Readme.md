## Exercise 7 - SAP Ui5 Framework

</br></br>

SAP Ui5 is a framework developed by SAP based on Open Standards to build responsive web apps.
</br> </br> 

1. Framework is a Collection of **Libraries**
2. Library is a Collection of **Classes**
3. Class is a Collection of **Functions**
3. Function is a Collection of **Attributes, Events, Aggregations, Methods**

</br> </br> 

<img src="./Ui5-Framework.png" >

</br> </br> 

Sap provides a SDK (software development kit) for developer to understand, Learn, experience, Code (snippet) of SAP ui5
</br> as well as documentation of all the Ui elements in Sap Ui5 in the following link 

</br> https://sapui5.hana.ondemand.com/


Access this page and check all the pages (api reference - detailed document on the code library, documentation, Samples and Fiori elements page)

Fiori elements : 

</br> https://sapui5.hana.ondemand.com/test-resources/sap/fe/core/fpmExplorer/index.html#/overview/introduction

</br> </br> 

## Building a Fiori Ui applications

1. Go to BAs / VSCode
2. Open terminal and create a Folder for the project (ui5_basic)
3. Initiate a bootstrap by creating a file (launch file) index.html
4. Then add the basic HTML tags (HTML, HEAD, BODY, SCRIPT)
5. Then link the script source both links works 
</br> (https://sapui5.hana.ondemand.com/resources/sap-ui-core.js) 
</br> or (https://ui5.sap.com/resources/sap-ui-core.js) 
</br>

```html

<script src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js">
    
<script src="https://ui5.sap.com/resources/sap-ui-core.js">

```
</br>

6. Define a name space for the project directory to make it unique across the world also serves as ALIAS NAME for the project directory 
7. Create a folder (webapp) and move the index.html file inside the directory 
</br>  Earlier : (projects\ui5_basic\index.html) 
</br>  Now it should be : (projects\ui5_basic\webapp\index.html) this is how a working project structure is followed 

</br> 



</br> </br> 

**Fiori Bootstrap code with theme details HTML**


```html

<html>

<head>
    <!-- <script src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"></script> -->

    <script
    id="sap-ui-bootstrap"
    type="text/javascript"
    src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"
    data-sap-ui-libs="sap.m"
    data-sap-ui-theme="sap_horizon_dark"

    data-sap-ui-resourceroots='{
        "spiderman" : "./"
    }'

    ></script>

<!-- 

// Current working directory definition - notifying SAP
    
    data-sap-ui-resourceroots='{
        "CompanyName.ProjectName.TeamName" : "./"
    }'

    namespace = CompanyName.ProjectName.TeamName
-->


<!--  Lit of SAP Thenmes for Fiori page  - link : 

    Theme Name	        Technical Name
    ------------------------------------    
    Morning Horizon         sap_horizon    
    Evening Horizon         sap_horizon_dark
    High Contrast Black     sap_horizon_hcb
    High Contrast White     sap_horizon_hcw    
    Quartz Light            sap_fiori_3    
    Quartz Dark             sap_fiori_3_dark    
    High Contrast Black     sap_fiori_3_hcb    
    High Contrast White     sap_fiori_3_hcw    
    Belize                  sap_belize    
    Belize Deep             sap_belize_plus    
    High Contrast Black     sap_belize_hcb    
    High Contrast White     sap_belize_hcw    
    Blue Crystal            sap_bluecrystal    
    High Contrast Black     sap_hcb
-->

  <style></style>
</head>

<body class="sapUiBody">
    Welcome!
</body>   

</html>

```





























</br>
</br></br>

## End of Exercise 7 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_4"> Exercise 8-MVC design pattern </a>
</br>
<p align="center"> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main"> Main page </a> </p>


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