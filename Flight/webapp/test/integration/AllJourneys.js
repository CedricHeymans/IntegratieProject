// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 CarrierSet in the list
// * All 3 CarrierSet have at least one FlightScheduleSet

sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./MasterJourney",
	"./NavigationJourney",
	"./NotFoundJourney",
	"./BusyJourney"
], function (Opa5, Startup) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "be.ap.Flight.view.",
		autoWait: true
	});
});
