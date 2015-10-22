/**
* Created by itankoua on 21/10/15.
*/
/// <reference path='../_all.ts' />
var meeting;
(function (meeting) {
    'use strict';
    var Meeting = (function () {
        function Meeting() {
        }
        Object.defineProperty(Meeting.prototype, "uuid", {
            get: function () {
                return this._uuid;
            },
            set: function (value) {
                this._uuid = value;
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(Meeting.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(Meeting.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            set: function (value) {
                this._owner = value;
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(Meeting.prototype, "participants", {
            get: function () {
                return this._participants;
            },
            set: function (value) {
                this._participants = value;
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(Meeting.prototype, "room", {
            get: function () {
                return this._room;
            },
            set: function (value) {
                this._room = value;
            },
            enumerable: true,
            configurable: true
        });

        return Meeting;
    })();
    meeting.Meeting = Meeting;
})(meeting || (meeting = {}));
