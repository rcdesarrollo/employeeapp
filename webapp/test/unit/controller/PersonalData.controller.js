/*global QUnit*/

sap.ui.define([
	"nscom./employeeapp/controller/PersonalData.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PersonalData Controller");

	QUnit.test("I should test the PersonalData controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
