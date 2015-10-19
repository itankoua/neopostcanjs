/**
 * Created by itankoua on 16/10/15.
 */
"use strict";

can.Component.extend({
    tag: "myTag",
    template: '<h1 can-click="updateSubject">  {{ subject }} World <content></content> </h1>',
    scope : {
        subject : "Hello",
        updateSubject : function() {
            this.attr("subject", "Bye bye");
        }
    }
});


$("#out").html(can.view("app", {}));