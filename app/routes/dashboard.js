import Route from '@ember/routing/route';

export default Route.extend({
    //http://localhost:3007/HallTicketForUser
    model(){
    var walletname=this.controllerFor('Home_Page').set('walletname',walletname)
    console.log("walletname====>>dashboard",walletname)
    this.controllerFor('dashboard').set('walletname',walletname);
    var _this=this;
    var JsonData={

    }
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
       
    }
});
