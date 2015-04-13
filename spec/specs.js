describe('getWordOrder', function() {
  it("returns 0 for input of 0", function() {
    expect(binaryTranslator('0')).to.equal(0);
  });

  it("returns 1 for input of 1", function() {
    expect(binaryTranslator('1')).to.equal(1);
  });

  it("returns 2 for input of 10", function() {
    expect(binaryTranslator('10')).to.equal(2);
  });

  it("returns 3 for input of 11", function() {
    expect(binaryTranslator('11')).to.equal(3);
  });

  it("returns 4 for input of 100", function() {
    expect(binaryTranslator('100')).to.equal(4);
  });

  it("returns 9 for input of 1001", function() {
    expect(binaryTranslator('1001')).to.equal(9);
  });
});
