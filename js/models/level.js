/*global define*/
define([
	'backbone'
], function (Backbone) {
	'use strict';

	var Level = Backbone.Model.extend({
		defaults: {
            id: 0,
			done: false,
            errors: 0,
            time: 0
		}
	});

	return Level;
});
