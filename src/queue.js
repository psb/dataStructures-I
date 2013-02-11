// Note: don't use javascript's native array functions to do this.
var makeQueue = function(){
  
	var queue = {
	    head: 0,  // Head of the queue.
	    nodeLocation: 0,
		tail: -1,
	    length: 0,
	    queueContents: [],

		add: function (value) {
	      var addedNode = {};
	      addedNode.contents = value;
	      // Set locaiton of last node.
	      this.tail++;
	      // Insert node into queue object.
	      this[this.nodeLocation] = addedNode;
	      // Increase the nodeLocation to insert a new node at a new key in the queue.
	      this.nodeLocation++;
	      // Increase length of queue upon addition of item.
	      this.length++;

	      this.queueContents.push(addedNode);  // Just for printing function.
	    },

	    remove: function() {
	      var loc = this.head; // Location 'key' of object at the front of the queue.
	      var headNodeContents = this[loc].contents; // Get contents of the head node.
	      this.length--; // Reduce the length of the queue upon removal of item.
	      // Remove deleteed node.
	      delete(this[this.head]);
	      // Increase the head of the queue to point to the new head after removing the old one.
	      this.head++;

	      this.queueContents.pop(); // Only for the print function.

	      return headNodeContents;
	    },
	      
	    size: function() {
	      return this.length
	    },

	    // Only for checking the 'contents' of the array.
	    print: function() {
	      queueContentsString = '';
	      for (var i = 0, len = this.queueContents.length; i < len; i++) {
	        queueContentsString += ", " + this.queueContents[i].contents;
	      }
	      console.log(queueContentsString);
	    }
	  		
  	};

  	return queue;
}
