/*global define*/
define([
	'backbone'
], function (Backbone) {
	'use strict';

	var WordItem = Backbone.Model.extend({
		defaults: {
			en: '',
			ru: ''
		}
	});

	return WordItem;
});
