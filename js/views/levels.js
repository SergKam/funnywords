/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/levels.html'
], function ($, _, Backbone, statsTemplate) {
	'use strict';

	return Backbone.View.extend({

		template: _.template(statsTemplate),

		events: {
			'click button.start': 'start'
		},

		render: function () {
            this.$el.html(this.template({
                collection: this.collection
            }));

            return this;
        },

        start: function(event) {
            var level = $(event.target).data('level');
            this.trigger('levelSelected', {level: level});
        }
	});
});
