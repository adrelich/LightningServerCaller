({
    method : function(component, event, helper) {
        component.find('componentUtilsMethod').callToServer(component, 'method from controller', {}, function(response) {
            // success function
        }, function() {
            // error function optional
        });
    }
})