

const createArrayWithDots = function (string) {
   let arrayOfCombination = [string,];
   
   for (i = string.length - 1; i > 0; i--) {
      
      for (let key in arrayOfCombination) {
         
         arrayOfCombination.push(arrayOfCombination[key].slice(0, i) + "." + arrayOfCombination[key].slice(i)); 
         
      }
   }
   return arrayOfCombination
}
    













