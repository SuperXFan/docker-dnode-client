var express = require('express');
var app = express();


var dnode = require('dnode');
var d = dnode.connect(5005,'192.192.192.2');
d.on('remote', function (remote) {
    // remote.transform('bebdadfjsljkuip', function (s) {
    //     console.log('bebdadfjsljkuip => ' + s);
    // });
    remote.haha('hehe',function(serverContent){
        console.log('[CLIENT] remote:'+serverContent);
        d.end();//结束本次通信 不在接收之后的remote
    });
});

d.on('local',function (ref) {
    console.log('client local self ' + ref);
});

d.on('request',function (req) {
    console.log('client request ' + req);
});

//This event fires when the remote end causes errors in the protocol layer.
d.on('fail',function (err) {
    console.log('client fail ' + err);
});

//This event fires when local code causes errors in its callbacks
d.on('error',function (err) {
    console.log('client error ' + err);
});

d.on('end',function (param) {
    console.log('client end ' + param);
});

app.get('/b', function (req, res) {
    res.send('这是一个get请求');
})

app.listen(3006);
console.log('client server has connect success!!!');