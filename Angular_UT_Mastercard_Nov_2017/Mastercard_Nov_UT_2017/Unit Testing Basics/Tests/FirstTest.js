
function Addition(x,y){
    return x + y;
}


describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(true).toBe(true);
    });
  });

  describe("A suite for addition of numbers", function() {
    it("should addtwo numbers", function() {
      expect(Addition(20,30)).toBe(50);
    });
  });