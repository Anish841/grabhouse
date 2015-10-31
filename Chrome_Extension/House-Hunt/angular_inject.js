var $rootScope = angular.element($('.details-block')[0]).injector().get('$rootScope');
var listings_js = $rootScope.listings
document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
	detail: {
		listings: listings_js
	}
}));