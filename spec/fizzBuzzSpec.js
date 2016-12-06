describe('FizzBuzz', function() {
  var mony;

  beforeEach(function(){
    mony = new FizzBuzz();
  });

  describe('when a number is', function() {
    it('divisible by 3, should print Fizz', function(){
      expect(mony.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5, should print Buzz', function(){
      expect(mony.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15, should print FizzBuzz', function(){
      expect(mony.isDivisibleByFifteen(15)).toMatch('FizzBuzz');

    });

  });

  describe('when a number is not', function () {
    it('divisible by 3, should print the number', function(){
      expect(mony.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5, should print the number', function(){
      expect(mony.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by 15, should print the number', function(){
      expect(mony.isDivisibleByFifteen(1)).toEqual(1);
    });
  });

  describe('play the game', function() {
    it('says Fizz when 3 is passed', function(){
      expect(mony.says(3)).toMatch('Fizz');
    });

    it('says Buzz when 5 is passed', function(){
      expect(mony.says(5)).toMatch('Buzz');
    });
  });
});
