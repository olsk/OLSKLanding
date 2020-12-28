exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'main'), Object.assign({
					OLSKLandingHeadingText: Math.random().toString(),
					OLSKLandingBlurbText: Math.random().toString(),
					OLSKLandingActionText: Math.random().toString(),
					OLSKLandingActionHref: Math.random().toString(),
				}, Object.fromEntries((new URLSearchParams(req.query)).entries())));
		},
		OLSKRouteSignature: 'OLSKLandingStubRoute',
	}];
};
