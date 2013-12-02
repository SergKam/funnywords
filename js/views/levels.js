/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/intro.html'
], function ($, _, Backbone, statsTemplate) {
	'use strict';

	return Backbone.View.extend({

		template: _.template(statsTemplate),

		events: {
			'click button.start': 'start'
		},

		render: function () {
            $(this.el).html(this.template());
            return this;
        },

        start: function(event) {
            var level = $(event.target).data('level');
            this.trigger('levelSelected', {level: level});
        }
	});
});
