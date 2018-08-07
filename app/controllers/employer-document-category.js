import Ember from 'ember';

export default Ember.Controller.extend({
    IsSHowForm:false,
    isShowingModal:false,
    selectedOption: null,
    ListDocument: ["SSC Marksheet","HSC Marksheet"],
    actions:{
        show:function(){
            this.set('IsSHowForm',true)
        },
        SendRequest:function(){
            var SenderName=this.get('SenderName')
            console.log("SenderName",SenderName)
            this.set('SenderName',SenderName)
            var RxAddress=this.get('Address')
            this.set('RecieverAccount',RxAddress)
            console.log("RxAddress=====>>>>>>>>>",RxAddress)
            var Type=this.get('propertyType')
            this.set('Type',Type)
            console.log("DocumentType=====>>>>>>>>>",Type)
            var Data={
                "RecieverAccount":RxAddress,
                "DocumentType":Type,
                "SenderName":SenderName,
                "status":"request initiated"
            }
            var that=this;
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/RequestFromOutChain',//sending request to anybody for document
                data: JSON.stringify(Data),
                contentType: "application/json",
                dataType: "json",
                success: function(response) {
                console.log("Send Request",response);
                that.set('isShowingModal',true)
               
                }  
            })

        },
        Goto:function(){
            this.set("isShowingModal",false);
        }


    }
});
