var FizzBuzz = function(){};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  if(number % 3 === 0){
    return 'Fizz';
  }else{
    return number;
  };
};

FizzBuzz.prototype.isDivisibleByFive = function(number){
  if(number % 5 === 0){
    return 'Buzz';
  }else{
    return number;
  };
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number){
  if(number % 15 === 0){
    return 'FizzBuzz';
  }else{
    return number;
  };
};

FizzBuzz.prototype.says = function(number){
  return this.isDivisibleByThree(number);
};
