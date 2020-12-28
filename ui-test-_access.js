const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKLanding: '.OLSKLanding',
	
	OLSKDecorLandingHeading: '.OLSKDecorLandingHeading',
	OLSKDecorLandingBlurb: '.OLSKDecorLandingBlurb',
	OLSKDecorPressCall: '.OLSKDecorPressCall',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKLanding_Access', function () {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OLSKLanding', function() {
		browser.assert.elements(OLSKLanding, 1);
	});

	it('shows OLSKDecorLandingHeading', function () {
		browser.assert.elements(OLSKDecorLandingHeading, 1);
	});

	it('shows OLSKDecorLandingBlurb', function () {
		browser.assert.elements(OLSKDecorLandingBlurb, 1);
	});

	it('shows OLSKDecorPressCall', function () {
		browser.assert.elements(OLSKDecorPressCall, 1);
	});
	
});
