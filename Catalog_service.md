https://www.youtube.com/watch?v=WlM312ftDxQ


/UI2/FLPD_CONF  - SAP Fiori Launchpad Designer in cross-client configuration mode. 
Used primarily by administrators, it manages catalog, tile, and target mapping 
configurations that apply across all clients, generally recording changes 
in workbench requests. It is the alternative to

</br></br>

/UI2/FLPD_CUST - (Client-specific customization)


T-CODES : 
-	/UI2/FLPD_CUST
-	/UI2/FLPCM_CUST
-	/UI2/FLPD_CONF
-	/UI2/FLPAM

</br>

Standard Catalog items :  check these in FLPD_CUST  /  FLPD_CONF if it is outdated – click outdated word and library will be refreshed 
-	SAP_TC_PRC_COMMON
-	SAP_PRC_BC_SSPPR_EMPLOYEE

</br>

Now the apps from the above catalog library can be added to our custom catalog in T-code FLPCM_CUST apps will looks like (Example app nameing : F1640, F0349A, F400A, F05434)
[Fiori app library](https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/home) 
Custom Catalog item :  ZBF_STP_PR_U_RELPURREQ  - useful in 
-	/UI2/FLPD_CUST - Fiori environment - fornt end launchapd deisgner 
-	/UI2/FLPCM_CUST - Catalog config backend SAP GUI 

</br>

Description of Catalog item : 
- STP-PR-Release Purchase Requisition (helps to locate catalog in fiori launchpad)

---

Before config change transport movement :  this should be done in Q
Fiori app Library in Quality and Staging environment should be updated and apps should be present in standard catalog then referenced custom catalog apps will be appropriately synchronized and target mapping will reflect accordingly and it will work 

But if changes from Dev moves to quality and standard catalog app library is not updated then it is like calling something which doesn’t exist in system – results in blank page or item doesn’t exist error message 

Development environment : Config change activity 
•	/UI2/FLPD_CUST   - update the library if it is labeled OUTDATED (System specific activity not transportable)
•	/UI2/FLPCM_CUST – assign the necessary library items to your custom catalog tile + Target Mapping – (TRANSPORT CAPTURE)


