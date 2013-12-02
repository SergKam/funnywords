/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/wordsField.html'
], function ($, _, Backbone, wordTemplate) {
	'use strict';

    var RU = 'ru',
        EN = 'en',
        NOT_SELECTED = -1

	var WordsSelectorView = Backbone.View.extend({

		template: _.template(wordTemplate),

		events: {
			'click .word': 'onSelectWord'
		},

		render: function () {
            var positions;

            this.selected = {};
            this.selected[RU] = NOT_SELECTED;
            this.selected[EN] = NOT_SELECTED;

            this.count = this.collection.length;

            positions = _.shuffle(_.range(this.collection.length));

            this.$el.html(this.template({
                collection: this.collection,
                positions: positions
            }));

            return this;
        },

        initRandomPositions: function() {
            this.positions = _.shuffle(_.range(this.collection.length));
        },

        onSelectWord: function(event) {
            var oldIndex,
                $el = $(event.target),
                index = $el.data('index'),
                lang = $el.data('lang');

            //same word selected twice
            //deselect
            if(this.isSelected(index, lang)) {
                this.unselect(index, lang);
                return;
            }

            //I've changed my mind. other word selected
            //deselect old and select new
            if(!this.isSelected(NOT_SELECTED, lang)) {
                oldIndex = this.selected[lang];
                this.unselect(oldIndex, lang);
            }

            this.select(index, lang);

            //pair not selected yet
            if( this.selected[RU] === NOT_SELECTED ||
                this.selected[EN] === NOT_SELECTED ) {
                return;
            }

            //wrong pair selected
            if( this.selected[RU] !== this.selected[EN] ) {
                $el.addClass('wrong');

                setTimeout(function(){
                    $el.removeClass('wrong');
                }.bind($el), 1000);

                return;
            }

            //right! remove word with transaltion
            this.remove(index);

            //Win !!!
            if(this.count === 0) {
                this.trigger('win')
            }
        },

        isSelected: function(index, lang) {
            return  +index === +this.selected[lang];
        },

        select: function(index, lang) {
            this.selected[lang] = index;
            this.findWordElement(index, lang).addClass('selected');
        },

        unselect: function(index, lang) {
            this.selected[lang] = NOT_SELECTED;
            this.findWordElement(index, lang).removeClass('selected');
        },

        findWordElement: function(index, lang) {
            return this.$el.find('.word[data-index='+index+']'+
                    '[data-lang='+lang+']');
        },

        remove: function(index) {
            this.count--;
            this.selected[RU] = NOT_SELECTED;
            this.selected[EN] = NOT_SELECTED;
            this.$el.find('.word[data-index='+index+']').fadeOut();
        }

	});

	return WordsSelectorView;
});
