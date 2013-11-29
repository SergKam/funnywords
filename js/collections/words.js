/*global define*/
define([
	'backbone',
	'backboneLocalstorage',
	'models/wordItem'
], function (Backbone, Store, WordItem) {
	'use strict';

	var WordsCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: WordItem,

		// Save all of the todo items under the `"todos"` namespace.
		localStorage: new Store('words')
	});

	return WordsCollection;
});
