// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div48")
                .setLeft("8.380952380952381em")
                .setTop("2.2857142857142856em")
                .setWidth("38.17142857142857em")
                .setHeight("16.076190476190476em")
            );
            
            host.xui_ui_div48.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input31")
                .setLeft("0.7619047619047619em")
                .setTop("2.2857142857142856em")
                .setWidth("32.457142857142856em")
                .setLabelSize("8em")
                .setLabelCaption("Username")
            );
            
            host.xui_ui_div48.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input32")
                .setLeft("0.7619047619047619em")
                .setTop("4.571428571428571em")
                .setWidth("32.457142857142856em")
                .setLabelSize("8em")
                .setLabelCaption("Password")
            );
            
            host.xui_ui_div48.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button14")
                .setLeft("19.80952380952381em")
                .setTop("6.857142857142857em")
                .setWidth("12.876190476190477em")
                .setCaption("Login")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "Silahkan Login terlebih dahulu",
                            "Pesan",
                            200,
                            5000
                        ],
                        "method" : "message",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ToolBar")
                .setHost(host,"xui_ui_toolbar11")
                .setItems([
                    {
                        "id" : "grp1",
                        "sub" : [
                            {
                                "id" : "a1",
                                "caption" : "button"
                            },
                            {
                                "id" : "a2",
                                "type" : "split"
                            },
                            {
                                "id" : "a3",
                                "caption" : "drop button",
                                "type" : "dropButton"
                            },
                            {
                                "id" : "a4",
                                "caption" : "status button",
                                "type" : "statusButton"
                            }
                        ],
                        "caption" : "grp1"
                    },
                    {
                        "id" : "grp2",
                        "sub" : [
                            {
                                "id" : "b1",
                                "imageClass" : "xui-icon-xui",
                                "caption" : ""
                            },
                            {
                                "id" : "b2",
                                "caption" : "image button",
                                "label" : "label:",
                                "imageClass" : "xui-icon-xui"
                            }
                        ],
                        "caption" : "grp2"
                    }
                ])
                .setTop("22.095238095238095em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});