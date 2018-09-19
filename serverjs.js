'use strict';

var express = require('express');
var app = express();



var dnode = require('dnode');
var server = dnode({
    transform : function (s, cb) {
        cb(s.replace(/[aeiou]{2,}/, 'oo').toUpperCase());
    },
    haha : function(clientContent,clientObject){
        console.log('[SERVER]:'+clientContent);
        clientObject('server return:'+clientContent);
    }
});
server.listen(5004);




app.listen(3001,'192.168.2.146');
console.log('server has connect success!!!');
