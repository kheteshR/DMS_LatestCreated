import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        // this.transitionTo('test')
        this.transitionTo('Home_Page')
    }
});