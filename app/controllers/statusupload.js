import Controller from '@ember/controller';

export default Controller.extend({
    selectedOption: null,
    ListDocument: ["SSC Marksheet","HSC Marksheet"],
    ChangePage:true,
    actions:{
        toggle:function(){
         this.set('ChangePage',false)
        },
        uploadDoc:function(file){
            var mycontroller=this;
            var msg=this.get('propertyType');
            console.log("msg=========>>",msg);
            var name=this.get('name')
            console.log("name=======>>",name);
            console.log("file=======>>",file);
            file.upload('http://localhost:3007/file_upload', { data:{DocumentType:msg,name:name},headers: { } }).then(function (response) {
            console.log("stringify data",JSON.stringify(response));
            console.log("normal object",response);
            mycontroller.set("isShowingModal",true);
          }, function () {
            console.log("file upload sucessfully...");
          });
          
    },
    Goto:function(){
        this.set("isShowingModal",false);
    }

    }
});
