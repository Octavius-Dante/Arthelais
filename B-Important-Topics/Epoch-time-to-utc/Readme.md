## Converting Epoch date value to UTC regular date value 

</br> 

</br> 

*SAP sample  browse order application date fix -- use it as formatter*

```js

date_epoch_utc: function(InputDate){
    if (InputDate === null) {
        return "None";
    }else{
        // epoch date time logic. SAP Demo model
        /////////////////////////////////////////////////////////////////
        // Input date : /Date(1478991600000)/ ; Epoch date value
        // Output date : 11/20/2016 (MM/DD/YYYY) ; UTC date time
        var strDate = InputDate;
        console.log(InputDate);
        // string operation to remove '/Date(' && ')/' from the value 				

        // Removal of Substring in date text '/Date('
        var strdate1 = strDate.replace('/Date(',''); 
        console.log(strdate1);

        // Removal of Substring in date text ')/'
        var strdate2 = strdate1.replace(')/',''); 
        console.log(strdate2);
        
        // conversion of string to number casting
        var epochTime = Number(strdate2);
        
        // Conversion of EPOCH time to regualr date
        // this will return -->> 'Sun Nov 20 2016 15:00:00 GMT-0800 (Pacific Standard Time)'				
        var test_Date = new Date(epochTime);
        console.log(test_Date);				

        //This will return -->> 2023-10-11T20:05:00.000Z
        // const t3_date = test_Date.toJSON(); 
        
        // Conversion of regualr lengthy date to short date
        //This will return -->> 10/24/2023
        var Outputdate = test_Date.toLocaleDateString();
        return Outputdate;				
    }

```


</br> 

</br> 