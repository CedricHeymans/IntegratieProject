sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, MessageToast, JSONModel) {
		"use strict";

		return Controller.extend("be.ap.helloworld.controller.Master", {
			onInit: function () {
                // new json model
                //new sap.ui.model.json.JSONModel({"name": ""});
                //new JSONModel({"name": ""});
                this.getView().setModel(new sap.ui.model.json.JSONModel({"Name": "Cedric"}), "json");
            },
            onPress: function (evt) {
                //var model = this.getView().getModel("json");
                MessageToast.show(this.getView().getModel("json").getProperty("/Name"));
        }
        });
	});