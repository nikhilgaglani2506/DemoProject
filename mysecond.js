var url = require('url');
var adr = 'https://reqres.in/api/users?page=2';
var q = url.parse(adr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata);