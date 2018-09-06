import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        const Request={
            "DuplicateRequestStatus":"Request Initiated by user"
        }
        console.log("i am in digital sign=======>",Request)
        var _this=this;
        $.ajax({
            type: "POST",
            url: ' http://localhost:3007/DuplicateMarksheetRequestCount',
            data: JSON.stringify(Request),
            contentType: "application/json",
            dataType: "json",
            success: function(response) {
            console.log("Request of result in digitalsignature=====>>",response.result);
            _this.controllerFor('digitalsignature').set('RequestForDigital',response.result)
            // _this.controllerFor('History').set('Id',response.result[0].id);
    
            }
        })
       
     
    }
});
