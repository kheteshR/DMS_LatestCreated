import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var object=this.controllerFor('FullForm').get('data');
        console.log("transfered data from full form",object);
        this.controllerFor('reapplyfordocuments').set('id',object._id)
        this.controllerFor('reapplyfordocuments').set('object',object)
        this.controllerFor('reapplyfordocuments').set('candiName',object.candiName)
        this.controllerFor('reapplyfordocuments').set('MobNo',object.MobNo)
        this.controllerFor('reapplyfordocuments').set('RollNo',object.RollNo)
        this.controllerFor('reapplyfordocuments').set('TypeOform',object.TypeOform)
        this.controllerFor('reapplyfordocuments').set('dob',object.dob)
        this.controllerFor('reapplyfordocuments').set('fatherName',object.fatherName)
        this.controllerFor('reapplyfordocuments').set('motherName',object.motherName)
        this.controllerFor('reapplyfordocuments').set('schoolName',object.schoolName)
        this.controllerFor('reapplyfordocuments').set('userId',object.userId)
        this.controllerFor('reapplyfordocuments').set('schoolCode',object.schoolCode)
        this.controllerFor('reapplyfordocuments').set('AdharNo',object.AdharNo)
        this.controllerFor('reapplyfordocuments').set('userId',object.userId)
        this.controllerFor('reapplyfordocuments').set('schoolName',object.schoolName)
    }
});
