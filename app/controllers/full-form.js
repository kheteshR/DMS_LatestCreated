import Controller from '@ember/controller';


export default Controller.extend({
    showAlert:false,
    isCancelled:true,
    actions:{
        Done:function(userId,TypeOform){
            console.log("your data====>>",userId,TypeOform)
            var Data={
                "userId":userId,
                "TypeOform":TypeOform
            }
            var _this=this
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/VerificationProcess',//sending request to anybody for document
                data: JSON.stringify(Data),
                contentType:"application/json",
                dataType:"json",
                success: function(response) {
                console.log("Send Request",response);
                _this.set('message',response.message);
                _this.set('showAlert',true);
              }  
            })
        }
    }
});
