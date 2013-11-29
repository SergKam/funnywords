/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/wordsField.html'
], function ($, _, Backbone, wordTemplate) {
	'use strict';

	var WordsSelectorView = Backbone.View.extend({

		template: _.template(wordTemplate),

		events: {
			'click .word': 'selectWord'
		},

		render: function () {
            this.leftSlot = [];
            this.rightSlot = [];

            this.collection.forEach(this.addWord, this);
            return this;
        },

        addWord: function(wordModel)
        {
            this.$el.append(this.template({
                word: wordModel.get('ru'),
                translation:  wordModel.get('en'),
                slot: this.selectFreeSlot(this.leftSlot),
                side: 'left'
            }));

            this.$el.append(this.template({
                word:wordModel.get('en'),
                translation:  wordModel.get('ru'),
                slot: this.selectFreeSlot(this.rightSlot),
                side: 'right'
            }));
        },

        selectFreeSlot: function(slotList)
        {
            do {
                var index = Math.round(Math.random() * 10);
            }
            while(slotList[index])

            slotList[index] = 1;

            return index;
        },

        selectWord: function(event)
        {
            $(event.target).toggleClass('selected');

        }

	});

	return WordsSelectorView;
});
