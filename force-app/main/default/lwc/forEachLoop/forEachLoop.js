import { LightningElement } from 'lwc';

export default class ForEachLoop extends LightningElement {
    employee = {
        firstName: 'Opeyemi',
        lastName: 'Oni',
        city : 'Osogbo',
        age : '25'
    };

    employeeList = [
        {
            firstName: 'Opeyemi',
            lastName: 'Oni',
            city : 'Lagos',
            age : '19'
        },
        {
            firstName: 'Tawio',
            lastName: 'Oni',
            city : 'Ilesha',
            age : '45'
        },
        {
            firstName: 'Test',
            lastName: 'Oni',
            city : 'Abuja',
            age : '75'
        }
    ];
}