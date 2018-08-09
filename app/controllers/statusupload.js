import Controller from '@ember/controller';

export default Controller.extend({
    selectedOption: null,
    ListDocument: ["SSC Marksheet","HSC Marksheet"],
    ChangePage:true,
    actions:{
        toggle:function(){
         this.set('ChangePage',false)
        }

    }
});
