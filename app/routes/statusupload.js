import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var _this=this;
        var JsonData={
    
        }
        $.ajax({
            type: "POST",
            url: 'http://localhost:3007/AdminUpload',
            data: JSON.stringify(JsonData),
            contentType: "application/json",
            dataType: "json",
            success: function(response) {
            console.log("Result===== dashboard=====>>dashboard",response.Result.length);
            _this.controllerFor('statusupload').set('data',response.Result);
            for(var i=0;i<=response.Result.length;i++){
                console.log("hash==========",response.Result[i].filesHash[i].hash);
            _this.controllerFor('statusupload').set('filehash',response.Result[i].filesHash[i]);
            }
            _this.controllerFor('statusupload').set('ArrayLength',response.Result.length);
            _this.controllerFor('statusupload').set('isShowingModal',false);
            
            }
        })
    }
    
});
