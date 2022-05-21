"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var data = res.data;
    var id = data.id;
    var title = data.title;
    var isCompleted = data.completed;
    logTodo(id, title, isCompleted);
});
var logTodo = function (id, title, isCompleted) {
    console.log("id of todo : ".concat(id, " \n  has title of : ").concat(title, "\n  completed ? : ").concat(isCompleted, "\n  "));
};
