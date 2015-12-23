
//Resources will be resolved in this order:
//1) try languageCode plus countryCode, eg. 'en-US'
//2) alternative look it up in languageCode only, eg. 'en'
//3) finally look it up in defined fallback language, default: 'dev'
$.i18n.init({
    lng: window.navigator.language || window.navigator.userLanguage,
    //lng:"en",
    ns: { namespaces: ['translation'], defaultNs: 'translation'},
    resGetPath: '../../locales/__lng__/__ns__.json'
    }, function(t) {
    $('.lazy').i18n();
    });
