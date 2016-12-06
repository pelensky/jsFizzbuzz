describe('FizzBuzz', function() {
  var mony;

  beforeEach(function(){
    mony = new FizzBuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function (){
      expect(mony.isDivisibleByThree(3)).toBe(true);
      expect(mony.isDivisibleByThree(6)).toBe(true);
    });

    it('divisible by 5', function(){
      expect(mony.isDivisibleByFive(5)).toBe(true);
      expect(mony.isDivisibleByFive(10)).toBe(true);
    });

    it('divisible by 15', function(){
      expect(mony.isDivisibleByFifteen(15)).toBe(true);
      expect(mony.isDivisibleByFifteen(30)).toBe(true);
    });

  });

  describe('knows when a number is not', function () {
    it('divisible by 3', function(){
      expect(mony.isDivisibleByThree(1)).toBe(false);
      expect(mony.isDivisibleByThree(4)).toBe(false);
    });

    it('divisible by 5', function(){
      expect(mony.isDivisibleByFive(1)).toBe(false);
      expect(mony.isDivisibleByFive(7)).toBe(false);
    });

    it('divisible by 15', function(){
      expect(mony.isDivisibleByFifteen(1)).toBe(false);
      expect(mony.isDivisibleByFifteen(9)).toBe(false);
    });

  });

});
