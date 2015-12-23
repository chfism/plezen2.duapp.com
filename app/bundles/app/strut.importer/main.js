define(['tantaman/web/widgets/MenuItem',
        'framework/ServiceCollection',
        'tantaman/web/widgets/HiddenOpen',
        'framework/Iterator',
        'lang'],
    function (MenuItem, ServiceCollection, HiddenOpen, Iterator, lang) {
        'use strict';

        // Very boiler-platey.  Need to get
        // some dynamic dependency injection to declarative
        // wire all this type of stuff up
        var importerCollection = null;
        var hiddenOpen = new HiddenOpen();
        $('body').append(hiddenOpen.render().$el);

        function fileBrowserLauncher(editorModel) {
            // Launch the file browser
            // forward the file chosen event off to the various registered services...
            //点击导入按钮触发
            hiddenOpen.trigger(function (file) {
                fileChosen(file, editorModel, lang);
            });
        }

        //选择文件后触发，随后调用到strut.importer.json.main.js进行JSON解析
        function fileChosen(file, editorModel, lang) {
//		var iter = new Iterator(importerCollection);
//		function next() {
//			if (iter.hasNext()) {
//				iter.next().import(file, editorModel, next);
//			}
//		}
//
//		next();
            if (file.type == 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
                $.ajax({
                    url: '/impress/convert',
                    type: 'POST',
                    cache: false,
                    data: { filepath: file.name},
                    success: function (data) {
                        alert(lang.importsuccess);
                        localStorage.setItem('strut-exitsave', data);
                        window.location = "/impress/import";
                    },
                    error: function (jqXHR, textStatus, err) {
                        alert('text status ' + textStatus + ', err ' + err)
                    }
                });

            } else {
                alert(lang.notsupport);
            }

        }

        var menuProvider = {
            createMenuItems: function (editorModel) {
                return new MenuItem({ title: lang.import, handler: fileBrowserLauncher, model: editorModel});
            }
        };

        return {
            initialize: function (registry) {
                importerCollection = new ServiceCollection(
                    registry, 'strut.importer',
                    ServiceCollection.toServiceConverter
                );

                registry.register({
                    interfaces: 'strut.LogoMenuItemProvider'
                }, menuProvider);
            }
        };
    });