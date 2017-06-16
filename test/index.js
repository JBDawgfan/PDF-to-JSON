
/**
 * Test Descriptions
 */

describe('resumePdfToJson', function() {


    var path = 'test/JohnBradleyProfile.pdf';
    var output = 'test/JohnBradley.json';

    var p = resumePdfToJson(path, {'output': output})
        .then(function(data) {
            return data;
        });

   
    });


});

