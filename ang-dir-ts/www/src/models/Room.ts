
/**
 * Created by itankoua on 21/10/15.
 */
/// <reference path='../../_all.ts' />


module meeting {
    'use strict';
    export class Room {
        private _uuid : String;

        private static $inject = [
            'Guid'
        ]

        constructor(
            private Guid : IGuid
        ) {
            this._uuid =  Guid.get();
        }

        public get uuid():String {
            return this._uuid;
        }

        public set uuid(value:String) {
            this._uuid = value;
        }
    }
}
