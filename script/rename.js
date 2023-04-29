const glob = require("glob");
const path = require("path");
const fs = require("fs");

var options = {};
var basepath = `${process.argv[2]?.replace(/\\/g, '/')}/*.png`;
var step = process.argv[4] ?? 1;
var startIndex = process.argv[3] ?? 0;
if (step) step = parseInt(step);
if (startIndex === 0 || !!startIndex) startIndex = parseInt(startIndex);

(function () {
    glob(`${basepath}`, options, function (er, files) {
        let index = startIndex + (files.length - 1) * step;
        let reversed = files.reverse();
        for (element of reversed) {
            let name = path.basename(element);
            let dir = path.dirname(element);
            newname = ('' + index).padStart(7, '0') + '.png';
            fs.renameSync(
                [dir, "/", name].join(""),
                [dir, "/", newname].join("")
            );
            index -= step;
        }
    });
})();
