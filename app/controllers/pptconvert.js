/**
 * Created by Humphrey on 14-12-9.
 */
/**
 * Author           -  Larry Eliemenye
 * Description      -  Read and extract Data from Office Files, Microsoft word, Powerpoint, Spreadsheet etc
 *
 * **/

var humphreymodule = (function () {

    var fs = require("fs"),
//        async       =  require("async"),
        xml2js = require("xml2js"),
        zip = require("adm-zip");
    path = require("path");
//    parser      =  xml2js.Parser({xmlns:"w"});
    parser = xml2js.Parser({xmlns: "p"});
    util = require('util');


    var xml_data = null,
        EXTRACT_FOLDER = "./extracts",
//        ext             = ['.docx','.xlsx','.pptx'],
        ext = ['.pptx', ],
        RAW_XMLPATH = "./extracts/ppt/slides",
        RAW_XMLPATH2 = "../../extracts/ppt",
        xml_json = null,
        xml_obj = null,
        xml_body = null,
//        content = "",
        err = null;

    function ParsedObject(texts, t_x, t_y, picpath) {
        this.texts = texts;
        this.t_x = t_x;
        this.t_y = t_y;
        this.picpath = picpath
    }

    var parsedarray = new Array();

    parser.addListener("end", function (result) {
        xml_data = result;
        xml_json = JSON.stringify(xml_data);
    })

    var readFile = function (file, returndata) {
        //extract content of file, first test for open office extension
        fs.exists(file, function () {
            if (HasSupportedExtension(file)) {
                var zipFile = new zip(file);
                var entries = zipFile.getEntries()
                entries.forEach(function (e) {
                    //只解压slide.xml文件和图片
                    if (e.entryName.indexOf('/slides/') > 0 || e.entryName.indexOf('/media') > 0) {
                        zipFile.extractEntryTo(e.entryName, EXTRACT_FOLDER, true, true);
                    }
                });

//                    zipFile.extractAllTo(EXTRACT_FOLDER, true);
                var fileList = scanfile(RAW_XMLPATH);
                var index = 0;
                for (var i = 0; i < fileList.length; i++) {

                    parseDocument(RAW_XMLPATH + "/slide" + (i + 1) + ".xml", function (data) {
                        var parsedobject = new ParsedObject("", 0, 0, "");
                        xml_obj = JSON.parse(data);
                        xml_body = xml_obj["p:sld"]["p:cSld"]; //get body element
                        //transverse the xml tree and fetch relivant content only
                        for (var key in xml_body) {
                            for (var key1 in xml_body[key]["p:spTree"]) {
                                for (var key2 in xml_body[key]["p:spTree"][key1]["p:sp"]) {
                                    //取文本框内容
                                    for (var key3 in xml_body[key]["p:spTree"][key1]["p:sp"][key2]["p:txBody"]) {
                                        for (var key4 in xml_body[key]["p:spTree"][key1]["p:sp"][key2]["p:txBody"][key3]["a:p"]) {
                                            if (key4 != 0) {
                                                parsedobject.texts += "<br>";
                                            }
                                            for (var key5 in xml_body[key]["p:spTree"][key1]["p:sp"][key2]["p:txBody"][key3]["a:p"][key4]["a:r"]) {
                                                for (var key6 in xml_body[key]["p:spTree"][key1]["p:sp"][key2]["p:txBody"][key3]["a:p"][key4]["a:r"][key5]["a:t"]) {
                                                    var data = xml_body[key]["p:spTree"][key1]["p:sp"][key2]["p:txBody"][key3]["a:p"][key4]["a:r"][key5]["a:t"][key6]["_"];
                                                    if (data != null && data != undefined) {
                                                        parsedobject.texts += data;
                                                    }

                                                }
                                            }
                                        }
                                    }
                                    //取文本框位置
                                    for (var key3 in xml_body[key]["p:spTree"][key1]["p:sp"][key2]["p:spPr"]) {
                                        for (var key4 in xml_body[key]["p:spTree"][key1]["p:sp"][key2]["p:spPr"][key3]["a:xfrm"]) {
                                            var position_x = xml_body[key]["p:spTree"][key1]["p:sp"][key2]["p:spPr"][key3]["a:xfrm"][key4]["a:off"][0]["$"]["x"]["value"];
                                            var position_y = xml_body[key]["p:spTree"][key1]["p:sp"][key2]["p:spPr"][key3]["a:xfrm"][key4]["a:off"][0]["$"]["y"]["value"];
                                            if (position_x != null && position_x != undefined) {
                                                parsedobject.t_x = position_x / 12700;
                                                parsedobject.t_y = position_y / 12700;
                                            }
                                        }
                                    }

                                }
                            }
                            for (var key2 in xml_body[key]["p:spTree"][key1]["p:pic"]) {
                                //取图片relationship id
                                for (var key3 in xml_body[key]["p:spTree"][key1]["p:pic"][key2]["p:blipFill"]) {
                                    for (var key4 in xml_body[key]["p:spTree"][key1]["p:pic"][key2]["p:blipFill"][key3]["a:blip"]) {
                                        var rel = xml_body[key]["p:spTree"][key1]["p:pic"][key2]["p:blipFill"][key3]["a:blip"][key4]["$"]["r:embed"]["value"];
                                        if (rel != null && rel != undefined) {
                                            parsedobject.picpath = rel;
                                            console.log("第" + (index + 1) + "页picpath为" + parsedobject.picpath);
                                        }
                                    }
                                }
                                //取图片位置
                                for (var key3 in xml_body[key]["p:spTree"][key1]["p:pic"][key2]["p:spPr"]) {
                                    for (var key4 in xml_body[key]["p:spTree"][key1]["p:pic"][key2]["p:spPr"][key3]["a:xfrm"]) {
                                        var position_x = xml_body[key]["p:spTree"][key1]["p:pic"][key2]["p:spPr"][key3]["a:xfrm"][key4]["a:off"][0]["$"]["x"]["value"];
                                        var position_y = xml_body[key]["p:spTree"][key1]["p:pic"][key2]["p:spPr"][key3]["a:xfrm"][key4]["a:off"][0]["$"]["y"]["value"];
                                        if (position_x != null && position_x != undefined) {
                                            parsedobject.p_x = position_x / 12700;
                                            parsedobject.p_y = position_y / 12700;
                                        }
                                    }
                                }
                            }
                        }
                        parsedarray[index] = parsedobject;

                        index += 1;

                    });
                }

                //根据relationship id取实际图片path
                var index_p = 0;
                for (var j = 0; j < fileList.length; j++) {
                    var rel = RAW_XMLPATH + "/_rels/slide" + (j + 1) + ".xml.rels";
                    parseDocument(rel, function (data) {
                        xml_obj = JSON.parse(data);
                        xml_body = xml_obj["Relationships"]["Relationship"];
                        for (var key in xml_body) {
                            var id = xml_body[key]["$"]["Id"]["value"];
                            if (id == parsedarray[index_p].picpath) {
                                parsedarray[index_p].picpath = RAW_XMLPATH2 + xml_body[key]["$"]["Target"]["value"].replace("..", "");
                                console.log("第" + (index_p + 1) + "页new picpath为" + parsedarray[index_p].picpath);
                            }
                        }
                        index_p += 1;
                    });
                }
                setTimeout(function () {
                    returndata(err, parsedarray);
                }, 1000);
            }
        })
    }

    var scanfile = function (path) {
        var fileList = [];
        files = fs.readdirSync(path);
        files.forEach(function (item) {
            var tmpPath = path + '/' + item,
                stats = fs.statSync(tmpPath);
            if (stats.isDirectory()) {
//                        walk(tmpPath, fileList, folderList);
//                        folderList.push(tmpPath);
            } else {
                fileList.push(tmpPath);
            }
        });
        return fileList;
    }

    //parse content xml document
    var parseDocument = function (rel, extract) {
        fs.exists(rel, function (exist) {
            if (exist) {
                fs.readFile(rel, function (err, data) {
                    parser.parseString(data);
                    extract(JSON.stringify(xml_data));
                })
            } else throw "File not found at specified path: " + rel
        })
    }

    //Utlity functions
    var HasSupportedExtension = function (file) {
        for (var key in ext) {
            if (ext[key] === path.extname(file)) {
                return true
            } else throw "Unsupported File format, Must be an Open office XML format of either .docx,.xlsx or .pptx"
        }
    }
    //returns API
    return{
        readFile: readFile
    }

})()

module.exports = humphreymodule;