var qn = require('qn');
var path = require('path');


exports.upload = function (req, res) {

    console.log(req.files.image);
    var client = qn.create({
        accessKey: 'h6KwaGA55bqbYkw3E5jSwB7z-fKULUNx_ekP7GBL',
        secretKey: 'EcB_s8F9mX9grQYyEEfC_s3WbRkP64HuhQ_ZAGLe',
        bucket: 'plezendns',
        domain: '7rfkz7.com1.z0.glb.clouddn.com'
        // timeout: 3600000, // default rpc timeout: one hour, optional
        // if your app outside of China, please set `uploadURL` to `http://up.qiniug.com/`
        // uploadURL: 'http://up.qiniu.com/',
    });

    // upload a file with custom key
    //path.join(__dirname,'strut-icon.png'
    //console.log(path.join(__dirname,'strut-icon.png'));

    var key = Math.random() + req.files.image.name;
    /*
     client.upload(req.files.image, function (err, result) {
     console.log(result);
     // {
     //   hash: 'FvnDEnGu6pjzxxxc5d6IlNMrbDnH',
     //   key: 'FvnDEnGu6pjzxxxc5d6IlNMrbDnH',
     //   url: 'http://qtestbucket.qiniudn.com/FvnDEnGu6pjzxxxc5d6IlNMrbDnH',
     //   "x:filename": "foo.txt",
     // }
     });
     */

    client.uploadFile(req.files.image.path, {key: key}, function (err, result) {
        console.log(result);

        if (!err)
            res.send(result);

        // {
        //   hash: 'FhGbwBlFASLrZp2d16Am2bP5A9Ut',
        //   key: 'qn/lib/client.js',
        //   url: 'http://qtestbucket.qiniudn.com/qn/lib/client.js'
        //   "x:ctime": "1378150371",s
        //   "x:filename": "client.js",
        //   "x:mtime": "1378150359",
        //   "x:size": "21944",
        // }
    });

};




