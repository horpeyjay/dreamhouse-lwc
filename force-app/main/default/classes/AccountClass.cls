public with sharing class AccountClass {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(string searchTextClass){
        try {
            if(String.isEmpty(searchTextClass)){
                return [Select Id, Name From Account];
            }else{
                return [Select Id, Name From Account  where Name like :('%' + searchTextClass + '%')];
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getAccountContacts(String accountId){
        try {
            return [select Id, Name From Contact where AccountId =:accountId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}