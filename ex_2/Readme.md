## Exercise 2 - HTML5 basic 2

In this session we discuss about request and responses from web pages to server and server to webpages

</br></br>

Requests which can be sent to server to perform an action or retrieve data **Request has header and body**
</br></br>

Response is a reply from server for a request from client it has header and body and it could be of any data type 
</br> **(html, xml, json, excel, pdf, word..etc)**

</br>

**Request types :**

1. GET - read data
2. POST - Create new data
3. PUT - Update
4. DELETE - Remove data

</br>

**What are the Ways to talk to server from client ?**

1. Form Submit **(simplest and easiest one)**
2. Using HTTPRequest object
3. Using AJAX Call
4. Some framework

</br>

<details>
<summary> Defining form with Submit action </summary>
</br>
</br>

```html

<html>
<head>
    <script>
    </script>
</head>
<body>
    <!-- Form with action definition-->
    <form method="get" action="https://www.gmail.com">

        <label>User Name</label>
        <input id="idUser" name="usr">

        <br><br>

        <label>Password</label>
        <input id="idPass" name="pass" type="password">

        <br><br>
        <!-- this SUBMIT button will take the values mentioend with type name for input fields-->
        <input type="submit"><br>
    </form>
</body>
</html>

```

</br></br>

testing it 

<img src="./files/ui5e_2-1.png" >
<img src="./files/ui5e_2-2.png" >
<img src="./files/ui5e_2-3.png" >

</br>
</br>
</details>

</br></br>
</br></br>
</br></br>

## End of Exercise 1 ---NEXT---> <a href="https://github.com/Octavius-Dante/Arthelais/tree/main/ex_3"> Exercise 3-CSS </a>
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