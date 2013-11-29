/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/intro.html'
], function ($, _, Backbone, statsTemplate) {
	'use strict';

	var IntroView = Backbone.View.extend({

		template: _.template(statsTemplate),

		events: {
			'click button.start':		'start'
		},

		render: function (eventName) {
            $(this.el).html(this.template());
            return this;
        },

        start: function()
        {
            Backbone.history.navigate("level/1", {trigger: true});
        }
	});

	return IntroView;
});
