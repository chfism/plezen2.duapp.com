/**
 * Created by zhudaimi on 7/26/14.
 */
var utils = require('./../lib/util')
var Impress = require('./../models/Impress.js');
var PPTConvert = require('./../controllers/pptconvert');

exports.impress = function (req, res, next) {
    res.render('./index.html', { user: req.user });
};

exports.mindmap = function (req, res, next) {
    res.render('./mindmap.html', { user: req.user });
};

exports.home = function (req, res) {
    res.render('views/home', { user: req.user });
};

exports.about = function (req, res) {
    res.render('views/about', {user: req.user})
};

exports.terms = function (req, res) {
    res.render('views/terms', {user: req.user})
};

exports.privacy = function (req, res) {
    res.render('views/privacy', {user: req.user})
};

exports.reset = function (req, res, next) {
    res.render('views/profile/reset', {user: req.user})
};

exports.temp = function (req, res) {
    res.render('views/temp/home')
};

//exports.your = function(req, res) {
//    Impress.findByUser(req.user.email,function(err, list){
//        Impress.findTemplate(function(err,tpl){
//            res.render('views/your', {
//                projectlist: list,
//                templatelist: tpl,
//                user: req.user
//            });
//       });
//    });
//};
exports.your = function (req, res) {
    var search = {email: req.user.email};
    var page = {limit: 8, num: 1};

//查看哪页
    if (req.query.p) {
        page['num'] = req.query.p < 1 ? 1 : req.query.p;
    }
    if (req.query.s) {
        page['sort'] = req.query.s;
    }
    if (req.query.q)
    {
       search['name']=new RegExp(req.query.q);
    }

    var model = {
        search: search,
        columns: '_id name updated inserted thumbnail shareto',
        page: page
    };

    Impress.findPagination(model, function (err, pageCount, list) {
        page['pageCount'] = pageCount <= 0 ? 1 : pageCount;
        page['size'] = list.length <= 0 ? 1 : list.length;
        page['numberOf'] = pageCount > 5 ? 5 : pageCount;
        Impress.findTemplate(function (err, tpl) {
            res.render('views/your', {
                page: page,
                projectlist: list,
                templatelist: tpl,
                user: req.user
            });
        });
    });
}

exports.settings = function (req, res, next) {
    res.render('views/settings', {user: req.user})
};

//新建幻灯片到数据库
exports.create = function (req, res) {

    var model = {
        email: req.body.email,
        thumbnail: '',
        name: req.body.name,
        content: req.body.content,
        inserted: new Date(),
        updated: new Date(),
        preview: req.body.preview
    };

    Impress.createnew(model, function (err, doc) {
        if (err) {
            console.log(err);
            res.send('false')
        }
        else {
            res.send('true');
            var conditions = {_id: doc._id};
            var update = {$set: {"shareto.0.email": "", "shareto.0.token": ""}};
            var options = {};

            Impress.updateData(conditions, update, options, function (err) {
                if (err) {
                    console.log(err);
                    res.send('false');
                }
                else {
                    res.send('true');
                    savescreenshot(req.body.server, doc._id);
                }
            });
        }
    })
}

//打开幻灯片
exports.import = function (req, res) {
    if (req.params.id != undefined) {
        Impress.findById(req.params.id, function (err, impresses) {
            if (impresses != null && impresses.length > 0) {
                res.render('views/impress/import/plezenimport', {
                    project: impresses[0],
                    user: req.user
                });
            }
        })
    }
    else {
        res.render('views/impress/import/plezenimport', {
            project: "",
            user: req.user
        });
    }
}

//从mindmap新建
exports.new = function (req, res) {
    var impress = convertmindmap(req.body.mm_data);
    res.render('views/impress/import/mindmapimport', {
        project: impress,
        user: req.user
    });
}


//分享ppt
exports.share = function (req, res) {
    Impress.findById(req.params.id, function (err, impresses) {
        if (impresses != null && impresses.length > 0) {

            //没有密码或者密码为空或者phantomjs
            if (impresses[0].shareto[0]._doc.token == undefined || impresses[0].shareto[0]._doc.token == "" || req.headers["user-agent"].indexOf('PhantomJS') > 0) {
                res.render('views/share/plezenshare', {
                    project: impresses[0]
                });
            }
            else {
                res.render('views/share/sharecode', {
                    project: impresses[0],
                    error: "none"
                });
//                res.send("请输入密码");
            }
        }
    })
}

//分享ppt带密码
exports.sharewithcode = function (req, res) {
    var password = req.body.password;
    Impress.findById(req.params.id, function (err, impresses) {
        if (impresses != null && impresses.length > 0) {
            if (password == impresses[0].shareto[0]._doc.token) {
                res.render('views/share/plezenshare', {
                    project: impresses[0],
                    error: "none"
                });
            }
            else //密码错误
            {
                res.render('views/share/sharecode', {
                    error: "wrong code"
                });
            }
        }
    })
}

//删除ppt
exports.delete = function (req, res) {
    Impress.removeById(req.body.id, function (err) {
        if (err) {
            res.send('false')
        }
        res.send('true')
    })
}

//保存ppt
exports.update = function (req, res) {
    var conditions = {_id: req.body.plezenid};
    var update = {$set: {content: req.body.content, preview: req.body.preview}};
    var options = {};

    Impress.updateData(conditions, update, options, function (err) {
        if (err) {
            console.log(err);
            res.send('false');
        }
        else {
            res.send('true');
            savescreenshot(req.body.server, req.body.plezenid);
        }
    });
}

//保存ppt的token
exports.token = function (req, res) {
    var conditions = {_id: req.body.plezenid};
    var update = {$set: {"shareto.0.token": req.body.token}};
    var options = {upsert: true};
    Impress.updateData(conditions, update, options, function (err) {
        if (err) {
            console.log(err);
            res.send('false');
        }
        else {
            res.send('true');
        }
    });
}


//打开模版
exports.tpl = function (req, res) {
    Impress.findById(req.params.id, function (err, impresses) {
        if (impresses != null && impresses.length > 0) {
            res.render('views/impress/import/tpl', {
                project: impresses[0],
                user: req.user
            });
        }
    })
}

//截取缩略图
function savescreenshot(server, plezenid) {
    var opts = {
        url: server + "/share/" + plezenid + "#/overview",
        viewport_width: 1600,
        viewport_height: 1200,
        delay: 1000
    }
    takescreenshot(opts, function (image_data) {
        console.log("my image:" + image_data);
        var conditions = {_id: plezenid};
        var update = {$set: {thumbnail: image_data}};
        var options = {upsert: true};

        Impress.updateData(conditions, update, options, function (err, doc) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("thumbnail is saved");
            }
        });
    })
}

function takescreenshot(opts, callback) {
    var path = require('path');
    var phantomjs = require('phantomjs');
    process.env.PATH += ':' + path.dirname(phantomjs.path);
    var phantom = require('phantom');
    console.log('Requesting', opts.url);

    phantom.create(function (ph) {
        ph.createPage(function (page) {
            page.set('viewportSize', { width: opts.viewport_width, height: opts.viewport_height });
            page.open(opts.url, function (status) {
                console.log("website open? " + opts.url, status);
                page.evaluate(function () {
                    console.log("get Rect");
                    return document.querySelector('.strut-slide-0').getBoundingClientRect();
                }, function (rect) {
                    setTimeout(function () {
                        console.log("set rect width:" + rect.width + " height:" + rect.height + " top:" + rect.top + " left:" + rect.left);
                        page.set('clipRect', rect);
                        page.renderBase64('PNG', function (image_data) {
                            console.log("render base64");
                            callback(image_data);
                            ph.exit();
                        });
                    }, opts.delay)
                });
            });
        });
    });
}


exports.convert = function (req, res) {

    PPTConvert.readFile("./img/" + req.body.filepath, function (err, parsedobject) {
//    PPTConvert.readFile("./img/2.pptx", function (err, parsedobject) {
        try {
            var slideStart = "{  \"slides\": [    ";
            var component = "{      \"components\": [       ";
            var TextBox = "{          \"TextBox\": {}";
            var x = "   ,          \"x\": ";
            var y = ",          \"y\": ";
            var font1 = ",          \"scale\": {            \"x\": 1,            \"y\": 1          },          \"type\": \"TextBox\",          \"text\": \"<font>";
            var font2 = "</font>\",          \"size\": 36,          \"selected\": false        }      ";
            var picsrc1 = "{          \"src\": \"";
            var picsrc2 = "\",          \"type\": \"Image\"";
            var picsrc3 = ",          \"scale\": {            \"x\": 1,            \"y\": 1          },          \"imageType\": \"JPEG\",          \"selected\": false        }     ";
            var end = "],      \"z\": 0,      \"impScale\": 3,      \"rotateX\": 0,      \"rotateY\": 0,      \"rotateZ\": 0,      \"index\": 0,      \"selected\": true,      \"active\": true    }";
            var slideEnd = "], \n \"fileName\": \"undefined\"}";

            console.log("bodyObjectArray的长度是" + parsedobject.length);
            var content = "";
            for (var i = 0; i < parsedobject.length; i++) {
                console.log("第" + (i + 1) + "页内容是" + parsedobject[i].texts);
                //文字组装
                if (i == 0) {
                    content = component + TextBox + x + parsedobject[0].t_x + y + parsedobject[0].t_y + font1 + parsedobject[0].texts + font2;
                }
                else {
                    content = content + "," + component + TextBox + x + parsedobject[i].t_x + y + parsedobject[i].t_y + font1 + parsedobject[i].texts + font2;
                }
                //图片组装
                if (parsedobject[i].picpath != "") {
                    content = content + "," + picsrc1 + parsedobject[i].picpath + picsrc2 + x + parsedobject[i].p_x + y + parsedobject[i].p_y + picsrc3 + end;
                }
                else {
                    content = content + end;
                }
            }
            console.log("最终合成的json" + slideStart + content + slideEnd);
            res.send(slideStart + content + slideEnd);
        }
        catch (err) {
            console.log(err);
        }

    })
};

function refining(arJsonNesting,arJson,level) {//将嵌套的JSON对象遍历出来，转为二维数组
    for (var i = 0; i < arJsonNesting.length; i++) {
        var j = arJson.length;
        arJson[j] = {
            Id:arJsonNesting[i].id
            ,Name:arJsonNesting[i].text.caption
            ,level:level
            ,parentId:arJsonNesting[i].parentId
        };
        slidecount=slidecount+1;

        if(arJsonNesting[i].children.length>0){
            level=level+1;
            refining(arJsonNesting[i].children,arJson,level);
        }
    }
}

var slidecount;
function convertmindmap(mm_data ) {
    var obj = JSON.parse(mm_data);
    obj=obj.mindmap.root;
    var rootcaption=obj.text.caption;
    var arJson = new Array();
    slidecount=0;
    var level=1;
    refining(obj.children,arJson,level);

//    var text = mm_data.match(/caption":".*?(?=\")/g);
    var slideStart = "{  \"slides\": [    ";
    var component = "{      \"components\": [       ";
    var TextBox = "{          \"TextBox\": {}";
    var x = "   ,          \"x\": ";
    var y = ",          \"y\": ";
    var font1 = ",          \"scale\": {            \"x\": 1,            \"y\": 1          },          \"type\": \"TextBox\",          \"text\": \"<font>";
    var font2 = "</font>\",          \"size\": 36,          \"selected\": false        }      ";
    var scale="],      \"z\": 0,      \"impScale\": ";
    var active_position = ",      \"rotateX\": 0,      \"rotateY\": 0,      \"rotateZ\": 0,      \"index\": 0,      \"selected\": true,      \"active\": true";
    var position= ",      \"rotateX\": 0,      \"rotateY\": 0,      \"rotateZ\": 0,      \"index\": 0,      \"selected\": false,      \"active\": false";
    var slideEnd = "], \n \"fileName\": \"undefined\"}";


    var content = "";
//    var tmp=0;
    for (var i = 0; i < arJson.length; i++) {
        if (i == 0)
        {
            content = component + TextBox + x + 340 + y + 256 + font1 + rootcaption + font2+scale+3+active_position+"}";
        }
//
//        if(arJson[i].level==2) {
//            content = content + "," + component + TextBox + x + 340 + y + 256 + font1 + arJson[i].Name + font2 + scale+3+position+x+500+y+(100+tmp*200)+"}";
//            tmp=tmp+1;
//        }
//        else
//        {
            content = content + "," + component + TextBox + x + 340 + y + 256 + font1 + arJson[i].Name + font2 + scale+3+ position+"}";
//        }

    }
//    console.log("最终合成的json" + slideStart + content + slideEnd);
    return slideStart + content + slideEnd;
}





