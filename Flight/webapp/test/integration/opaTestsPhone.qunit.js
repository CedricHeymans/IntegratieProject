/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"be/ap/Flight/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});