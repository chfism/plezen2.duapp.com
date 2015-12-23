//define(['../locales/de',
//		'../locales/en',
//		'../locales/es',
//		'../locales/fr',
//		'../locales/nl',
//		'../locales/ru',
//		'../locales/zh',
//		'handlebars'],
//function(de, en, es, fr, nl, ru, zh, handlebars) {
//	var langs = {
//		en: en,
//		de: de,
//		es: es,
//		fr: fr,
//		nl: nl,
//		ru: ru,
//		zh: zh
//	};
define([
        '../locales/en',
        '../locales/zh',
        'handlebars'],
    function(en, zh, handlebars) {
        var langs = {
            en: en,
            zh: zh
        };

	var lang = window.navigator.language || window.navigator.userLanguage;
	//var result = langs[lang.split('-')[0]] || langs.en;
    var result = langs.zh;
	handlebars.registerHelper("lang", function(key) {
		return result[key];
	});

	return result;
});
