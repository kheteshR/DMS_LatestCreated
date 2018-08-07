import Ember from 'ember';

export default Ember.Component.extend({
    listitem: [],
    prompt: null,
    optionValuePath: 'value',
    optionLabelPath: 'label',

    init: function() {
       this._super(...arguments);
        if (!this.get('listitem')) {
            this.set('listitem', []);
        }
       
    },
//code for selecting drop-down component
    actions: {
        change: function() {
            let selectedIndex = this.$('select')[0].selectedIndex;
            console.log(selectedIndex)
            let listitem = this.get('listitem');
          
            let hasPrompt = !!this.get('prompt');
            let listitemIndex = hasPrompt ? selectedIndex - 1 : selectedIndex;
            console.log(listitemIndex)
            let selecteditem = listitem[listitemIndex - 1];
            console.log(selecteditem)
            this.sendAction('willChangeAction', selecteditem);

            if (this.get('optionValuePath')) {
                this.set('selecteditem', selecteditem[this.get('optionValuePath')]);
            } else {
                this.set('selecteditem', selecteditem);
            }
            this.set('selecteditemlist', selecteditem);
         

            this.sendAction('didChangeAction', selecteditem);
        }
    }
});
