/**
 * Created by itankoua on 20/10/15.
 */


module todos {
    'use strict';

    export class Deal {
        uuid : String;
        name: String;
        count : Number;
        constructor(){
            this.count = 0;
            this.uuid = "init";
        }
        getName() {
            name = this.count;
            return name;
        }
    }


}
