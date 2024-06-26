## Exercise 34 - GET and Connect


</br>

**Connecting our custom OData service to our FIORI app**

</br>

<details>
<summary> <b> Mapping OData model to app </b> </summary>
</br>

This is how you can check whether Fiori app is connecting to OData service

</br>
<img src="./files/ui5e34-1.png" >
</br></br>

We have been using a local JSON data model file to load data to the Fiori app now we will map Our OData service model to the app
</br> In our View1.xml we are going to make changes mapping Odata model ProductSet
</br></br>
<img src="./files/ui5e34-2.png"></br></br>

Before mapping other data objects 
</br></br>
<img src="./files/ui5e34-3.png"></br></br>

After mapping other data objects 
</br></br>
<img src="./files/ui5e34-4.png"></br></br>

Products displayed after mapping the product details
</br></br>
<img src="./files/ui5e34-5.png"></br></br>
</details>


<details>
<summary> <b> Adding attributes and fixing the product search</b> </summary>
</br>

Adding category attributes 
</br></br>
<img src="./files/ui5e34-6.png"></br></br>

Adding Search filter for product category
</br></br>
<img src="./files/ui5e34-7.png"></br></br>

Product category defiend in the view is displayed
</br></br>
<img src="./files/ui5e34-8.png"></br></br>

performing Search filter and testing 
<img src="./files/ui5e34-9.png"></br></br>

</details>

<details>
<summary> <b> Implementing pagination for loading products</b> </summary>
</br>

when opening the page all data is loaded so the page is taking time to load products so to boost performance we load data chunk by chunk for that we implement pagination

</br>
<img src="./files/ui5e34-10.png"></br></br>

Testing pagination in the app 
</br></br>
<img src="./files/ui5e34-11.png"></br></br>

Implementing on select - display view 2 with product details 
</br></br>
<img src="./files/ui5e34-12.png"></br></br>
<img src="./files/ui5e34-13.png"></br></br>
<img src="./files/ui5e34-14.png"></br></br>
<img src="./files/ui5e34-15.png"></br></br>
<img src="./files/ui5e34-16.png"></br></br>
</details>


<details>
<summary> <b> Implementing association Changes adding new fragment</b> </summary>
</br>

view changes 
</br></br>
<img src="./files/ui5e34-17.png"></br></br>
<img src="./files/ui5e34-18.png"></br></br>
</br></br>

Forcing the $expand operation in fiori when loading the product in view 2
</br></br>
<img src="./files/ui5e34-19a.png"></br></br>
<img src="./files/ui5e34-20.png"></br></br>
</details>

</br></br>


## New Screen design for POST action 

</br>

<details>
<summary> <b> New Screen layout for POST activity</b> </summary>
</br>

<img src="./files/ui5e34-21.png"></br></br>
<img src="./files/ui5e34-22.png"></br></br>
<img src="./files/ui5e34-23.png"></br></br>
<img src="./files/ui5e34-24.png"></br></br>
<img src="./files/ui5e34-25.png"></br></br>
<img src="./files/ui5e34-26.png"></br></br>
</details>

<details>
<summary> <b> Adding screen elements to new screen</b> </summary>
</br>

<img src="./files/ui5e34-27.png"></br></br>
<img src="./files/ui5e34-28.png"></br></br>
<img src="./files/ui5e34-29.png"></br></br>
<img src="./files/ui5e34-30.png"></br></br>
<img src="./files/ui5e34-31.png"></br></br>
<img src="./files/ui5e34-32.png"></br></br>
<img src="./files/ui5e34-33.png"></br></br>
<img src="./files/ui5e34-34.png"></br></br>
</details>

</br></br>



</br>
</br></br>

## End of Exercise 34 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_35"> Exercise 35-POST, GET and DELETE from Fiori </a>
</br>
<p align="center"> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main"> Main page </a> </p>


</br></br>

**All Previous sessions**
</br></br>

<!-- - [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_37"> Exercise 37-Deploy app to launchpad</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_36"> Exercise 36-WebIde and Git integration</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_35"> Exercise 35-POST, GET and DELETE from Fiori</a>
- [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_34"> Exercise 34-GET and Connect</a> -->
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