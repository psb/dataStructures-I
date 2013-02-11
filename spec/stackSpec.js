describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  describe("add", function() {

    it("should have a method named 'add'", function() {
      expect(stack.add).toEqual(jasmine.any(Function));
    });

    it("should add an item and increase the length of the stack by one per item added", function() {
      stack.add("first");
      stack.add("second");
      stack.add("third");

      expect(stack.size()).toEqual(3);
      //expect(stack.print()).toEqual(", first, second, third");
    });
  });

  describe("remove", function() {

    it("should have a method named 'remove'", function() {
      expect(stack.remove).toEqual(jasmine.any(Function));
    });  

    it("'remove' should return the last item added to the stack", function() {
      stack.add("first");
      stack.add("second");
      stack.add("third");

      stack.remove();

      expect(stack.size()).toEqual(2);
      // Executing remove again will remove the second item becuase of the first remove call.
      expect(stack.remove()).toEqual("second");
    });  
  });

  describe("size", function() {

    it("should have a method named 'size'", function() {
      expect(stack.size).toEqual(jasmine.any(Function));
    });

    it("'size should return the correct length of the array", function() {
      stack.add("first");
      stack.add("second");
      stack.add("third");
      stack.add("4th");
      stack.add("5th");
      expect(stack.size()).toEqual(5);
    });

  });
});