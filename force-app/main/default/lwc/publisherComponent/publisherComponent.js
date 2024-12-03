import { MessageContext, publish } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import PubSub from '@salesforce/messageChannel/PubSub__c';

export default class PublisherComponent extends LightningElement {
    firstName = '';
    lastName = '';

    @wire(MessageContext)
    messageContext;

    handleChangeFirstName(event) {
        // Update name property on input change
        this.firstName = event.target.value;
    }

    handleChangeLastName(event) {
        // Update name property on input change
        this.lastName = event.target.value;
    }

    handleClick() {
        // Publish the message with correct structure
        const payload = { payload: { firstName: this.firstName, lastName: this.lastName } }; // Nested in a 'payload' key
        publish(this.messageContext, PubSub, payload);
    }
}
