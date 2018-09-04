import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var SenderName= this.controllerFor('Home_Page').get('walletname');
        console.log("Inside route of employee=======>>",SenderName)
    }
});
