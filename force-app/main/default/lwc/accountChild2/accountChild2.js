import { LightningElement, api, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountClass.getAccounts';
import { publish, MessageContext } from 'lightning/messageService';
import Account from '@salesforce/messageChannel/Account__c';

export default class AccountChild2 extends LightningElement {
    @api searchTextChild2;

    @wire (MessageContext) messageContext;
    columns = [
        {label: 'Id', fieldName: 'Id'},
        {label: 'Name', fieldName: 'Name'},
        {label: 'Actions', fieldName: 'Actions', type: 'button', typeAttributes: {
            label: 'View Contacts', 
            value: 'view_contacts'
        }
    }
    ];

    rows = [
        {Id: '23', Name: 'Test1'},
        {Id: '24', Name: 'Test2'},
        {Id: '25', Name: 'Test3'},
        {Id: '26', Name: 'Test4'}
    ];

    currentId;
    currentName;
    handleRowAction(event){
        if(event.detail.action.value === 'view_contacts'){
            this.currentId = event.detail.row.Id;
            this.currentName = event.detail.row.Name;

            const payload  = {
                accountId: event.detail.row.Id,
                accountName: event.detail.row.Name
            };

            publish(this.messageContext,Account, payload );
        }
        
    }

    @wire(getAccounts, {searchTextClass: '$searchTextChild2'}) accountRecords;
}