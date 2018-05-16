'use strict';

var Plugin = require('markdown-it-regexp');

module.exports = function fontawesome_plugin(md) {
	// FA4 style.
	md.use(Plugin(
		/\:fa-([\w\-]+)\:/,
		function (match, utils) {
			return '<i class="fa fa-' + utils.escape(match[1]) + '"></i>';
		}
	));

    // FA5 style.
    md.use(Plugin(
        /\:fa([\w])-([\w\-]+)\:/,
        function (match, utils) {
            return '<i class="fa' + utils.escape(match[1]) + ' fa-' + utils.escape(match[2]) + '"></i>';
        }
    ));
};