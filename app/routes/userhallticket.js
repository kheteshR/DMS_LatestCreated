import Route from '@ember/routing/route';

export default Route.extend({
    
        model(){
            var All_data=this.controllerFor('DashBoard').get('data');
            console.log("data=========>>userhallticket",All_data);
            this.controllerFor('userhallticket').set('AllInfo',All_data);
           for(var i=0;i<All_data.length;i++){
            console.log("candiName====>userhallticket",All_data[i].candiName)
           
            var Data={
                "candiName":All_data[i].candiName,
                "motherName":All_data[i].motherName,
                "Seat_Number":All_data[i].Seat_Number,
                "HallCenter":All_data[i].HallCenter,
                "TypeOform":All_data[i].TypeOform
            }
            var _this=this;
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/ConvertToPdf',//sending request to anybody for document
                data: JSON.stringify(Data),
                contentType:"application/json",
                dataType:"json",
                success: function(response) {
                console.log("Send Request",response);
                _this.set('message',response.message);
                // _this.set('showAlert',true);
              }  
            })
        }
        }
    
});
