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
        files = natSort(files);
        let index = startIndex + (files.length - 1) * step;
        let reversed = files.reverse();
        for (element of reversed) {
            let name = path.basename(element);
            console.log('name', name);
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

// natural sort algorithm in JavaScript by Miigon.
// 2021-03-30
// 
// GitHub: https://github.com/miigon/

function natSort(arr) {
    return arr.map(v => { // split string into number/ascii substrings
        let processedName = []
        let str = v
        for (let i = 0; i < str.length; i++) {
            let isNum = Number.isInteger(Number(str[i]));
            let j;
            for (j = i + 1; j < str.length; j++) {
                if (Number.isInteger(Number(str[j])) != isNum) {
                    break;
                }
            }
            processedName.push(str.slice(i, j));
            i = j - 1;
        }
        // console.log(processedName);
        return processedName;

    }).sort((a, b) => {
        let len = Math.min(a.length, b.length);
        for (let i = 0; i < len; i++) {
            if (a[i] != b[i]) {
                let isNumA = Number.isInteger(a[i]);
                let isNumB = Number.isInteger(b[i]);
                if (isNumA && isNumB) {
                    return a[i] - b[i];
                } else if (isNumA) {
                    return -1;
                } else if (isNumB) {
                    return 1;
                } else {
                    return a[i] < b[i] ? -1 : 1;
                }
            }
        }
        // in case of one string being a prefix of the other
        return a.length - b.length;
    }).map(v => v.join(''));
}