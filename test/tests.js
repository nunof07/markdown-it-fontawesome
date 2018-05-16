'use strict';

var describe = require('mocha').describe;
var it = require('mocha').it;
var before = require('mocha').before;
var expect = require('chai').expect;
var md = require('markdown-it')();
var MarkdownFa = require('../index.js');

describe('Font Awesome tests', function () {
    before(function () {
        md.use(MarkdownFa);
    });

    it('Should convert simple :fa-flag: style definitions to FA4 format', function(done) {
        // Convert the markdown.
        var output = md.render(':fa-flag:');

        // Assert it contains the correct font awesome HTML.
        expect(output).to.contain('<i class="fa fa-flag"></i>');
        done();
    });

    it('Should convert brand and light :fab-github: :fal-something: style definitions to FA5 format', function(done) {
        // Convert the markdown.
        var output = md.render(':fal-flag: :fab-github:');

        // Assert it contains the correct font awesome HTML.
        expect(output).to.contain('<i class="fal fa-flag"></i>');
        expect(output).to.contain('<i class="fab fa-github"></i>');
        done();
    });
});
