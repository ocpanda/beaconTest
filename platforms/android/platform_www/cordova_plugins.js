cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-ble-central/www/ble.js",
        "id": "cordova-plugin-ble-central.ble",
        "clobbers": [
            "ble"
        ]
    },
    {
        "file": "plugins/cordova-plugin-beacon/www/client.js",
        "id": "cordova-plugin-beacon.client",
        "clobbers": [
            "cordova.plugins.simplexpbeacon"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-ble-central": "1.1.1",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-beacon": "1.1.0"
};
// BOTTOM OF METADATA
});