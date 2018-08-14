import Route from '@ember/routing/route';

export default Route.extend({
    
        model(){
            var All_data=this.controllerFor('DashBoard').get('data');
            console.log("data=========>>userhallticket",All_data);
            this.controllerFor('userhallticket').set('AllInfo',All_data);
    
        }
    
});
