import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var JsonData={}
        var SSCdata={
            "TypeOform":"SSC"
        }
        var HSCdata={
            "TypeOform":"HSC"
        }
        var _this=this
   
        $.ajax({
            type: "POST",
            url: 'http://localhost:3007/RetriveAllForm',
            data: JSON.stringify(JsonData),
            contentType: "application/json",
            dataType: "json",
            success:function(response) {
            console.log("Result in divisional board=====>>",response.Result);
            _this.controllerFor('divisionalboard').set('AllInfo',response.Result);
            }
        })
        $.ajax({
            type: "POST",
            url: 'http://localhost:3007/LengthOfRecordsSSC',
            data: JSON.stringify(SSCdata),
            contentType: "application/json",
            dataType: "json",
            success:function(response) {
            console.log("Result in divisional board length SSC=====>>",response.ResultForSSC);
            _this.controllerFor('divisionalboard').set('SSC_Length',response.ResultForSSC);
            }
        })
        $.ajax({
            type: "POST",
            url: 'http://localhost:3007/LengthOfRecordsHSC',
            data: JSON.stringify(HSCdata),
            contentType: "application/json",
            dataType: "json",
            success:function(response) {
            console.log("Result in divisional board length Hsc=====>>",response.ResultForHSC);
            _this.controllerFor('divisionalboard').set('HSC_Length',response.ResultForHSC);
            }
        })
    }
});
