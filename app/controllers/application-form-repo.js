import Controller from '@ember/controller';

export default Controller.extend({
    // options:["Class","X","Marksheet"],
    // delay:2000,
    actions:{

        pass:function(data,Doc_id,id,TypeOform,status,candiName,RollNo,dob,fatherName,motherName,schoolCode,schoolName,ResidentialAddr,MobNo,AdharNo,userId){
            console.log("Doc identity==>>>",Doc_id);
            console.log("complete object==>>>",data);
            console.log("identity==>>>",id);
            console.log("candiName==>>>",candiName);
            console.log("status=======>>",status);
            this.set('data',data);//
            this.set('id',id);//
            this.set('Doc_id',Doc_id)
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
        },
        GetHistory:function(id){
            this.set('id',id)
            console.log("history button action",id)
            this.transitionToRoute('History');
        }
    }


});
