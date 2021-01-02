sap.ui.define([], function () {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue : function (sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
        },
        
        timeValue : function (sValue) {
            var sDate = new Date(sValue);
            return (
                "0" + sDate.getHours()).slice(-2) + ":" 
                + ("0" + sDate.getMinutes()).slice(-2) + ":" 
                + ("0" + sDate.getSeconds()).slice(-2);
        },

        dateValue : function (sValue) {
            var sDate = new Date(sValue);
            return (
                "0" + sDate.getDay()).slice(-2) + "/" 
                + ("0" + sDate.getMonth()).slice(-2) + "/" 
                + ("0" + sDate.getFullYear()).slice(-4);
        },
	};
});