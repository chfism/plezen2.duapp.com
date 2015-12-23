define(['./ImpressGenerator',
        'lang'],
function(ImpressGenerator,lang) {
	'use strict';

	var service = {
		displayName: lang.play,
		id: 'impress',
		capabilities: {
			freeformStepping: true
		},
		generate: function(deck) {
            //触发impressGenerator.js
			return ImpressGenerator.render(deck);
		},

		getSlideHash: function(editorModel) {
			return '#/step-' + (editorModel.activeSlideIndex() + 1);
		}
	};

	return {
		initialize: function(registry) {
			registry.register({
				interfaces: 'strut.presentation_generator'
			}, service);
		}
	};
});