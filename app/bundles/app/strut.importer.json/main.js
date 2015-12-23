define(['common/FileUtils'],
function(FileUtils) {
	'use strict';
	
	var importer = {
		import: function(file, editorModel, next) {
			// TODO: Since browsers seem to pick any type they want
			// Should we just ignore the mime type?
			// Need to do some research on this subject.
			if (file.type == 'text/json' || file.type == ''
			 || file.type == 'application/json'
			 || file.type == 'application/xrd+json') {
				FileUtils.toText(file, function(json) {
                    //数据库取出的content可以赋给json, 然后调用EditorModel.js的importPresentation方法
					editorModel.importPresentation(JSON.parse(json));
				});
			} else {
				next();
			}
		}
	};

	return {
		initialize: function(registry) {
			registry.register({
				interfaces: 'strut.importer'
			}, importer);
		}
	};
});