/*global define*/
define([
	'backbone',
	'backboneLocalstorage',
	'models/wordItem',
    'data/wordsList'
], function (Backbone, Store, WordItem, wordList) {
	'use strict';

	var WordsCollection = Backbone.Collection.extend({

		model: WordItem,

        loadLevel: function(level) {
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

            this.add(result);
        }
	});

	return WordsCollection;
});
