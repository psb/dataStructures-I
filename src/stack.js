// Note: don't use javascript's native array functions to do this.
var makeStack = function(){
  
	var stack = {
    topNode: undefined,  // Item added to stack and item to be removed.
    lastTop: undefined,  // Previous item to the topNode.
    length: 0,           // Length of the stack.
    stackContents: [],   // Only for the print checking function.

		add: function (value) {
      var addedNode = {};
      addedNode.lastTop = this.topNode ? this.topNode.lastTop + 1 : 0;
      addedNode.length = this.topNode ? this.topNode.length + 1 : 1;
      addedNode.contents = value;

      this[addedNode.length] = addedNode;  // Insert the new node into the this object at addedNode.length key.
      this.topNode = addedNode;

      this.stackContents.push(addedNode);   // Only for the print chekcing function.
    },

    remove: function() {
      var topNodeContents = this.topNode.contents;
      // Delete topNode from stack object???
      this.topNode = this[this.topNode.lastTop];
      this.lastTop = this[this.topNode.lastTop];  // lastTop set to the lastTop of the topNode becuase of tpNode reassignment
      this.length = this.topNode.length;

      //this.stackContents.pop(); // Only for the print function.

      return topNodeContents;
    },
      
    size: function() {
      return this.topNode.length
    },

    // Only for checking the 'contents' of the array.
    print: function() {
      stackContentsString = '';
      for (var i = 0, len = this.stackContents.length; i < len; i++) {
        stackContentsString += ", " + this.stackContents[i].contents;
      }
      console.log(stackContentsString);
    }
  		
  };

	return stack;
}



