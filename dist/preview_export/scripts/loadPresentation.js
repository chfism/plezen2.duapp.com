var loadPresentation = function() {
	var presentation;
    //	var config = JSON.parse(localStorage.getItem('preview-config'));

    //共享的链接
    if(this.window.location.href.indexOf('share')>-1) {
        //需要修改presentation, 并将src="css 替换为src="../../css
        presentation = localStorage.getItem('preview-string');
        presentation = presentation.replace(/src=\"css/g, "src=\"../../preview_export/css");
    }

    //本地预览
    else {
        presentation = localStorage.getItem('preview-string');
        if (presentation) {
            document.body.innerHTML = presentation;
            //	document.body.className = config.surface + " " + document.body.className;
        }
    }
};
