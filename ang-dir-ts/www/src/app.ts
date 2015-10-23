/**
 * Created by itankoua on 21/10/15.
 */
/// <reference path='../_all.ts' />

/**
 * The main MeetingMVC app module.
 *
 * @type {angular.Module}
 */
module meeting {
    'use strict';

    var app = angular.module("app",[])
            .controller('mainCtrl', MainCtrl)
            .service('loginService', LoginService);


}