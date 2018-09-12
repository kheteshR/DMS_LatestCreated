import Controller from '@ember/controller';

export default Controller.extend({
    ShowBlock:false,
    RequestForDuplication:false,
    ShowUploadDocument:false,
    DashBoardShow:true,
    IsUserRepository:false,
    showAlertForDuplicate:false,
    ListDocument: ["SSC","HSC"],
    ListDocument1:["MARCH","JULY-OCTOBER"],
    actions:{
        toggle:function(){
            this.set('ShowUploadDocument',true)
            this.set('DashBoardShow',false)
            this.set('RequestForDuplication',false)
            this.set('IsUserRepository',false)
        },
        DuplicationDataSubmit:function(){
            var _this=this;
         var name=this.get('name')
         console.log("name for duplicate====>",name)
         var SeatNumber=this.get('SeatNumber')
         console.log("SeatNumber for duplicate====>",SeatNumber)
         var TotalMarks=this.get('TotalMarks')
         console.log("TotalMarks for duplicate====>",TotalMarks)
         var propertyType=this.get('propertyType')
         console.log("propertyType for duplicate====>",propertyType)
         var Session=this.get('Session')
         console.log("Session for duplicate====>",Session)
         var DuplicateRequestStatus="Request Initiated by user"
         const RequestForDuplicate={
             "userId":"6342",
             "name":name,
             "TotalMarks":TotalMarks,
             "Session":"MARCH",
             "propertyType":"SSC",
             "DuplicateRequestStatus":DuplicateRequestStatus
        }
        console.log("i am in digital sign=======>",JSON.stringify(RequestForDuplicate));
        $.ajax({
            type: "POST",
            url: ' http://localhost:3007/DuplicateMarksheetRequest',
            data: JSON.stringify(RequestForDuplicate),
            contentType: "application/json",
            dataType: "json",
            success: function(response) {
            console.log("Duplicate marksheet Request of result=====>>",response);
            _this.set('RequestObject',response)
            _this.set('showAlertForDuplicate',true)
            //_this.controllerFor('History').set('Id',response.result[0].id);
    
            }
        })
        },
       GoToRepository:function(){
        this.set('IsUserRepository',true)
        this.set('RequestForDuplication',false)
        this.set('ShowUploadDocument',false)
        this.set('DashBoardShow',false)
       },
       ChangeForRequest:function(){
        this.set('IsUserRepository',false)
        this.set('RequestForDuplication',true)
        this.set('ShowUploadDocument',false)
        this.set('DashBoardShow',false)
       }
       
    }
});
