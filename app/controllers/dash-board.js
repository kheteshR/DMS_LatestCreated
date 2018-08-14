import Controller from '@ember/controller';

export default Controller.extend({
    ShowBlock:false,
    actions:{
    GoToRepository:function(){
        // this.set('ShowBlock',true)
        this.transitionToRoute('UserRepository')
       }
    }
});
