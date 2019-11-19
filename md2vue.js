"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var marked = require('marked');
function main(input, output) {
    fs_1.readFile(path_1.join(__dirname, input), { encoding: 'utf8' }, function (err, data) {
        fs_1.writeFile(path_1.join(__dirname, output), "\n      <template>\n        <article>\n          <h1>\u66F4\u65B0\u65E5\u5FD7</h1>\n          <div class=\"markdown-body\">\n          " + marked(data) + "\n          </div>\n        </article>\n      </template>", function () { });
    });
}
main.apply(void 0, process.argv.slice(2));
