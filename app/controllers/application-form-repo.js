import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        pass:function(id,TypeOform,status,candiName,RollNo,dob,fatherName,motherName,schoolCode,schoolName,ResidentialAddr,MobNo,AdharNo,userId){
            console.log("identity==>>>",id);
            console.log("candiName==>>>",candiName);
            console.log("status=======>>",status);
            this.set('id',id);//
            this.set('candiName',candiName);//
            this.set('RollNo',RollNo);//
            this.set('dob',dob);//
            this.set('fatherName',fatherName);//
            this.set('motherName',motherName);
            this.set('schoolCode',schoolCode);//
            this.set('schoolName',schoolName);//
            this.set('ResidentialAddr',ResidentialAddr);//
            this.set('MobNo',MobNo);//
            this.set('AdharNo',AdharNo);//
            this.set('userId',userId);//
            this.set('TypeOform',TypeOform);
            this.set('status',status);
            this.transitionToRoute('FullForm');
        }
    }


});
