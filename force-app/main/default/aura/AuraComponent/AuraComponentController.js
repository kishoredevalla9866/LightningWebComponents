({
    handlemessage : function(component, event) {
        let msg = event.getParam('msg');
        component.set("v.message", msg)

    }
})
