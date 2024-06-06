## Show orders title on the page 

**Type 1**

*master.controller.js*

```js
// initialize the voew model

    onInit : function () {

        var oList = this.byId("list"),
        oViewModel = this._createViewModel();

        // Set model name  for model variable
        this.setModel(oViewModel, "masterView");

        // Option one - Show total on TOP         
       /////////////////////////////////////////////////////////////////////////
        this.getView().byId("list").attachUpdateFinished(null, function(oEvent) {
            var iCount = oEvent.getParameter("actual");
            this.getModel("masterView").setProperty("/titleCount", iCount);
            }, this);	
        /////////////////////////////////////////////////////////////////////////

    },

    _createViewModel : function() {
        return new JSONModel({
            isFilterBarVisible: false,
            filterBarLabel: "",
            delay: 0,
            titleCount: 0,
            noDataText: this.getResourceBundle().getText("masterListNoDataText")
        });
    }

```

<br><br><br>

**Type 2**

*master.controller.js*

```js

    onInit : function () {

        var oList = this.byId("list"),
        oViewModel = this._createViewModel();

        this._oList = oList;
        this.setModel(oViewModel, "masterView");

    },

    _createViewModel : function() {
        return new JSONModel({
            isFilterBarVisible: false,
            filterBarLabel: "",
            delay: 0,
            titleCount: 0,
            noDataText: this.getResourceBundle().getText("masterListNoDataText")
        });
    }

    // Option two - Show total item count on TOP
    /////////////////////////////////////////////////////////////////////////
    onUpdateFinished : function (oEvent) {
        // update the master list object counter after new data is loaded
        this._updateListItemCount(oEvent.getParameter("total"));
    },

    _updateListItemCount : function (iTotalItems) {
        // //only update the counter if the length is final
        if (this._oList.getBinding("items").isLengthFinal()) {
            this.getModel("masterView").setProperty("/titleCount", iTotalItems);
        }
    },
    /////////////////////////////////////////////////////////////////////////

```
<br>

*master.view.xml*

```xml

        <List id="list"
              width="auto"
              class="sapFDynamicPageAlignContent"
              items="{/orderTab}"
              selectionChange="onSelectionChange"
              updateFinished="onUpdateFinished" >


<!-- Filter bar and search bar-->

            <!-- <headerToolbar>
                <OverflowToolbar>
                    <SearchField
                        id="searchField"
                        showRefreshButton="true"
                        tooltip="{i18n>masterSearchTooltip}"
                        width="100%"
                        search=".onSearch">
                        <layoutData>
                            <OverflowToolbarLayoutData
                                minWidth="150px"
                                maxWidth="240px"
                                shrinkable="true"
                                priority="NeverOverflow"/>
                        </layoutData>
                    </SearchField>
                    <ToolbarSpacer/>
                    <Button
                        id="filterButton"
                        press=".onOpenViewSettings"
                        icon="sap-icon://filter"
                        type="Transparent"/>
                    <Button
                        id="groupButton"
                        press=".onOpenViewSettings"
                        icon="sap-icon://group-2"
                        type="Transparent"/>
                </OverflowToolbar>
            </headerToolbar> -->


            <items>
            <ObjectListItem title="{
                    parts: [
                            {path : 'i18n>commonItemTitle2'},
                            {path : 'OrderID'}]
            }"
            number="{
                        path: 'OrderDate',							
                        formatter:'.formatter.date_epoch_utc'
                    }"

            press="onSelectionChange" >

                <firstStatus>
                        <ObjectStatus
                            state="{
                                parts: [
                                    {path: 'RequiredDate'},
                                    {path: 'ShippedDate'},
                                    {path: 'OrderID'}
                                ],
                                formatter:'.formatter.deliveryState'
                            }"
                            text="{
                                parts: [
                                    {path: 'RequiredDate'},
                                    {path: 'ShippedDate'},
                                    {path: 'OrderID'}
                                ],
                                formatter:'.formatter.deliveryText'
                            }"/>

            </firstStatus>
                    <attributes>
                        <ObjectAttribute id="companyName" text="{CustomerName}" />
                        <ObjectAttribute title="{i18n>commonItemShipped}"
                            text="{
                                    path: 'ShippedDate',							
                                    formatter:'.formatter.date_epoch_utc'
                                }" />
                    </attributes>
            </ObjectListItem>                   
            </items>
        </List>

```