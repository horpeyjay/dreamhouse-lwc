import { LightningElement, wire, track } from 'lwc';
import getAccountsByName from '@salesforce/apex/AccountSearchController.getAccountsByName';

export default class AccountSearchComponent extends LightningElement {
    @track searchKey = '';
    @track accounts;
    @track error;

    columns = [
        { label: 'Account Name', fieldName: 'Name', type: 'text' },
        { label: 'Industry', fieldName: 'Industry', type: 'text' },
        { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
    ];

    handleSearchKeyChange(event) {
        this.searchKey = event.target.value;
    }

    handleSearch() {
        if (this.searchKey.trim()) {
            getAccountsByName({ accountName: this.searchKey })
                .then((result) => {
                    this.accounts = result;
                    this.error = undefined;
                })
                .catch((error) => {
                    this.error = error;
                    this.accounts = undefined;
                });
        }
    }
}
