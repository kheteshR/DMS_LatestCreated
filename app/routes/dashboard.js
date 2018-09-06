import Route from '@ember/routing/route';

export default Route.extend({
    
    model(){
    var walletname=this.controllerFor('Home_Page').set('walletname',walletname)
    console.log("walletname====>>dashboard",walletname)
    this.controllerFor('dashboard').set('walletname',walletname);
    var _this=this;
    var JsonData={

    }
    const Request={
        "DuplicateRequestStatus":"Request Initiated by user"
    }
    console.log("i am in digital sign=======>",Request)
    
    $.ajax({
        type: "POST",
        url: ' http://localhost:3007/DuplicateMarksheetRequestCount',
        data: JSON.stringify(Request),
        contentType: "application/json",
        dataType: "json",
        success: function(response) {
        console.log("Request of result=====>>",response);
        _this.controllerFor('dashboard').set('RequestForDigital',response.result.length)
        // _this.controllerFor('History').set('Id',response.result[0].id);

        }
    })
    $.ajax({
        type: "POST",
        url: 'http://localhost:3007/RetriveAllForm',
        data: JSON.stringify(JsonData),
        contentType: "application/json",
        dataType: "json",
        success: function(response) {
        console.log("Result===== dashboard=====>>dashboard",response.Result);
        _this.controllerFor('dashboard').set('data',response.Result);
        _this.controllerFor('dashboard').set('ArrayLength',response.Result.length);

        }
    })
    $.ajax({
        type: "POST",
        url: 'http://localhost:3007/AdminUpload',
        data: JSON.stringify(JsonData),
        contentType: "application/json",
        dataType: "json",
        success: function(response) {
        console.log("Result===== dashboard=====>>dashboard",response.Result.length);
        _this.controllerFor('dashboard').set('data',response.Result);
        _this.controllerFor('dashboard').set('UploadLength',response.Result.length);

        }
    })
    $.ajax({
        type: "POST",
        url: 'http://localhost:3007/AdminUploadSSC',
        data: JSON.stringify(JsonData),
        contentType: "application/json",
        dataType: "json",
        success: function(response) {
        console.log("Result===== dashboard=====>>SSC======",response.Result.length);
        _this.controllerFor('dashboard').set('SSCdataLength',response.Result.length);
       

        }
    })
       
    $.ajax({
        type: "POST",
        url: 'http://localhost:3007/AdminUploadHSC',
        data: JSON.stringify(JsonData),
        contentType: "application/json",
        dataType: "json",
        success: function(response) {
        console.log("Result===== dashboard=====>>HSC=========",response.Result.length);
        _this.controllerFor('dashboard').set('HSCdataLength',response.Result.length);
       

        }
    })
    }
});
