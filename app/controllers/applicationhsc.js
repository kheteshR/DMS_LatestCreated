import Controller from '@ember/controller';

export default Controller.extend({
    isCancelled:true,
    IsRejected:true,
    actions:{
        pass:function(uniqid,TypeOform, status,candiName,RollNo
            ,dob,fatherName,motherName,schoolCode,schoolName,ResidentialAddr
            ,MobNo,AdharNo,userId){
                console.log("Application of hsc",uniqid,TypeOform, status,candiName,RollNo
                ,dob,fatherName,motherName,schoolCode,schoolName,ResidentialAddr
                ,MobNo,AdharNo,userId)
                

        },
        Update:function(userId,_id,TypeOform){
            const message=this.get('message');
            this.set('message',message);
            console.log("message==========>",message);
            console.log("_id==========>",_id);
            this.set("_id",_id)
            console.log("userId==========>",userId);
            var _that=this;
            const data={
                "message":message,
                "status":"Rejected",
                "_id":_id,
                "walletName":"divisional@rapid.com"
            }
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/HallTicketUpdate',// Audit trail of whole hall ticket generation process
                data: JSON.stringify(data),
                contentType: "application/json",
                dataType: "json",
                success:function(response) {
                console.log("Result application HSC=====>>",response.result);
                _that.set('TxHash',response.result.txHash);
                console.log(response.result.txHash)
                _that.set('TxShowAlert',true);
            }
            })
        },
        Done:function(id,userId,TypeOform){
            console.log("My userid and type=====>",id,userId,TypeOform)
            var JsonData={
                "id":id,
                "userId":userId,
                "TypeOform":TypeOform
            }
            var EmailInput={
                "email":"rapiddmsinstitute@gmail.com",
                "subject":"Institution verification alert",
                "text":"Hall ticket verification done ,please proceed ahead for futher approval"
            }
            var _that=this;
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/VerificationProcessByDivisionalBoard',// verified by divisional board and send data in blockchain
                data: JSON.stringify(JsonData),
                contentType: "application/json",
                dataType: "json",
                success:function(response) {
                console.log("Result application HSC=====>>",response.Result);
                _that.set('AllInfo',response.Result);
                _that.set('showAlert',true);
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
                _that.set('EmailMessage',response.message);
                _that.set('showAlert',true);
              }  
            })
        }
    }
});
