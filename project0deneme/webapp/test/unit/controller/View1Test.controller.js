/*global QUnit*/

sap.ui.define([
	"project0deneme/controller/View1Test.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1Test Controller");

	QUnit.test("I should test the View1Test controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
