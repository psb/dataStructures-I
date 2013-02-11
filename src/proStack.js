// Note: don't use javascript's native array functions to do this.

var makeStack = function(){

	function add(value) {
		var addedNode = {};
		addedNode.lastTop = topNode ? topNode.lastTop + 1 : 0;
		addedNode.length = topNode ? topNode.length + 1 : 0;
		addedNode.contents = value;

		stack.topNode = addedNode;

  	}

  	function remove(value) {
  		
  	}
  
	var stack = {
  		add: add,
  		remove: remove,
  		size: getSize,
  		topNode: undefined
  	};

	return stack;
}


