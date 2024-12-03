import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    fname = '';
    lname = '';
    handleEvent(event){
        this.fname = event.detail.FirstName;
        this.lname = event.detail.LastName;
    }
}