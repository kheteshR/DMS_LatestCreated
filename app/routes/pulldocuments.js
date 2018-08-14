import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var userId=this.controllerFor('Home_Page').get('userId');
        console.log("pull document=========",userId)
        this.controllerFor('pulldocuments').set('userId',userId);
    }
});
