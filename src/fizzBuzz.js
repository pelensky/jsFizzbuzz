var FizzBuzz = function(){};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
};

FizzBuzz.prototype.isDivisibleByFive = function(number){
  return true;
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number){
  return true;
};
