import Route from '@ember/routing/route';
import uniqid from "npm:uniqid";
import sha256 from "npm:sha256";

export default Route.extend({
    model(){
        const userId=this.controllerFor('Home_Page').get('userId');
        this.controllerFor('AppForm').set('userId',userId);
        console.log("userId=====>>",userId)
        console.log(uniqid()); // 149897061806898563200922e1443e123
        const uniqueid=uniqid();
        this.controllerFor('AppForm').set('uniqid',uniqueid)
    }
});
