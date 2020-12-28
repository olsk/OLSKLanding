const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKLanding_Misc', function () {

	const item = {
		OLSKLandingHeadingText: Math.random().toString(),
		OLSKLandingBlurbText: Math.random().toString(),
		OLSKLandingActionText: Math.random().toString(),
		OLSKLandingActionHref: Math.random().toString(),
	};

	before(function () {
		return browser.OLSKVisit(kDefaultRoute, item);
	});

	describe('OLSKLanding', function test_OLSKLanding () {
		
		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(OLSKLanding, 'OLSKCommonCard');
		});

	});

	describe('OLSKDecorLandingHeading', function test_OLSKDecorLandingHeading () {

		it('sets text', function () {
			browser.assert.text(OLSKDecorLandingHeading, item.OLSKLandingHeadingText);
		});
		
	});

	describe('OLSKDecorLandingBlurb', function test_OLSKDecorLandingBlurb () {

		it('sets text', function () {
			browser.assert.text(OLSKDecorLandingBlurb, item.OLSKLandingBlurbText);
		});
		
	});

	describe('OLSKDecorPressCall', function test_OLSKDecorPressCall () {

		it('sets href', function () {
			browser.assert.attribute(OLSKDecorPressCall, 'href', item.OLSKLandingActionHref);
		});

		it('sets text', function () {
			browser.assert.text(OLSKDecorPressCall, item.OLSKLandingActionText);
		});
		
	});

});
