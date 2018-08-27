import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var id=this.controllerFor('ApplicationFormRepo').get('id');
        console.log("Inside history route",id)
        console.log(id)
        const JsonData={
            "_id":id
        }
        var _this=this;
        $.ajax({
            type: "POST",
            url: ' http://localhost:3007/HallTicketUpdateAuditTrail',
            data: JSON.stringify(JsonData),
            contentType: "application/json",
            dataType: "json",
            success: function(response) {
            console.log("Result=====>>",response.result);
            _this.controllerFor('History').set('AllData',response.result)
            _this.controllerFor('History').set('Id',response.result[0].id);

            }
        })
    }
});
