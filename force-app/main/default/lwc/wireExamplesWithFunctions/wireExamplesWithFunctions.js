import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class WireExamplesWithFunctions extends LightningElement {
    @api recordId;
    @track accounts;
    @track error;

    @wire(getRecord, { recordId: '$recordId', fields: ['Account.Name', 'Account.Phone'] })
    wiredAccounts({ data, error }) {
        if (data) {
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            this.accounts = undefined;
            this.error = error;
        }
    }

    get getName() {
        // Ensure data is available before accessing fields
        return this.accounts?.fields?.Name?.value || 'N/A';
    }

    get getPhone() {
        // Ensure data is available before accessing fields
        return this.accounts?.fields?.Phone?.value || 'N/A';
    }
}
