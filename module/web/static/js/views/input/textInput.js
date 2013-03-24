define(['jquery', 'backbone', 'underscore', './inputView'], function($, Backbone, _, inputView) {

    return inputView.extend({

        // TODO
        tagName: 'input',
        events: {
            'keypress': 'onChange'
        },

        render: function() {
            this.$el.attr('type', 'text');
            this.$el.attr('name', 'textInput');

            if (this.default_value)
                this.$el.attr('placeholder', this.default_value);

            if (this.value)
                this.$el.val(this.value);

            return this;
        },

        clear: function() {
            this.$el.val('');
        },

        onChange: function(e) {
            this.setVal(this.$el.val());
        }

    });
});