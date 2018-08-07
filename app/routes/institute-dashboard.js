import Route from '@ember/routing/route';

export default Route.extend({
    HSCRepo:function(){
        this.set('ShowTable',true)
        console.log("my set value",this.set('ShowTable',true))
    }
});
