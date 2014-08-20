var Spinner = require('./index.js');
var s = Spinner();

setInterval(function(){
	console.log("\r  \033[36mcomputing\033[m %s ", s.next())
}, 250);