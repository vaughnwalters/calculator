describe("The specification for basic math", function() {

  it("should have an add function", function() {
    expect(add).toBeDefined();
  });

  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
  });

  it("should have a subtract function", function() {
    expect(subtract).toBeDefined();
  });

  it("should subtract two integers", function() {
    expect(subtract(7, 5)).toBe(2);
  });

  it("should have a multiply function", function() {
    expect(multiply).toBeDefined();
  });

  it("should multiply two integers", function() {
    expect(multiply(7, 5)).toBe(35);
  });  

  it("should have a divide function", function() {
    expect(divide).toBeDefined();
  });

  it("should divide two integers", function() {
    expect(divide(14, 2)).toBe(7);
  });
  
  it("should have a square function", function() {
    expect(square).toBeDefined();
  });

  it("should square an integer", function() {
    expect(square(4)).toBe(16);
  });  

  it("should have a squareRoot function", function() {
    expect(squareRoot).toBeDefined();
  });

  it("should find squareRoot of an integer", function() {
    expect(squareRoot(64)).toBe(8);
  });

});

