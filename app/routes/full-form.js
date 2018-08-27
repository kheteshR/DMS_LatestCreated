import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var _id=this.controllerFor('ApplicationFormRepo').get('id');
        this.controllerFor('FullForm').set('id',_id);
        var data=this.controllerFor('ApplicationFormRepo').get('data');
        console.log("pass data in full form",data)
        this.controllerFor('FullForm').set('data',data);
        var candiName=this.controllerFor('ApplicationFormRepo').get('candiName');
        this.controllerFor('FullForm').set('candiName',candiName);
        var Doc_id=this.controllerFor('ApplicationFormRepo').get('Doc_id');
        this.controllerFor('FullForm').set('Doc_id',Doc_id);
        var RollNo=this.controllerFor('ApplicationFormRepo').get('RollNo');
        this.controllerFor('FullForm').set('RollNo',RollNo);
        var dob=this.controllerFor('ApplicationFormRepo').get('dob');
        this.controllerFor('FullForm').set('dob',dob);
        var fatherName=this.controllerFor('ApplicationFormRepo').get('fatherName');
        this.controllerFor('FullForm').set('fatherName',fatherName);
        var motherName=this.controllerFor('ApplicationFormRepo').get('motherName');
        this.controllerFor('FullForm').set('motherName',motherName);
        var schoolCode=this.controllerFor('ApplicationFormRepo').get('schoolCode');
        this.controllerFor('FullForm').set('schoolCode',schoolCode);
        var schoolName=this.controllerFor('ApplicationFormRepo').get('schoolName');
        this.controllerFor('FullForm').set('schoolName',schoolName);
        var ResidentialAddr=this.controllerFor('ApplicationFormRepo').get('ResidentialAddr');
        this.controllerFor('FullForm').set('ResidentialAddr',ResidentialAddr);
        var MobNo=this.controllerFor('ApplicationFormRepo').get('MobNo');
        this.controllerFor('FullForm').set('MobNo',MobNo);
        var AdharNo=this.controllerFor('ApplicationFormRepo').get('AdharNo');
        this.controllerFor('FullForm').set('AdharNo',AdharNo);
        var userId=this.controllerFor('ApplicationFormRepo').get('userId');
        this.controllerFor('FullForm').set('userId',userId);
        var TypeOform=this.controllerFor('ApplicationFormRepo').get('TypeOform');
        this.controllerFor('FullForm').set('TypeOform',TypeOform);
        var status=this.controllerFor('ApplicationFormRepo').get('status');
        this.controllerFor('FullForm').set('status',status);
        
        console.log("thanks ===========>>>",_id)
    }
});
