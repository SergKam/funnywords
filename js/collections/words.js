/*global define*/
define([
	'backbone',
	'backboneLocalstorage',
	'models/wordItem',
    'data/wordsList'
], function (Backbone, Store, WordItem, data) {
	'use strict';

	var WordsCollection = Backbone.Collection.extend({

		model: WordItem,
        initialize: function()
        {
            this.getPart()
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

	return WordsCollection;
});
