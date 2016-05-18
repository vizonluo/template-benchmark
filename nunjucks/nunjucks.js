var fs = require('fs')
var njk = require('nunjucks');
var compiled;
var tplData;
var tpl;
var i = 0;

module.exports.prepare = function (data, done) {
	tplData = data;
    var str = fs.readFileSync(__dirname + '/tpl_escaped.njk', 'utf8');
	compiled = njk.compile(str, undefined, undefined, true);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
    var str = fs.readFileSync(__dirname + '/tpl_unescaped.njk', 'utf8');
	compiled = njk.compile(str, undefined, undefined, true);
	done();
};

module.exports.step = function (done) {
	var html = compiled.render(tplData);
	done(undefined, html);
};
