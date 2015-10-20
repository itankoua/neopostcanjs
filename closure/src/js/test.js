/**
 * Created by itankoua on 20/10/15.
 */
var todos;
(function (todos) {
    'use strict';
    var Deal = (function () {
        function Deal() {
            this.count = 0;
            this.uuid = "init";
        }
        Deal.prototype.getName = function () {
            name = this.count;
            return name;
        };
        return Deal;
    })();
    todos.Deal = Deal;
})(todos || (todos = {}));
//# sourceMappingURL=test.js.map