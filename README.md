# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.4.8 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.5.4
- [Gaikan](https://github.com/Deathspike/gaikan) v1.3.4
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v1.0.9 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v2.0.0 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v0.28.1 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v0.13.5
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))

## Results

### CentOS 6.5, Node.js v6.2.0

	Rendering 100000 templates:

	ECT
	  Escaped   : 1501ms
	  Unescaped : 105ms
	  Total     : 1606ms

	Hogan.js
	  Escaped   : 1764ms
	  Unescaped : 289ms
	  Total     : 2053ms

	Handlebars.js
	  Escaped   : 2494ms
	  Unescaped : 621ms
	  Total     : 3115ms

	Jade without `with`
	  Escaped   : 2835ms
	  Unescaped : 841ms
	  Total     : 3676ms

	Dust
	  Escaped   : 3012ms
	  Unescaped : 1236ms
	  Total     : 4248ms

	Swig
	  Escaped   : 3929ms
	  Unescaped : 237ms
	  Total     : 4166ms

	Underscore
	  Escaped   : 2103ms
	  Unescaped : 1312ms
	  Total     : 3415ms

	Eco
	  Escaped   : 5172ms
	  Unescaped : 1389ms
	  Total     : 6561ms

	nunjucks
	  Escaped   : 5506ms
	  Unescaped : 3880ms
	  Total     : 9386ms

	EJS without `with`
	  Escaped   : 3043ms
	  Unescaped : 1222ms
	  Total     : 4265ms

	Jade
	  Escaped   : 6204ms
	  Unescaped : 3767ms
	  Total     : 9971ms

	EJS
	  Escaped   : 6900ms
	  Unescaped : 4113ms
	  Total     : 11013ms

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
