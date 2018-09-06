import Controller from '@ember/controller';


export default Controller.extend({
    showAlert:false,
    isCancelled:true,
    actions:{
        ReValidation:function(){
            var _this=this
            _this.transitionToRoute('reapplyfordocuments')
        },
        Done:function(Doc_id,userId,TypeOform){
            var _this=this
            console.log("your data====>>",Doc_id,userId,TypeOform)
            var Data={
                "_id":Doc_id,
                "userId":userId,
                "TypeOform":TypeOform
            }
            var EmailInput={
                "email":"rapiddmsdivisionalboard@gmail.com",
                "subject":"Institution verification alert",
                "text":"Hall ticket verification done ,please proceed ahead for futher approval"
            }
           
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/VerificationProcess',//sending request to anybody for document
                data: JSON.stringify(Data),
                contentType:"application/json",
                dataType:"json",
                success: function(response) {
                console.log("Send Request verification",response);
                _this.set('message',response.message);
                _this.set('showAlert',true);
              }  
            })
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/sendMail',//sending mail to divisional board for document
                data: JSON.stringify(EmailInput),
                contentType:"application/json",
                dataType:"json",
                success: function(response) {
                console.log("Send Request",response);
                _this.set('EmailMessage',response.message);
                _this.set('showAlert',true);
              }  
            })
        }
    }
});
