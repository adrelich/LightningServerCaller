({
    callBackend : function(component, event, helper) {
        let params = event.getParams().arguments;
        let action = params.callerComponent.get(params.actionMethod);
        action.setParams(params.actionParams);
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                params.actionCallback(response);
            } else if (state === "ERROR") {
               console.log(response.getError());
               if(params.actionErrorCallback != null && params.actionErrorCallback != undefined) {
                   params.actionErrorCallback();
               }
            } else {
               console.log('Unknown error');
               if(params.actionErrorCallback != null && params.actionErrorCallback != undefined) {
                   params.actionErrorCallback();
               }
            }
        });
        $A.enqueueAction(action);
    }
})