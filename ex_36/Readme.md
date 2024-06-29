## Exercise 36 - WebIde and Git integration

</br>

**SAP Webide is not preferred for UI5 developments in 2024 any more but it has good physical layout editor for learning purpose it can be used or if you want to develop Fiori app without online support and without code completion and outdated Fiori version can choose this**


SAP WEBIDE can be downloaded from this page : https://tools.hana.ondemand.com/#sapui5


<img src="./files/ui5e36-1.png"></br></br>


</br></br>

## Git Hub Integration from BAS

</br>

**Why there is a need for GitHub** : 

*when a developer wants to share the code with another developer working in another editor they may need to copy it and paste it and share it via text file this may looks like a simple activity but when a project involves so much views, local models and controller file and backup files and other essential config files it gets huge and there is a possibility of human error in putting the code in files this laborious activity can be simplified* 

*There is an option of archiving the project and sharing it but what if there are tons of projects to archive many files manually have to select it and archive it and download it still so much activity still it is tedious*

*Apart from code sharing let say there are many developers working in a project and one of the developers made a logic changes and removed a block of code and next day it is reviewed by superiors amd found that this change is not perfect and asking to revert the code changes now there is no way of tracking what piece of code is removed and no way to revert it back to original previous version* 

*all the above mentioned problems can be resolved using* **Github** *it is a repository management system it maintains versioning and changes tracking*

</br>

<details>
<summary> <b> Implementing Git hub integration step by step </b> </summary>
</br>
</br>


<img src="./files/ui5e36-2.png"></br></br>

*Initiate git processing for the project files*

Command : 
</br>

```bat
git init
```

</br>


<img src="./files/ui5e36-3.png"></br></br>
<img src="./files/ui5e36-4.png"></br></br>
<img src="./files/ui5e36-5.png"></br></br>
<img src="./files/ui5e36-6.png"></br></br>
<img src="./files/ui5e36-7.png"></br></br>
<img src="./files/ui5e36-8.png"></br></br>
<img src="./files/ui5e36-9.png"></br></br>
<img src="./files/ui5e36-10.png"></br></br>
<img src="./files/ui5e36-11.png"></br></br>
<img src="./files/ui5e36-12.png"></br></br>
<img src="./files/ui5e36-13.png"></br></br>
<img src="./files/ui5e36-14.png"></br></br>
<img src="./files/ui5e36-15.png"></br></br>
<img src="./files/ui5e36-16.png"></br></br>
<img src="./files/ui5e36-17.png"></br></br>
<img src="./files/ui5e36-18.png"></br></br>
<img src="./files/ui5e36-19.png"></br></br>
<img src="./files/ui5e36-20.png"></br></br>
<img src="./files/ui5e36-21.png"></br></br>
<img src="./files/ui5e36-22.png"></br></br>
<img src="./files/ui5e36-23.png"></br></br>
<img src="./files/ui5e36-24.png"></br></br>
<img src="./files/ui5e36-25.png"></br></br>
<img src="./files/ui5e36-26.png"></br></br>
<img src="./files/ui5e36-27.png"></br></br>
<img src="./files/ui5e36-28.png"></br></br>
<img src="./files/ui5e36-29.png"></br></br>
<img src="./files/ui5e36-30.png"></br></br>
<img src="./files/ui5e36-31.png"></br></br>
<img src="./files/ui5e36-32.png"></br></br>
<img src="./files/ui5e36-33.png"></br></br>
<img src="./files/ui5e36-34.png"></br></br>
<img src="./files/ui5e36-35.png"></br></br>
<img src="./files/ui5e36-36.png"></br></br>
<img src="./files/ui5e36-37.png"></br></br>
<img src="./files/ui5e36-38.png"></br></br>
<img src="./files/ui5e36-39.png"></br></br>
<img src="./files/ui5e36-40.png"></br></br>
<img src="./files/ui5e36-41.png"></br></br>
<img src="./files/ui5e36-42.png"></br></br>
<img src="./files/ui5e36-43.png"></br></br>
<img src="./files/ui5e36-44.png"></br></br>
<img src="./files/ui5e36-45.png"></br></br>
<img src="./files/ui5e36-46.png"></br></br>
<img src="./files/ui5e36-47.png"></br></br>
<img src="./files/ui5e36-48.png"></br></br>
<img src="./files/ui5e36-49.png"></br></br>
<img src="./files/ui5e36-50.png"></br></br>
<img src="./files/ui5e36-51.png"></br></br>
<img src="./files/ui5e36-52.png"></br></br>
<img src="./files/ui5e36-53.png"></br></br>
<img src="./files/ui5e36-54.png"></br></br>
<img src="./files/ui5e36-55.png"></br></br>
<img src="./files/ui5e36-56.png"></br></br>
<img src="./files/ui5e36-57.png"></br></br>
<img src="./files/ui5e36-58.png"></br></br>
<img src="./files/ui5e36-59.png"></br></br>
<img src="./files/ui5e36-60.png"></br></br>
<img src="./files/ui5e36-61.png"></br></br>
<img src="./files/ui5e36-62.png"></br></br>
<img src="./files/ui5e36-63.png"></br></br>
<img src="./files/ui5e36-64.png"></br></br>
<img src="./files/ui5e36-65.png"></br></br>
<img src="./files/ui5e36-66.png"></br></br>
<img src="./files/ui5e36-67.png"></br></br>
<img src="./files/ui5e36-68.png"></br></br>
<img src="./files/ui5e36-69.png"></br></br>
<img src="./files/ui5e36-70.png"></br></br>
<img src="./files/ui5e36-71.png"></br></br>
<img src="./files/ui5e36-72.png"></br></br>
<img src="./files/ui5e36-73.png"></br></br>
<img src="./files/ui5e36-74.png"></br></br>
<img src="./files/ui5e36-75.png"></br></br>
<img src="./files/ui5e36-76.png"></br></br>
<img src="./files/ui5e36-77.png"></br></br>
<img src="./files/ui5e36-78.png"></br></br>
<img src="./files/ui5e36-79.png"></br></br>
<img src="./files/ui5e36-80.png"></br></br>
<img src="./files/ui5e36-81.png"></br></br>
<img src="./files/ui5e36-82.png"></br></br>
<img src="./files/ui5e36-83.png"></br></br>
<img src="./files/ui5e36-84.png"></br></br>
<img src="./files/ui5e36-85.png"></br></br>
<img src="./files/ui5e36-86.png"></br></br>
<img src="./files/ui5e36-87.png"></br></br>
<img src="./files/ui5e36-88.png"></br></br>
<img src="./files/ui5e36-89.png"></br></br>
<img src="./files/ui5e36-90.png"></br></br>
<img src="./files/ui5e36-91.png"></br></br>
<img src="./files/ui5e36-92.png"></br></br>
<img src="./files/ui5e36-93.png"></br></br>
<img src="./files/ui5e36-94.png"></br></br>
<img src="./files/ui5e36-95.png"></br></br>
<img src="./files/ui5e36-96.png"></br></br>
<img src="./files/ui5e36-97.png"></br></br>
<img src="./files/ui5e36-98.png"></br></br>
<img src="./files/ui5e36-99.png"></br></br>
<img src="./files/ui5e36-100.png"></br></br>



</br>
</br>
</details>


</br>
</br></br>





## End of Exercise 36 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_37"> Exercise 37-Deploy app to launchpad </a>
</br>
<p align="center"> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main"> Main page </a> </p>

</br></br>

**All Previous sessions**
</br></br>

<!-- - [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_37"> Exercise 37-Deploy app to launchpad</a> -->
<!-- - [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_36"> Exercise 36-WebIde and Git integration</a> -->
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