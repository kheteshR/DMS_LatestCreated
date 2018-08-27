import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        isShowingModal:false,
        submit:function(){
            var walletName=this.get('walletName');
            console.log("walletName======",walletName)
            var pswrepeat=this.get('pswrepeat');
            console.log("pswrepeat======",pswrepeat)
            var pswrepeat1=this.get('pswrepeat1');
            console.log("pswrepeat1======",pswrepeat1)
            var data={
                "walletName":walletName,
                "password":pswrepeat,
                "usertype":"user"
            }
            var _that=this;
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/registerUser',
                data: JSON.stringify(data),
                contentType: "application/json",
                dataType: "json",
                success:function(response) {
                console.log("Result application HSC=====>>",response.Result);
                _that.set('isShowingModal',true);
            }
            })

        }
    }
});
