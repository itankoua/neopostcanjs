/**
 * Created by itankoua on 16/10/15.
 */
'use script';

var


    can.Component.extend({
    tag: "myTag",
    template: '<h1>test</h1>',
    scope : {
        subject : "Hello",
        updateSubject : function() {
            this.attr("subject", "Bye bye");
        }
    }
});

$("#out").html(can.view("app", {}));