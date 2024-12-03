import { LightningElement } from 'lwc';

export default class QuerySelectorExamples extends LightningElement {
    fname = ''; // Property to hold first name
    lname = ''; // Property to hold last name

    handleClick() {
        // Select all lightning-input elements in the template
        const inputs = this.template.querySelectorAll('lightning-input');

        // Iterate over the NodeList and update fname/lname based on the input name
        inputs.forEach((element) => {
            if (element.name === 'firstName') {
                this.fname = element.value; // Update fname
            } else if (element.name === 'lastName') {
                this.lname = element.value; // Update lname
            }
        });
    }
}
