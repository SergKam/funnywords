/*global define*/
define([
	'jquery',
    'underscore',
	'backbone',
    'views/levels',
    'views/wordsSelector',
	'collections/words',
    'collections/levels',
    'data/wordsList'
], function ($, _, Backbone, LevelsView, WordsSelectorView, Words, Levels, data) {
	'use strict';

	var App = Backbone.Router.extend({

        routes: {
            "": "showLevelList",
            "level/:id": "showLevel"
        },

        initialize: function()
        {
            //create presistent level collections
            this.levels = new Levels();
        },

        showLevelList: function() {
            //recreate view
            var levelsView = new LevelsView({ collection: this.levels});

            //go to level on level selected in view
            levelsView.on('levelSelected', function(data) {
                this.navigate("level/" + data.level , {trigger: true});
            }.bind(this));

            //run
            $('#main').html(levelsView.render().el);
        },

		showLevel: function (level) {
            var errors = 0,
                words = new Words(),
                wordsView = new WordsSelectorView({
                    collection: words,
                    level: this.levels.get(level),
                    className: "main-container",
                });

            wordsView.on('win', function() {
                //save progress
                this.levels.get(level).save({
                            'done': true,
                            'errors': errors
                        });

                //go to main start page
                this.navigate("", {trigger: true});
            }.bind(this))

            //on erreor, count error
            .on('error', function() {
                errors++
             });

            //run
            $('#main').html(wordsView.render().el);
		}
	});

	return App;
});
