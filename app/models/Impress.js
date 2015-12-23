/**
 * Created by Humphrey on 15-2-27.
 */
/**
 * Created by user on 10/6/14.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ShareSchema = new Schema({
    email: {type: String, required: false},
    token: {type: String, required: false}
});

var ImpressSchema = new Schema({
//    _id: {type: Schema.Types.ObjectId},
    email: { type: String, required: true},
    thumbnail: {type: String, required: false},
    name: {type: String, required: false},
    content: { type: String, required: false},
    inserted: {type: Date, required: false },
    updated: {type: Date, required: false},
    preview: {type: String, required: false},
    shareto: [ShareSchema]
});

var Impress = mongoose.model("Impress", ImpressSchema);

var ImpressDAO = function () {
};

ImpressDAO.prototype.findPagination = function (obj, callback) {
    var q = obj.search || {}
    var col = obj.columns;

    var pageNumber = obj.page.num || 1;
    var resultsPerPage = obj.page.limit || 10;

    var skipFrom = (pageNumber * resultsPerPage) - resultsPerPage;
    var s = obj.page.sort;
    switch (s) {
        case "n":
            s = "name";
            break;
        case "n2":
            s = "-name";
            break;
        case "u":
            s = "-updated";
            break;
        case "u2":
            s = "updated";
            break;
        case "i":
            s = "-inserted";
            break;
        case "i2":
            s = "inserted";
            break;
        default:
            s = "-inserted";
    }
    var query = Impress.find(q, col).sort(s).skip(skipFrom).limit(resultsPerPage);

    query.exec(function (error, results) {
        if (error) {
            callback(error, null, null);
        } else {
            Impress.count(q, function (error, count) {
                if (error) {
                    callback(error, null, null);
                } else {
                    var pageCount = Math.ceil(count / resultsPerPage);
                    callback(null, pageCount, results);
                }
            });
        }
    });
}

ImpressDAO.prototype.findByUser = function (name, callback) {
    Impress.find({"email": name}, {_id: 1, name: 1, updated: 1, inserted: 1, thumbnail: 1, shareto: 1}, function (err, obj) {
        callback(err, obj);
    });
};

ImpressDAO.prototype.findTemplate = function (callback) {
    Impress.find({"shareto.email": "*"}, {_id: 1, name: 1, email: 1, thumbnail: 1}, function (err, obj) {
        callback(err, obj);
    });
};

ImpressDAO.prototype.findById = function (id, callback) {
    Impress.find({_id: id}, function (err, obj) {
        callback(err, obj);
    });
};

ImpressDAO.prototype.removeById = function (id, callback) {
    Impress.remove({_id: id}, function (err, obj) {
        callback(err, obj);
    });
};

ImpressDAO.prototype.createnew = function (obj, callback) {
    var instance = new Impress(obj);
    instance.save(function (err, doc) {
        callback(err, doc);
    });
};

ImpressDAO.prototype.updateData = function (conditions, update, options, callback) {
    Impress.update(conditions, update, options, function (err, obj) {
        callback(err, obj);
    });
};

module.exports = new ImpressDAO();
