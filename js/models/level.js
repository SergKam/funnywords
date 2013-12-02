/*global define*/
define([
	'backbone'
], function (Backbone) {
	'use strict';

	var Level = Backbone.Model.extend({
		defaults: {
			done: false,
            time: 0
		}
	});

	return Level;
});
