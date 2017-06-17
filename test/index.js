/**
	 * Requirements
	 */
	

	var resumePdfToJson = require('../index');
	


	

	/**
	 * Test Descriptions
	 */
	

		

	    var path = 'JohnBradley.pdf';
	    var output = 'JohnBradley.json';
	

	  /*var p = resumePdfToJson(path, {'output': output})
	        .then(function(data) {
	            return data;
	        });*/
	
	    var p = resumePdfToJson(path)
	        .then(function(data) {
	            return data;
	        });




