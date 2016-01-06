require.config({
	shim : {
		underscore : {
			exports : '_'
		},
		backbone : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},
		marionette: {
			deps: ["backbone"],
			exports:"Marionette"
		},
	},
	paths : {
		jquery : '/bower_components/jquery/dist/jquery',
		underscore : '/bower_components/underscore/underscore',
		backbone : '/bower_components/backbone/backbone',
		marionette : '/bower_components/backbone.marionette/lib/backbone.marionette',
		text : '/bower_components/text/text',
	}
});
require(['app'], function(App) {
	App.start();
});
