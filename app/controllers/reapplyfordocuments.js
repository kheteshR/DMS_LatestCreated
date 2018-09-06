import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        // UpdateadmitValues
        targetButton:function(schoolName,RollNo,MobNo,AdharNo,schoolCode,candiName,fatherName,motherName,dob){
            var _this=this
            var id=this.get('id');
            console.log(id)
            var userId=this.get('userId');
            console.log(userId);
            var TypeOform=this.get('TypeOform');
            console.log(TypeOform)
            console.log(schoolName,RollNo,MobNo,AdharNo,schoolCode,candiName,fatherName,motherName,dob)
            // var id=this.get('id');
            // var id=this.get('id');
            

            var Input={
                "id":id,
                "propertyType":TypeOform,
                "userId":userId,
                "candiName":candiName,
                "motherName":motherName,
                "fatherName":fatherName,
                "dob":dob,
                "MobNo":MobNo,
                "RollNo":RollNo,
                "AdharNo":AdharNo,
                "schoolCode":schoolCode,
                "schoolName":schoolName
            }
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/UpdateadmitValues',//sending mail to divisional board for document
                data: JSON.stringify(Input),
                contentType:"application/json",
                dataType:"json",
                success: function(response) {
                console.log("Send update Request institute",response);
                _this.set('TxHash',response.result.txHash);
                _this.set('showAlert',true);
              }  
            })

        }
    }
});
