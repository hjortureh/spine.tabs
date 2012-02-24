/**
* 
*  Tab Controller for Spine.js
* 
*  @author: Hjörtur Elvar Hilmarsson
*  
**/
Spine.Controller.Tabs = Spine.Controller.sub({

    // Register events
    events:{
        "click .tabs a": "tabLinkClick",
    },

    // Register elements
    elements:{
        ".tabs a":      "tabLinks",
        "[data-tab]":   "tabs"
    },

    /**
     * Initalizes controller
     **/
    init:function () {

        // routes for tab 
        this.routes({ "/:tab": this.tabChange });
    
    },

    /**
     * Handles the route change for tab events
     **/
    tabChange: function( params ) {
    
        // find selected tab
        var selectedTab = $("[data-tab=" + params.tab + "]", this.el ); 

        // select first if selected not found
        if( !selectedTab.length  ) {
            selectedTab = this.tabs.first();
        }

        // hide all tabs
        this.tabs.hide();

        // show selected tab
        selectedTab.fadeIn();

    },


    /*
     -- UI Events --
     */
    tabLinkClick: function( e ) {
        e.preventDefault();

        // navigate on link click
        var link = $( e.currentTarget );
        this.navigate( link.attr("href") );
    }

});