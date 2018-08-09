import Controller from '@ember/controller';

export default Controller.extend({
    selectedOption: null,
    ListDocument: ["SSC","HSC"],
    actions:{
        SubmitForm:function(){
            var uniqid=this.get('uniqid');
            this.set(uniqid,'uniqid');
            var Uid=this.get('userId');
            this.set('userId',Uid);
            console.log("Uid=======>>",Uid)
            var candidateName=this.get('candidateName')
            this.set('candidateName',candidateName)
            var FatherName=this.get('FatherName');
            this.set('FatherName',FatherName);
            var MotherName=this.get('MotherName');
            this.set('MotherName',MotherName);
            var schoolCode=this.get('schoolCode');
            this.set('schoolCode',schoolCode);
            var schoolName=this.get('ResidentialAddr');
            this.set('schoolName',schoolName);
            var RollNo=this.get('RollNo');
            this.set('RollNo',RollNo);
            var MobNo=this.get('MobNo');
            this.set('MobNo',MobNo);
            var AdharNo=this.get('AdharNo');
            this.set('AdharNo',AdharNo);
            var dob=this.get('expiresAt');
            this.set('dob',dob);
            var propertyType=this.get('propertyType');
            this.set('propertyType',propertyType);
            var ResidentialAddr=this.get('ResidentialAddr');
            this.set('ResidentialAddr',ResidentialAddr);
            var JsonData={
                "candiName":candidateName,
                "fatherName":FatherName,
                "motherName":MotherName,
                "schoolCode":schoolCode,
                "schoolName":schoolName,
                "RollNo":RollNo,
                "MobNo":MobNo,
                "AdharNo":AdharNo,
                "dob":dob,
                "propertyType":propertyType,
                "userId":Uid,
                "ResidentialAddr":ResidentialAddr,
                "uniqid":uniqid,
                "status":"processing",
                "HallCenter":"",
                "Seat_Number":""

            }
            $.ajax({
                type: "POST",
                url: ' http://localhost:3007/admitValues',
                data: JSON.stringify(JsonData),
                contentType: "application/json",
                dataType: "json",
                success: function(response) {
                console.log("Result=====>>",response)

                }
            })
            
            swal({
                title:'Application ID:'+" "+uniqid+" "+'submitted successfully',
                animation: true,
                customClass: 'bounce'
                
              })
       
        }
    }
});
