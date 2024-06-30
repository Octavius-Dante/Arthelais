## Exercise 37 - Deploy app to launchpad

</br>

**Steps for deploying the Fiori App to On-Premise system**

</br>

*Packaging and deployment with Launchpad*

</br>

**TCODE :**

*Fiori Launchpad designer - /n/ui2/flpd_conf*

*Fiori Launchpad - /n/ui2/flp*

</br></br>
<img src="./files/37-Fiori-App-deployment.png">
</br></br>


**Step By Step process - Fiori App deployment**

</br>

*1. Fiori App packaging is done via BAS*

*2. Fiori App deployment is done via (source) BAS using packaged build pushed to Html5 repository in Launchpad (destination on premise system)*

*3. Final deployment to Fiori tile layout screen done by launchpad using user role and authorization configuration - also requires user role in PFCG inside ERP*

</br>

**Prerequisite before starting the ui5 packaging and deployment activity**

<details>
<summary> <b> Essential prerequisite</b> </summary>
</br>

*Command for installing ui5 CLI -command line interface*

```bat
npm install --global @ui5/cli
```

<img src="./files/ui5e37-1.png"></br></br>

</details>


</br></br></br>

<details>
<summary> <b> 1. Fiori App Packaging </b> </summary>
</br>

*First Command for packaging*

Command : 
</br>

```bat

```

</br>


<img src="./files/ui5e37-2.png"></br></br>
<img src="./files/ui5e37-3.png"></br></br>
<img src="./files/ui5e37-4.png"></br></br>
<img src="./files/ui5e37-5.png"></br></br>
<img src="./files/ui5e37-6.png"></br></br>
<img src="./files/ui5e37-7.png"></br></br>
<img src="./files/ui5e37-8.png"></br></br>
<img src="./files/ui5e37-9.png"></br></br>
<img src="./files/ui5e37-10.png"></br></br>
<img src="./files/ui5e37-11.png"></br></br>
<img src="./files/ui5e37-12.png"></br></br>
<img src="./files/ui5e37-13.png"></br></br>
<img src="./files/ui5e37-14.png"></br></br>
<img src="./files/ui5e37-15.png"></br></br>
<img src="./files/ui5e37-16.png"></br></br>
<img src="./files/ui5e37-17.png"></br></br>
<img src="./files/ui5e37-18.png"></br></br>
<img src="./files/ui5e37-19.png"></br></br>
<img src="./files/ui5e37-20.png"></br></br>
<img src="./files/ui5e37-21.png"></br></br>
<img src="./files/ui5e37-22.png"></br></br>
<img src="./files/ui5e37-23.png"></br></br>
<img src="./files/ui5e37-24.png"></br></br>
<img src="./files/ui5e37-25.png"></br></br>
<img src="./files/ui5e37-26.png"></br></br>
<img src="./files/ui5e37-27.png"></br></br>
<img src="./files/ui5e37-28.png"></br></br>
<img src="./files/ui5e37-29.png"></br></br>
<img src="./files/ui5e37-30.png"></br></br>
<img src="./files/ui5e37-31.png"></br></br>
<img src="./files/ui5e37-32.png"></br></br>
<img src="./files/ui5e37-33.png"></br></br>
<img src="./files/ui5e37-34.png"></br></br>
<img src="./files/ui5e37-35.png"></br></br>
<img src="./files/ui5e37-36.png"></br></br>
<img src="./files/ui5e37-37.png"></br></br>
<img src="./files/ui5e37-38.png"></br></br>
<img src="./files/ui5e37-39.png"></br></br>
<img src="./files/ui5e37-40.png"></br></br>
<img src="./files/ui5e37-41.png"></br></br>
<img src="./files/ui5e37-42.png"></br></br>
<img src="./files/ui5e37-43.png"></br></br>
<img src="./files/ui5e37-44.png"></br></br>
<img src="./files/ui5e37-45.png"></br></br>
<img src="./files/ui5e37-46.png"></br></br>
<img src="./files/ui5e37-47.png"></br></br>
<img src="./files/ui5e37-48.png"></br></br>
<img src="./files/ui5e37-49.png"></br></br>
<img src="./files/ui5e37-50.png"></br></br>
<img src="./files/ui5e37-51.png"></br></br>
<img src="./files/ui5e37-52.png"></br></br>
<img src="./files/ui5e37-53.png"></br></br>
<img src="./files/ui5e37-54.png"></br></br>
<img src="./files/ui5e37-55.png"></br></br>
<img src="./files/ui5e37-56.png"></br></br>
<img src="./files/ui5e37-57.png"></br></br>
<img src="./files/ui5e37-58.png"></br></br>
<img src="./files/ui5e37-59.png"></br></br>
<img src="./files/ui5e37-60.png"></br></br>
<img src="./files/ui5e37-61.png"></br></br>
<img src="./files/ui5e37-62.png"></br></br>
<img src="./files/ui5e37-63.png"></br></br>
<img src="./files/ui5e37-64.png"></br></br>
<img src="./files/ui5e37-65.png"></br></br>
<img src="./files/ui5e37-66.png"></br></br>
<img src="./files/ui5e37-67.png"></br></br>
<img src="./files/ui5e37-68.png"></br></br>
<img src="./files/ui5e37-69.png"></br></br>
<img src="./files/ui5e37-70.png"></br></br>
<img src="./files/ui5e37-71.png"></br></br>
<img src="./files/ui5e37-72.png"></br></br>
<img src="./files/ui5e37-73.png"></br></br>
<img src="./files/ui5e37-74.png"></br></br>
<img src="./files/ui5e37-75.png"></br></br>
<img src="./files/ui5e37-76.png"></br></br>
<img src="./files/ui5e37-77.png"></br></br>
<img src="./files/ui5e37-78.png"></br></br>
<img src="./files/ui5e37-79.png"></br></br>
<img src="./files/ui5e37-80.png"></br></br>
<img src="./files/ui5e37-81.png"></br></br>
<img src="./files/ui5e37-82.png"></br></br>
<img src="./files/ui5e37-83.png"></br></br>
<img src="./files/ui5e37-84.png"></br></br>
<img src="./files/ui5e37-85.png"></br></br>
<img src="./files/ui5e37-86.png"></br></br>
<img src="./files/ui5e37-87.png"></br></br>
<img src="./files/ui5e37-88.png"></br></br>
<img src="./files/ui5e37-89.png"></br></br>
<img src="./files/ui5e37-90.png"></br></br>
<img src="./files/ui5e37-91.png"></br></br>
<img src="./files/ui5e37-92.png"></br></br>
<img src="./files/ui5e37-93.png"></br></br>
<img src="./files/ui5e37-94.png"></br></br>
<img src="./files/ui5e37-95.png"></br></br>
<img src="./files/ui5e37-96.png"></br></br>
<img src="./files/ui5e37-97.png"></br></br>
<img src="./files/ui5e37-98.png"></br></br>
<img src="./files/ui5e37-99.png"></br></br>
<img src="./files/ui5e37-100.png"></br></br>
<img src="./files/ui5e37-101.png"></br></br>
<img src="./files/ui5e37-102.png"></br></br>
<img src="./files/ui5e37-103.png"></br></br>
<img src="./files/ui5e37-104.png"></br></br>
<img src="./files/ui5e37-105.png"></br></br>
<img src="./files/ui5e37-106.png"></br></br>
<img src="./files/ui5e37-107.png"></br></br>
<img src="./files/ui5e37-108.png"></br></br>
<img src="./files/ui5e37-109.png"></br></br>
<img src="./files/ui5e37-110.png"></br></br>
<img src="./files/ui5e37-111.png"></br></br>
<img src="./files/ui5e37-112.png"></br></br>
<img src="./files/ui5e37-113.png"></br></br>
<img src="./files/ui5e37-114.png"></br></br>
<img src="./files/ui5e37-115.png"></br></br>
<img src="./files/ui5e37-116.png"></br></br>
<img src="./files/ui5e37-117.png"></br></br>
<img src="./files/ui5e37-118.png"></br></br>
<img src="./files/ui5e37-119.png"></br></br>
<img src="./files/ui5e37-120.png"></br></br>
<img src="./files/ui5e37-121.png"></br></br>
<img src="./files/ui5e37-122.png"></br></br>
<img src="./files/ui5e37-123.png"></br></br>
<img src="./files/ui5e37-124.png"></br></br>
<img src="./files/ui5e37-125.png"></br></br>
<img src="./files/ui5e37-126.png"></br></br>
<img src="./files/ui5e37-127.png"></br></br>
<img src="./files/ui5e37-128.png"></br></br>
<img src="./files/ui5e37-129.png"></br></br>
<img src="./files/ui5e37-130.png"></br></br>
<img src="./files/ui5e37-131.png"></br></br>
<img src="./files/ui5e37-132.png"></br></br>
<img src="./files/ui5e37-133.png"></br></br>
<img src="./files/ui5e37-134.png"></br></br>
<img src="./files/ui5e37-135.png"></br></br>
<img src="./files/ui5e37-136.png"></br></br>
<img src="./files/ui5e37-137.png"></br></br>
<img src="./files/ui5e37-138.png"></br></br>
<img src="./files/ui5e37-139.png"></br></br>
<img src="./files/ui5e37-140.png"></br></br>
<img src="./files/ui5e37-141.png"></br></br>
<img src="./files/ui5e37-142.png"></br></br>
<img src="./files/ui5e37-143.png"></br></br>
<img src="./files/ui5e37-144.png"></br></br>
<img src="./files/ui5e37-145.png"></br></br>
<img src="./files/ui5e37-146.png"></br></br>
<img src="./files/ui5e37-147.png"></br></br>
<img src="./files/ui5e37-148.png"></br></br>
<img src="./files/ui5e37-149.png"></br></br>
<img src="./files/ui5e37-150.png"></br></br>

</details>

<details>
<summary> <b> 2. Fiori App Deployment </b> </summary>
</br>
</br>
</br>
</details>

<details>
<summary> <b> 3. Fiori App Configuring </b> </summary>
</br>
</br>
</br>
</details>


</br>
</br></br>

## End of Exercise 37 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_38"> Exercise 38-Fiori Elements Basics </a>
</br>
<p align="center"> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main"> Main page </a> </p>


</br></br>

**All Previous sessions**
</br></br>

<!-- - [x] <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_37"> Exercise 37-Deploy app to launchpad</a> -->
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