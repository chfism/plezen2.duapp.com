/**
 * Created by Humphrey on 14-10-19.
 */
define(['tantaman/web/widgets/MenuItem',
        'lang'],
    function(MenuItem, lang) {
        'use strict';

        var menuProvider = {
            createMenuItems: function() {
                return new MenuItem({ title: lang.exit, handler: exit});
            }
        };

        function exit(){
            if(confirm(lang.exitconfirm))
            {
                window.location.href="../../your";
            }
            else
            {
            }
        }

        return {
            initialize: function(registry) {
                registry.register({
                    interfaces: 'strut.LogoMenuItemProvider'
                }, menuProvider);
            }
        };
    });
