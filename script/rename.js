const glob = require("glob");
const path = require("path");
const fs = require("fs");

var options = {};
var basepath = `${process.argv[2]?.replace(/\\/g, '/')}/*.png`;

(function () {
    glob(`${basepath}`, options, function (er, files) {
        let index = 0;
        for (element of files) {
            let name = path.basename(element);
            let dir = path.dirname(element);
            newname = ('' + index).padStart(7, '0') + '.png';
            fs.renameSync(
                [dir, "/", name].join(""),
                [dir, "/", newname].join("")
            );
            index++;
        }
    });
})();
