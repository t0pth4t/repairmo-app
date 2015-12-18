'use strict';

angular.module('repairmoApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


