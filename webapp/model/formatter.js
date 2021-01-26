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

        //Convert date to dd/mm/yyyy 
        dateValue : function (sValue) {
            var sDate = new Date(sValue);
            return (
                "0" + sDate.getDay()).slice(-2) + "/" 
                + ("0" + sDate.getMonth()).slice(-2) + "/" 
                + ("0" + sDate.getFullYear()).slice(-4);
        },

        //Remove leading zero's
        leadingzero : function (sValue) {
            var number;
            return(
                number = parseInt(sValue, 10)
            );
        },
	};
});