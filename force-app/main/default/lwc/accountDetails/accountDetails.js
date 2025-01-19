import { LightningElement, wire, api } from 'lwc';
import queryRelatedContacts from '@salesforce/apex/AccountListControllerLwc.queryRelatedContacts';

export default class AccountDetails extends LightningElement {
    @api recordId;
    @wire(queryRelatedContacts, {accountId: '$recordId'}) contacts;
}