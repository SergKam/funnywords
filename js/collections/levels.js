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
        localStorage: new Store('word_levels'),

        initialize: function() {
            var i,
                count = 10;
            //trying to load from starage
            this.fetch();

            //loaded
            if(this.length) {
                return;
            }

            //not loaded, creating new
            for( i = 0; i < count; i++ ) {
                this.create({
                        id: i,
                        done: false,
                        time: 0
                });
            }
        }
    });

    return Levels;
});