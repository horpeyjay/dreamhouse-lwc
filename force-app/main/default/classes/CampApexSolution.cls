public with sharing class CampApexSolution {
    /*Do not change the name of the class or the method signature.*/
    public Integer calculateRecipeSum(List<String> recipeLines) {
        List<Integer> recipesNumbers = new List<Integer>();
        if(!recipeLines.isEmpty() || recipeLines.size()> 0){
            for(String s : recipeLines){
                String currentWord = s;
                system.debug(currentWord);
                String currentNum = '';
                for(Integer i = 0; i < currentWord.length(); i++){
                    String currentChar = currentWord.subString(i, i+1);
                    
                    if(currentChar.isNumeric()){
                        currentNum += currentChar;
                    }

                    if(currentNum.length() >= 2){
                        currentNum = currentNum.subString(0,1) + currentNum.substring(currentNum.length() - 1, currentNum.length());
                        system.debug(currentNum);
                    }
                }

                recipesNumbers.add(Integer.valueOf(currentNum));
                system.debug(recipesNumbers);


            }
        }
        Integer totalRecipesCount = 0;
        if(!recipesNumbers.isEmpty()){
            for(Integer i : recipesNumbers){
                totalRecipesCount += i;
            }
            system.debug('total: ' + totalRecipesCount);
        }

        return totalRecipesCount;
        
    }
} 
