 'use strict';

angular.module('repairmoApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-repairmoApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-repairmoApp-params')});
                }
                return response;
            }
        };
    });
