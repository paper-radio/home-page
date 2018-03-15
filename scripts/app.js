'use strict';

let myData = [{}];

d3
    .selectAll('.pod')
    .data([1, 3, 7, 1.4, 3.7, 2])
    .html(d => {
        return '<p style="font-size:' + d + 'em">' + d + '</p>';
    });
