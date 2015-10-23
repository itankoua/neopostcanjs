/**
 * Created by itankoua on 21/10/15.
 */
/// <reference path='../../_all.ts' />

module meeting {
    'use strict';
    export class Meeting {
        private _uuid : String;
        private _name : String;
        private _owner : User;
        private _participants : User[];
        private _room : Room;
        constructor() {

        }


        public get uuid():String {
            return this._uuid;
        }

        public set uuid(value:String) {
            this._uuid = value;
        }

        public get name():String {
            return this._name;
        }

        public set name(value:String) {
            this._name = value;
        }

        public get owner():meeting.User {
            return this._owner;
        }

        public set owner(value:meeting.User) {
            this._owner = value;
        }

        public get participants():meeting.User[] {
            return this._participants;
        }

        public set participants(value:Array) {
            this._participants = value;
        }

        public get room():meeting.Room {
            return this._room;
        }

        public set room(value:meeting.Room) {
            this._room = value;
        }
    }
}