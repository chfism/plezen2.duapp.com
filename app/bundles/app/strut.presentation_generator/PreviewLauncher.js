define(function() {
	'use strict';
	var launch = 0;

	function PreviewLauncher(editorModel) {
		this._editorModel = editorModel;
	};

	PreviewLauncher.prototype = {
		launch: function(generator) {
            //点击预览时触发
			if (window.previewWind)
				window.previewWind.close();

			this._editorModel.trigger('launch:preview', null);

            //触发strut.presentation_generator.impress/main.js generate方法,生成impress的html
			var previewStr = generator.generate(this._editorModel.deck());

			localStorage.setItem('preview-string', previewStr);
			localStorage.setItem('preview-config', JSON.stringify({
				surface: this._editorModel.deck().get('surface')
			}));
            var url='../../preview_export/' + (generator.file || generator.id) + '.html' + generator.getSlideHash(this._editorModel);
			window.previewWind = window.open(url,window.location.href);
			var sourceWind = window;
		}
	};

	return PreviewLauncher;
});