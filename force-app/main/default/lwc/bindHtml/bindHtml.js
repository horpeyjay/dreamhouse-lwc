import { LightningElement } from 'lwc';

export default class BindHtml extends LightningElement {
    greeting = "Opeyemi";
    myValue = "salesforce example";

    firstName = '';
    lastName = '';
    employee = {
        firstName: 'Opeyemi',
        lastName: 'Oni',
        city : 'Osogbo',
        age : '25'
    }

    get getRank(){
        const rank = this.employee.age >= 50 ? 'Gold' : this.employee.age >= 30 ? 'Silver' : 'Bronze';
        return rank;
    }
    handleChange(event){
        this.myValue = event.target.value;
        const field = event.target.name;
        if(field === 'firstName'){
            this.firstName = event.target.value;
        }else if(field === 'lastName'){
            this.lastName = event.target.value;
        }
    }

    get uppercaseName(){
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}