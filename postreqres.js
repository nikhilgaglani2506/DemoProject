var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'https://reqres.in/api/users',
    method: 'POST',
    headers: headers,
    form: {'name': 'Name1', 'job': 'Tester'}
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 201) {
        // Print out the response body
        console.log(body)
    }
})