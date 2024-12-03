import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
import { LightningElement, wire , api} from 'lwc';

export default class WireExampleWithApex extends LightningElement {
    @api recordId;
    @wire (getAccountList, {accId: '$recordId'} ) accounts;
}