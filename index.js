/**
 * Created by Riven on 2016/12/15.
 */
var EventEmitter = require('events');
var SerialConnection = require('./src/SerialConnection');
var UpdateManager = require('./src/UpdaterManager');

var Kittenblock = function () {
    var instance = this;
    instance.serial = new SerialConnection();
    instance.updater = new UpdateManager();



};


