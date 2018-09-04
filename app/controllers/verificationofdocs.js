import Controller from '@ember/controller';

export default Controller.extend({
    loginactive: true,
    registeractive:true,
    ListDocument:["SSC Marksheet","HSC Marksheet"],
    // session: Ember.inject.service('session'),
    actions: {
        verifification:function(){
            var TxHash=this.get('TxHash');
            console.log("TxHash",TxHash);
            var Data={
                "TransactionHash":TxHash,
               
            }
            var _this=this;
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/VerifyHashFromBlockchain',//sending request to anybody for document
                data: JSON.stringify(Data),
                contentType:"application/json",
                dataType:"json",
                success: function(response) {
                console.log("Total response verification",response);
                console.log("Only ContentHash",response.output.result.ContentHash);
                console.log("Only TransactionHash",response.output.result.Document);
                _this.set('ContentHash',response.output.result.ContentHash);
                _this.set('Document',response.output.result.Document);
                _this.set('VarifyAlert',true);
              }  
            })

        },
        submit:function(){
            var name=this.get('name');
            var SeatNumber= this.get('SeatNumber');
            var propertyType=this.get('propertyType');
            console.log("Send Request ",name,SeatNumber,propertyType);
            var Data={
                "name":name,
                "SeatNumber":SeatNumber,
                "DocumentType":propertyType
            }
            var _this=this;
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/GetContentHashForVerification',//sending request to anybody for document
                data: JSON.stringify(Data),
                contentType:"application/json",
                dataType:"json",
                success: function(response) {
                console.log("Total response verification",response);
                console.log("Only ContentHash",response.Result.ContentHash);
                console.log("Only TransactionHash",response.Result.TransactionHash);

                _this.set('ContentHash',response.Result.ContentHash);
                _this.set('TransactionHash',response.Result.TransactionHash);
                _this.set('showAlert',true);
              }  
            })
        },

        toggle : function(tab){  
            this.set('loginactive',false) 
            this.set('registeractive',true) 

            if(tab==='login')  {
                this.set('loginactive',true) 
                this.set('registeractive',false) 
            }    
           
                 
        }
    }
});
