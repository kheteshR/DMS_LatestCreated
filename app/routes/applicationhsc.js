import Route from '@ember/routing/route';

export default Route.extend({
    
    model(){
        var JsonData={}
        $.ajax({
            type: "POST",
            url: 'http://localhost:3007/RetriveAllForm',
            data: JSON.stringify(JsonData),
            contentType: "application/json",
            dataType: "json",
            success:function(response) {
            console.log("Result=====>>",response)

            }
        })
    }
});
