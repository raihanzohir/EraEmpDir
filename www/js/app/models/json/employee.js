define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        Employee = Backbone.Model.extend({

            //urlRoot: "http://localhost:3000/employees",
            urlRoot: "http://localhost/test/index.php",

            initialize: function () {
                this.reports = new EmployeeCollection();
                this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            }

        }),

        EmployeeCollection = Backbone.Collection.extend({

            model: Employee,

            //url: "http://localhost:3000/employees"
            url: "http://localhost/test/index.php

        });

    return {
        Employee: Employee,
        EmployeeCollection: EmployeeCollection
    };

});