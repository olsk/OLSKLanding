const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKLanding: '.OLSKLanding',
	
	OLSKLandingHeading: '.OLSKLandingHeading',
	OLSKLandingBlurb: '.OLSKLandingBlurb',
	OLSKLandingAction: '.OLSKLandingAction',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKLanding_Access', function () {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OLSKLanding', function() {
		return browser.assert.elements(OLSKLanding, 1);
	});

	it('shows OLSKLandingHeading', function () {
		return browser.assert.elements(OLSKLandingHeading, 1);
	});

	it('shows OLSKLandingBlurb', function () {
		return browser.assert.elements(OLSKLandingBlurb, 1);
	});

	it('shows OLSKLandingAction', function () {
		return browser.assert.elements(OLSKLandingAction, 1);
	});
	
});
