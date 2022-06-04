function findFactorial(Num){
    if(Num != undefined){
      var Fact=1;
      while(Num>0){
        Fact *=Num;
        Num -=1;
        }
    alert('the Factorial is:' + Fact)
    }
    else{
      let Num1 = prompt('Enter a Number');
      if(Num1 != null){
        findFactorial(Num1);
      }
      else{
          alert('No Values Entered!')
          findFactorial();
      }
    }
}

findFactorial();