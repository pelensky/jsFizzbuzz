describe('FizzBuzz', function() {
  var mony;

  describe('knows when a number is', function() {

    it('divisible by 3', function (){
      mony = new FizzBuzz();
      expect(mony.isDivisibleByThree(3)).toBe(true);
    });

  });

});
