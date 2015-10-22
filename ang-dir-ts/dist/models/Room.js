/**
* Created by itankoua on 21/10/15.
*/
/// <reference path='../_all.ts' />
var meeting;
(function (meeting) {
    'use strict';
    var Room = (function () {
        function Room(Guid) {
            this.Guid = Guid;
            this._uuid = Guid.get();
        }
        Object.defineProperty(Room.prototype, "uuid", {
            get: function () {
                return this._uuid;
            },
            set: function (value) {
                this._uuid = value;
            },
            enumerable: true,
            configurable: true
        });

        Room.$inject = [
            'Guid'
        ];
        return Room;
    })();
    meeting.Room = Room;
})(meeting || (meeting = {}));
