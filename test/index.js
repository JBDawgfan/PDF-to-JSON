/**
	 * Requirements
	 */
	

	var chai = require('chai'),
	    assert = require('chai').assert,
	    chaiAsPromised = require('chai-as-promised');
	var resumePdfToJson = require('../index');
	

	

	chai.use(chaiAsPromised);
	

	

	/**
	 * Test Descriptions
	 */
	

		

	    var path = 'JohnBradley.pdf';
	    var output = 'JohnBradley.json';
	

	    var p = resumePdfToJson(path, {'output': output})
	        .then(function(data) {
	            return data;
	        });
	
	   /*var p = resumePdfToJson(path)
	        .then(function(data) {
	            return data;
	        });*/



/**
	 * Requirements
	 */
	

	var chai = require('chai'),
	    assert = require('chai').assert,
	    chaiAsPromised = require('chai-as-promised');
	var resumePdfToJson = require('../index');
	

	

	chai.use(chaiAsPromised);
	

	

	/**
	 * Test Descriptions
	 */
	

		

	    var path = 'JohnBradley.pdf';
	    var output = 'JohnBradley.json';
	

	    var p = resumePdfToJson(path, {'output': output})
	        .then(function(data) {
	            return data;
	        });
	
	   /*var p = resumePdfToJson(path)
	        .then(function(data) {
	            return data;
	        });*/
