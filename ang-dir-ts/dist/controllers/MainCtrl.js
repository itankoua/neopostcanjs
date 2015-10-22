/**
* Created by itankoua on 21/10/15.
*/
/// <reference path='../_all.ts' />
var meeting;
(function (meeting) {
    'use strict';

    var MainCtrl = (function () {
        function MainCtrl($scope) {
            this.$scope = $scope;
        }
        MainCtrl.$inject = [
            '$scope'
        ];
        return MainCtrl;
    })();
    meeting.MainCtrl = MainCtrl;
})(meeting || (meeting = {}));
