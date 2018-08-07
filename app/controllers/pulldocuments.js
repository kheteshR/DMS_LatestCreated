import Controller from '@ember/controller';

export default Controller.extend({
    ShowForm:false,
    ShowForm1:false,
    IsSuccess:false,
    actions:{
        pull1:function(){
            this.set('ShowForm',true)

        },
        pull2:function(){
            this.set('ShowForm1',true)

        },
        submit1:function(){
          const userId=this.get('userId')
          console.log("userId=====>>>",userId)
          this.set('userId',userId)
            var hash;
            var name=this.get('name')
            console.log("name",name)
            var SeatNo=this.get('SeatNo')
            console.log("SeatNo",SeatNo)
            var SearchData={
                "name":name,
                "SeatNumber":SeatNo,
                "userId":userId
            }
            var that=this;
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/GetIndividualDocument',
                data: JSON.stringify(SearchData),
                contentType: "application/json",
                dataType: "json",
                success: function(response) {
                console.log("fetch document",response)
                hash=response.Hash
                console.log("hash========>>",hash)
                that.set('filehash',hash)
                console.log(`hash========>>${hash}`)
                // sessionStorage.setItem('hash', hash);

               
                }  
            })
           
            that.set('IsSuccess',true)
            that.set('hash',hash)
        }

    }
});
