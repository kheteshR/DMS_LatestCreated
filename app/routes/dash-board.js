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
        console.log("Result===== dashboard=====>>",response.Result.SSCresult);
        _this.controllerFor('DashBoard').set('data',response.Result.SSCresult);
        _this.controllerFor('DashBoard').set('DataLength',response.Length);
       

        }
    })
    }
});
