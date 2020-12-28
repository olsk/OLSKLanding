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

	describe('OLSKLandingHeading', function test_OLSKLandingHeading () {

		it('sets text', function () {
			browser.assert.text(OLSKLandingHeading, item.OLSKLandingHeadingText);
		});
		
	});

	describe('OLSKLandingBlurb', function test_OLSKLandingBlurb () {

		it('sets text', function () {
			browser.assert.text(OLSKLandingBlurb, item.OLSKLandingBlurbText);
		});
		
	});

	describe('OLSKLandingAction', function test_OLSKLandingAction () {

		it('classes OLSKDecorPress', function () {
			browser.assert.hasClass(OLSKLandingAction, 'OLSKDecorPress');
		});

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(OLSKLandingAction, 'OLSKDecorPressCall');
		});

		it('sets href', function () {
			browser.assert.attribute(OLSKLandingAction, 'href', item.OLSKLandingActionHref);
		});

		it('sets text', function () {
			browser.assert.text(OLSKLandingAction, item.OLSKLandingActionText);
		});
		
	});

});
