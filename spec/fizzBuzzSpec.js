describe('FizzBuzz', function() {
  var mony;

  describe('knows when a number is', function() {

    it('divisible by 3', function (){
      mony = new FizzBuzz();
      expect(mony.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function(){
      mony = new FizzBuzz();
      expect(mony.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function(){
      mony = new FizzBuzz();
      expect(mony.isDivisibleByFifteen(15)).toBe(true);
    });

  });

});
