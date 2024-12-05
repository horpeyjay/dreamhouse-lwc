/*Do not change the name of the class or the method signature.*/

public class CampApexSolution {
    public Boolean isPalindrome(String input) {
      Boolean ispali;
      String reverseString;
      String cleanString = '';
      if(input == ''){
        return true;
      }
      try{
        if(!String.isBlank(input)){
          String s = input.toLowerCase();
          for(integer i = 0; i < s.length(); i++){
            String currentChar = s.subString(i, i + 1);
            if(currentChar == '.'){
              cleanString += currentChar;
            }
            if(currentChar.isAlphanumeric()){
              cleanString += currentChar;
            }
          }
          reverseString = cleanString.reverse();
  
          if(cleanString.equals(reverseString)){
            ispali = true;
          }
        }
      }catch(Exception ex){
        system.debug('Something went wrong' + ex.getMessage());
        ispali = false;
      }
  
      return ispali;
    }
  }