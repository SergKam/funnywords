/*global define*/
define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var WordItem = Backbone.Model.extend({
		defaults: {
			en: '',
			ru: ''
		}
	});

	return WordItem;
});
