/*global define*/
define([
	'jquery',
	'backbone',
    'views/intro',
    'views/wordsSelector',
	'collections/words'
], function ($, Backbone, IntroView, WordsSelectorView, Words) {
	'use strict';

	var Workspace = Backbone.Router.extend({

        routes:{
            "":"showIntro",
            "level/:id": "level"
        },

        showIntro: function()
        {
            var introView = new IntroView();
            $('#main').html(introView.render().el);
        },

		level: function (level) {
            var words,
                wordsView,
                data = [{
                        en:'tree',
                        ru: 'Дерево'
                    },{
                        en:'leaf',
                        ru: 'Лист'
                    }];

            words = new Words(data);

            wordsView = new WordsSelectorView({ collection: words });

            $('#main').html(wordsView.render().el);
		}
	});

	return Workspace;
});
