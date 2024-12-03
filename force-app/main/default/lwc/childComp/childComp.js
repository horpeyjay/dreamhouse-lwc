import { LightningElement } from 'lwc';

export default class ChildComp extends LightningElement {
    fname = '';
    lname = '';
    handleChangeFirstName(event){
        this.fname = event.target.value
    }
    handleChangeLastName(event){
        this.lname = event.target.value
    }

    handleClick(event){
        const searchEvent = new CustomEvent('getsearchevent', 
            {detail: 
                {FirstName: this.fname, 
                LastName: this.lname}
            });
        this.dispatchEvent(searchEvent);
    }
}