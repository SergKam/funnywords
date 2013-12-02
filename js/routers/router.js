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

        showLevelList: function() {
            var levels = new Levels(),
                levelsView = new LevelsView({ collection: levels});

            levelsView.on('levelSelected', function(data) {
                this.navigate("level/" + data.level , {trigger: true});
            }.bind(this));

            $('#main').html(levelsView.render().el);
        },

		showLevel: function (level) {
            var words = new Words(this.getPart(data, level)),
                wordsView = new WordsSelectorView({
                    collection: words,
                    className: "main-container",
                });

            wordsView.on('win', function() {
               this.navigate("", {trigger: true});
            }.bind(this));

            $('#main').html(wordsView.render().el);
		},

        getPart: function(wordList, level) {
            var word,
                start = level * 10,
                result = [];

            for(word in wordList) {
                result.push({
                    en: word,
                    ru: wordList[word]
                })
            }

            result = _.shuffle(result.slice( start, start + 10));

            return result;
        }
	});

	return App;
});
