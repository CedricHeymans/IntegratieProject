/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"be/ap/Shopping/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});