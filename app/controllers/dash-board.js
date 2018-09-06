import Controller from '@ember/controller';

export default Controller.extend({
    ShowBlock:false,
    RequestForDuplication:false,
    ListDocument: ["SSC","HSC"],
    ListDocument1:["MARCH","JULY-OCTOBER"],
    actions:{
    GoToRepository:function(){
        // this.set('ShowBlock',true)
        this.transitionToRoute('UserRepository')
       },
       ChangeForRequest:function(){
        this.set('RequestForDuplication',true)
       }
       
    }
});
