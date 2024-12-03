public with sharing class AccountHelper {
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountList(Id accId){
        try {
            return [Select Name, Phone From Account where Id = : accId Limit 1];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}