describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  describe("add", function() {
	  it("should have a method named 'add'", function() {
	    expect(queue.add).toEqual(jasmine.any(Function));
	  });

	  it("the size of the queue should increase upon the addition of items", function() {
	  	queue.add("first");
	  	queue.add("second");
	  	queue.add("third");

	    expect(queue.size()).toEqual(3);
	  });
  });

	describe("remove", function() {
	  it("should have a method named 'remove'", function() {
	    expect(queue.remove).toEqual(jasmine.any(Function));
	  });

	  it("should decrement the length of the queue per removal", function() {
	  	queue.add("first");
	  	queue.add("second");
	  	queue.add("third");
	  	queue.add("fourth");
	  	queue.remove()

	    expect(queue.size()).toEqual(3);
	  });

	  it("should return the removed item", function() {
	  	queue.add("first");
	  	queue.add("second");
	  	queue.add("third");
	  	queue.add("fourth");
	  	
	    expect(queue.remove()).toEqual("first");
	    expect(queue.remove()).toEqual("second");
	  });

	  it("should delete removed nodes/objects", function() {
	  	queue.add("first");
	  	queue.add("second");
	  	queue.add("third");
	  	queue.add("fourth");
	  	
	  	queue.remove();
	  	queue.remove();

	    expect(queue[0]).toBeFalsy();
	    expect(queue[1]).toBeFalsy();
	  });
  	
  });
	describe("size", function() {
	  it("should have a method named 'size'", function() {
	    expect(queue.size).toEqual(jasmine.any(Function));
	  });

	  it("should return the correct size of the queue", function() {
	    queue.add("first");
	    queue.add("second");
	    queue.add("third");
	    queue.add("fourth");
	    queue.add("fifth");
	    queue.add("sixth");

	    expect(queue.size()).toEqual(6);
	  });
  	
  });

});