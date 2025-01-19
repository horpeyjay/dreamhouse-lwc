public with sharing class AccountListControllerLwc {
    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccounts(Integer numberOfEmployees) {
        return [ // Return whatever the component needs
            SELECT Name
            FROM Account
            WHERE NumberOfEmployees >= :numberOfEmployees
        ];
    }

    @AuraEnabled (cacheable=true)
    public static List<Contact> queryRelatedContacts(Id accountId){
        try {
            return [Select Name, Title, Email, Phone From Contact where AccountId = :accountId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Account> queryAccountsByRevenue(Decimal annualRevenue){
        return [ Select Name, Type, Industry, AnnualRevenue
                From Account
                Where AnnualRevenue >= :annualRevenue];
    }
}