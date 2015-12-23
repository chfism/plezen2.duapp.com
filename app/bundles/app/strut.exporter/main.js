define(['tantaman/web/widgets/MenuItem',
		'framework/ServiceCollection',
		'./ExportImportModal',
		'lang'],
function(MenuItem, ServiceCollection, ExportModal, lang) {
	'use strict';

	var $modals = $('#modals');

	var exportModal = null;
	var exporterCollection = null;
	var menuProvider = {
		createMenuItems: function(editorModel) {
			if (exportModal == null) {
				exportModal = new ExportModal(editorModel, exporterCollection);
				exportModal.render();
				$modals.append(exportModal.$el);
			}
            //导出功能菜单

            var menuItems = [];
//            menuItems.push(new MenuItem({title: lang.save, modal: exportModal, save:true}));
//            menuItems.push(new MenuItem({title: lang.save_as, modal: exportModal}));
            menuItems.push(new MenuItem({title: lang.save, modal: exportModal, model:editorModel,save:true}));
            menuItems.push(new MenuItem({title: lang.save_as, modal: exportModal,model:editorModel}));

            menuItems.push({
                $el: $('<li class="divider"></li>'),
                render: function() { return this; }
            });

			return menuItems;
		}
	};

	return {
		initialize: function(registry) {
			exporterCollection = new ServiceCollection(
											registry, 'strut.exporter',
											ServiceCollection.toServiceConverter
										);

			registry.register({
				// again, shouldn't call out LogoMenuItemProvider explicitly
				interfaces: ['strut.LogoMenuItemProvider']
			}, menuProvider);

			registry.register({
				interfaces: 'strut.exporter.Collection'
			}, exporterCollection);
		}
	};
});