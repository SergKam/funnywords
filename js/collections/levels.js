/*global define*/
define([
	'backbone',
	'backboneLocalstorage',
	'models/level'
], function (Backbone, Store, Level) {
	'use strict';

	var Levels = Backbone.Collection.extend({
        model: Level,

        // Save all of the todo items under the `"word_levels"` namespace.
        localStorage: new Store('word_levels')
    });

    return Levels;
});