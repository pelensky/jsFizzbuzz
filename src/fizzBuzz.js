var FizzBuzz = function(){};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
};

FizzBuzz.prototype.isDivisibleByFive = function(number){
  return number % 5 === 0;
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number){
  if(number % 15 === 0){
    return 'FizzBuzz';
  }else{
    return number;
  };
};

FizzBuzz.prototype.says = function(number){
  if(this.isDivisibleByThree(number)){
    return 'Fizz';
  }else if(this.isDivisibleByFive(number)){
    return 'Buzz';
  }else{
    return number;
  };
};
