var data = require('./data');

var count = 100000;
var ect = require('./ect/ect.js');
var ejs = require('./ejs/ejs.js');
var ejsWithoutWith = require('./ejs-without-with/ejs.js');
var jade = require('./jade/jade.js');
var jadeWithoutWith = require('./jade-without-with/jade.js');
var eco = require('./eco/eco.js');
var swig = require('./swig/swig.js');
var hogan = require('./hogan/hogan.js');
var dust = require('./dust/dust.js');
var dot = require('./dot/dot.js');
var handlebars = require('./handlebars/handlebars.js');
var underscore = require('./underscore/underscore.js');
var nunjucks = require('./nunjucks/nunjucks.js')

var test = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	}
	sample.prepare(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var testUnescaped = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	}
	sample.prepareUnescaped(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var samples = [
	{ name : 'EJS', sample : ejs },
	{ name : 'Jade', sample : jade },
	{ name : 'EJS without `with`', sample : ejsWithoutWith },
	{ name : 'nunjucks', sample : nunjucks },
	{ name : 'Eco', sample : eco },
	{ name : 'Underscore', sample : underscore },
	{ name : 'Swig', sample : swig },
	{ name : 'Dust', sample : dust },
	{ name : 'Jade without `with`', sample : jadeWithoutWith },
	{ name : 'Handlebars.js', sample : handlebars },
	{ name : 'Hogan.js', sample : hogan },
	{ name : 'ECT', sample : ect },
];

var runTests = function () {
	if (samples.length) {
		var sample = samples.pop();
		test(sample.name, sample.sample, function (err, name, result) {
			testUnescaped(sample.name, sample.sample, function (err, name, resultUnescaped) {
				console.log(name);
				console.log('  Escaped   : ' + result + 'ms');
				console.log('  Unescaped : ' + resultUnescaped + 'ms');
				console.log('  Total     : ' + (result + resultUnescaped) + 'ms');
				console.log('');
				runTests();
			});
		});
	}
};

console.log('Rendering ' + count + ' templates:\n');
runTests();
