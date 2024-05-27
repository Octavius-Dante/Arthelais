sap.ui.define(
    ['sap/ui/core/mvc/Controller'], 
    function(Controller){
        return Controller.extend("logger.controller.ex11",{

            onLoad: function(){
                this.getView().byId("idEmpId").setValue("609879");
                this.getView().byId("idEmpName").setValue("Agamemnon Carlisle");
                this.getView().byId("idSalary").setValue("400000"); 
                this.getView().byId("idCurrency").setValue("USD");
            },

            onClear: function(){
                var oCval = this.getView().byId("idOutput").getValue();

                // this.getView().byId("idEmpId").setValue(" ");
                // this.getView().byId("idEmpName").setValue(" ");
                // this.getView().byId("idSalary").setValue(" "); 
                // this.getView().byId("idCurrency").setValue(" ");
                // this.getView().byId("idOutput").setValue(" ");

                this.getView().byId("idEmpId").setValue(null);
                this.getView().byId("idEmpName").setValue(null);
                this.getView().byId("idSalary").setValue(null); 
                this.getView().byId("idCurrency").setValue(null);
                this.getView().byId("idOutput").setValue(null);                
                alert("Data Cleared");

// Variable Is Not Initial Check 
                if(typeof oCval === "string" && oCval.trim().length === 0) 
                {
                } else
                {
                    alert("Concat value : " + oCval + " cleared" );                 
                }                
                // myStr = null                              
            },

            onLoad2: function(){
                this.getView().byId("idEmpId2").setValue("609880");
                this.getView().byId("idEmpName2").setValue("Laurent Billiard");
            },

            onClear2: function(){
                this.getView().byId("idEmpId2").setValue(" ");
                this.getView().byId("idEmpName2").setValue(" ");                           
                alert("Data Cleared");
            },            

            onConcat: function(){
// CONCATENATION GETTING VALUE FROM INPUT FIELDS
                var oVal1 = this.getView().byId("idEmpId").getValue();           
                var oVal2 = this.getView().byId("idEmpName").getValue();                
                this.getView().byId("idOutput").setValue(oVal1 + " " + oVal2);                
            }

        });
});