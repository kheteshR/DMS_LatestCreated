import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var controller=this
        var PostData={
            "userId":"6342"
         }
         $.ajax({
            type: "POST",
            url: 'http://localhost:3007/GetParticularUserDocuments',
            data: JSON.stringify(PostData),
            contentType: "application/json",
            dataType: "json",
            success: function(response) {
                
                console.log("fetch document",response)
                var ContentHash=response.result.output.ContentHash;
                controller.controllerFor('UserRepository').set('ContentHash',ContentHash)
                var TimeStamp=response.result.output.created_at;
                controller.controllerFor('UserRepository').set('TimeStamp',TimeStamp)
                var DoccumentType=response.result.output.Document;
                controller.controllerFor('UserRepository').set('DoccumentType',DoccumentType)
                var SeatNumber=response.result.output.SeatNumber;
                controller.controllerFor('UserRepository').set('SeatNumber',SeatNumber)
                var name=response.result.output.name;
                controller.controllerFor('UserRepository').set('name',name)

          
            }  
        })
  
    }
});
