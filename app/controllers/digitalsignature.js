import Controller from '@ember/controller';

export default Controller.extend({
    showAlertForDuplicate:false,
actions:{
    Sign:function(){
        const Request=
            {
                "userId":"6342",
                "name":"Nikhil"
              }
        
        console.log("i am in digital sign=======>",Request)
        var _this=this;
        $.ajax({
            type: "POST",
            url: ' http://localhost:3007/SignDuplicateMarksheet',
            data: JSON.stringify(Request),
            contentType: "application/json",
            dataType: "json",
            success: function(response) {
            console.log("Request of result in digitalsignature=====>>",response.result);
            // _this.controllerFor('digitalsignature')set('RequestForDigital',response.result)
            _this.set('showAlertForDuplicate',true);
    
            }
        })

    }
}



});
