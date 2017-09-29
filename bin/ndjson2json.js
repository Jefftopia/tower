#!/usr/bin/env node
var fs = require('fs');

fs.readFile(process.env.PWD + "/" + process.argv[2], 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        var x = data
            .toString()
            .split(/\r?\n/)
            .filter(function(line) {
                return line && line.trim().length;
            })
            .map(function(data, index) {
                return data && JSON.parse(data);
            });

        process.stdout.write(JSON.stringify(x, null, 2));
    }
});
