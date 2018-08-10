import Route from '@ember/routing/route';

export default Route.extend({
    
    model(){
        var JsonData={}
        var _that=this;
       $.ajax({
            type: "POST",
            url: 'http://localhost:3007/RetriveAllForm',
            data: JSON.stringify(JsonData),
            contentType: "application/json",
            dataType: "json",
            success:function(response) {
            console.log("Result application HSC=====>>",response.Result);
           
            _that.controllerFor('applicationhsc').set('AllInfo',response.Result)

            }
        })
    }
});
