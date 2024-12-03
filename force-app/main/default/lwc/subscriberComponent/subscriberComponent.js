import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import PubSub from '@salesforce/messageChannel/PubSub__c';

export default class SubscriberComponent extends LightningElement {
    firstName = ''; 
    lastName = ''; 
    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        // Subscribe to the message channel when the component is added to the DOM
        this.handleSubscribe();
    }

    disconnectedCallback() {
        // Unsubscribe from the message channel when the component is removed from the DOM
        this.handleUnsubscribe();
    }

    handleSubscribe() {
        if (!this.subscription) {
            this.subscription = subscribe(this.messageContext, PubSub, (message) => {
                if (message && message.payload) {
                    
                    this.firstName = message.payload.firstName;
                    this.lastName = message.payload.lastName // Extract and set the name from the payload
                } else {
                    console.error('Invalid message structure:', message);
                }
            });
        }
    }

    handleUnsubscribe() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}
