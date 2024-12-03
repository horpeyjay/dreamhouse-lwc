public with sharing class AccountSearchController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsByName(String accountName) {
        return [
            SELECT Id, Name, Industry, AnnualRevenue 
            FROM Account 
            WHERE Name LIKE :('%' + accountName + '%') 
            LIMIT 50
        ];
    }
}
