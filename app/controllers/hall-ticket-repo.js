import Controller from '@ember/controller';
import jsPDF from 'npm:jspdf'

export default Controller.extend({
    steps: [
        {setFontSize: 40},
        {addHTML: [35, 25, 'hall-ticket-repo.hbs']}
      ],
    actions:{
        save:function(){
            var JsonData={
                "Seat_Number":"23234",
                "candiName":"khetesh",
                "fatherName":"Ramesh",
                "HallCenter":"Abhinav college",
                "motherName":"kanya",
                "dob":"22/11/1994",
                "MobNo":"9004450734",
                "TypeOform":"SSC"
            }
            $.ajax({
                type: "POST",
                url: ' http://localhost:3007/ConvertToPdf',
                data: JSON.stringify(JsonData),
                contentType: "application/json",
                dataType: "json",
                success: function(response) {
                console.log("Result of pdf data=====>>",response.result)
                }
            })
          $.ajax({
            type: "GET",
            url: 'http://localhost:3007/download',
            success: function(response) {
            console.log("Result of pdf download=====>>",response)
            }

          })
        }
       
}
});
