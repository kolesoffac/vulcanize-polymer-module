define(function () { 'use strict';
	var utils = {};

	utils.loadVulcanized = function(url, urlVulcanized, controller, html, store) {
		return new Promise(function(resolve, reject) {
			var link;

			if (!window.isLoadedVulcanized) {
				link = document.createElement('link');

				link.rel = 'import';
				link.href = urlVulcanized || '../vulcanize-polymer-module/imports.vulcanized.min.html';
				link.setAttribute('async', ''); // make it async!
				link.onload = function(e) {
					window.isLoadedVulcanized = true;
					!Polymer.ReduxBehavior && store && (Polymer.ReduxBehavior = PolymerRedux(store));

					resolve();
				};

				document.head.appendChild(link);
			} else {
				resolve();
			};
		}).then(function() {
			return new Promise(function(resolve, reject) {
				if (url) {
					Polymer.Base.importHref([url], function() {
						html && html.set && controller && html.set('controller', controller);
						resolve();
					}, null, true);
				} else {
					resolve();
				};
			});
		});
	}

	return utils;
});