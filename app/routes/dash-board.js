import Route from '@ember/routing/route';

export default Route.extend({
    model(){
    var userId=this.controllerFor('Home_Page').get('userId');
    console.log("userId====>>dashboard",userId)
    this.controllerFor('DashBoard').set('userId',userId);
    var walletname=this.controllerFor('Home_Page').get('walletname',walletname)
    console.log("walletname====>>Dashboard",walletname)
    this.controllerFor('DashBoard').set('walletname',walletname);
    var _this=this;
    var JsonData={
        "userId":userId
    }
    var PostData={
        "userId":userId
     }
    $.ajax({
        type: "POST",
        url: 'http://localhost:3007/GetAllGeneratedRequest',
        data: JSON.stringify(JsonData),
        contentType: "application/json",
        dataType: "json",
        success: function(response) {
        console.log("fetch all request",response); 
        
        if(response.message.status==="no request yet generated"){
            console.log("length is zero======>>",response.message.status)
            var message=response.message.status;
            _this.controllerFor('DashBoard').set('message',message);
        }else{
        var TotalRequest=response.result;
        console.log("TotalRequest============>",TotalRequest);
        const TotalRequestLength=response.result.length;
        console.log("TotalRequestLength============>",TotalRequestLength);
        _this.controllerFor('DashBoard').set('TotalRequestLength',TotalRequestLength);
        _this.controllerFor('DashBoard').set('TotalRequest',TotalRequest);
        }
        }
    })
    $.ajax({
        type: "POST",
        url: 'http://localhost:3007/HallTicketForUser',
        data: JSON.stringify(JsonData),
        contentType: "application/json",
        dataType: "json",
        success: function(response) {
        console.log("Result===== dashboard=====>>",response.Result.SSCresult[0].status[0]);
        console.log("Result===== dashboard=====>>",response.Result.SSCresult[0].status[1]);
        console.log("Result===== dashboard=====>>",response.Result.SSCresult[0].status[2]);
        _this.controllerFor('DashBoard').set('data',response.Result.SSCresult);
        _this.controllerFor('DashBoard').set('ProcessedStatus',response.Result.SSCresult[0].status[0]);
        _this.controllerFor('DashBoard').set('InstituteStatus',response.Result.SSCresult[0].status[1]);
        _this.controllerFor('DashBoard').set('DivisionalStatus',response.Result.SSCresult[0].status[2]);
        _this.controllerFor('DashBoard').set('DataLength',response.Length);
        }
    })
    $.ajax({
        type: "POST",
        url: 'http://localhost:3007/GetIssuedDocument',
        data: JSON.stringify(JsonData),
        contentType: "application/json",
        dataType: "json",
        success: function(response) {
        console.log("please check GetIssuedDocument=====>>",response.TotalObject.length)
        var series=response.TotalObject.length;
        _this.controllerFor('DashBoard').set('series',series);
        }
    })
    $.ajax({
        type: "POST",
        url: 'http://localhost:3007/AdmitCardStatus',
        data: JSON.stringify(JsonData),
        contentType: "application/json",
        dataType: "json",
        success:function(response) {
            // console.log("Admit card status record=====>>",response.Result);
        console.log("Admit card status=====>>",response.Result);
        _this.controllerFor('DashBoard').set('AllInfo',response.Result);
      
        }
    })
   
     $.ajax({
        type: "POST",
        url: 'http://localhost:3007/GetParticularUserDocuments',
        data: JSON.stringify(PostData),
        contentType: "application/json",
        dataType: "json",
        success: function(response) {
            console.log("fetch document",response)
            var ContentHash=response.result.output.ContentHash;
            _this.controllerFor('DashBoard').set('ContentHash',ContentHash)
            var TimeStamp=response.result.output.created_at;
            _this.controllerFor('DashBoard').set('TimeStamp',TimeStamp)
            var DoccumentType=response.result.output.Document;
            _this.controllerFor('DashBoard').set('DoccumentType',DoccumentType)
            var SeatNumber=response.result.output.SeatNumber;
            _this.controllerFor('DashBoard').set('SeatNumber',SeatNumber)
            var name=response.result.output.name;
            _this.controllerFor('DashBoard').set('name',name)
      
        }  
    })

    }
});
