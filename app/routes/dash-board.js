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
    }
});
