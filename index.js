'use strict';

var Plugin = require('markdown-it-regexp');

module.exports = function fontawesome_plugin(md) {
	md.use(Plugin(
		/\:fa-(\w+)\:/,
		function (match, utils) {
			return '<i class="fa fa-' + utils.escape(match[1]) + '"></i>';
		}
	));
};