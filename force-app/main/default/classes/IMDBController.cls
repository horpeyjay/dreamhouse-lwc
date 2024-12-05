public with sharing class IMDBController {
    @AuraEnabled (cacheable=true)
    public static string getMovies(String searchText){
        try {
            Http http = new Http();
            HttpRequest request = new HttpRequest();
            //request.setEndpoint('https://api.collectapi.com/imdb/imdbSearchByName?query='+searchText); //remote site setting
            //FOR NAMED CREDENTIALS
            request.setEndpoint('callout:IMDB/imdb/imdbSearchByName?query='+searchText);
            request.setMethod('GET');
            //request.setHeader('authorization', 'apikey 7gNSLiJLx0iNUADnsR8CJ0:1NqTCleB01mEAU2Sz7bu1y');
            
            HttpResponse response = http.send(request);
            if (response.getStatusCode() == 200) {
                String responseBody = response.getBody();
                return responseBody;
                //system.debug(responseBody);
            }else{
                String errorMessage = 'Error ' + response.getStatusCode() + ' - ' + response.getStatus();
                return errorMessage;
            } 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
            
        }
    }
}