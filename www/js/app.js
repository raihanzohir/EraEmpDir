require.config({

	baseUrl : 'js/lib',

	paths : {
		app : '../app',
		tpl : '../tpl'
	},

	map : {
		'*' : {
			'app/models/employee' : 'app/models/memory/employee_era'
			//'app/models/employee' : 'app/models/json/employee'
		}
	},

	shim : {
		'backbone' : {
			deps : ['underscore', 'jquery'],
			exports : 'Backbone'
		},
		'underscore' : {
			exports : '_'
		}
	}
});

//require(['jquery', 'backbone', 'app/router'], function($, Backbone, Router) {

//	var router = new Router();

//	$("body").on("click", ".back-button", function(event) {
//		event.preventDefault();
//		window.history.back();
//	});

//	Backbone.history.start();
//});

require(['jquery', 'backbone', "fastclick", 'app/router'], function ($, Backbone, FastClick, Router) {
	"use strict";
	var router = new Router();
	$(function () {
	FastClick.attach(document.body);
	});
	$("body").on("click", ".back-button", function (event) {
	event.preventDefault();
	window.history.back();
	});
	Backbone.history.start();
});

// require(["fastclick", 'app/router'], function(FastClick, router) {
// 
	// "use strict";
// 	
	// $(function() {
		// FastClick.attach(document.body);
	// });
// 
	// router.start();
// 
// });
