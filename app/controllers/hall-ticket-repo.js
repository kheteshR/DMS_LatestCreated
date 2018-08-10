import Controller from '@ember/controller';
import jsPDF from 'npm:jspdf'

export default Controller.extend({
    steps: [
        {setFontSize: 40},
        {addHTML: [35, 25, 'hall-ticket-repo.hbs']}
      ],
    actions:{
       
}
});
