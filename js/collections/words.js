/*global define*/
define([
	'backbone',
	'backboneLocalstorage',
	'models/wordItem'
], function (Backbone, Store, WordItem) {
	'use strict';

	var WordsCollection = Backbone.Collection.extend({

		model: WordItem,

		// Save all of the todo items under the `"words"` namespace.
		localStorage: new Store('words')
	});

	return WordsCollection;
});
