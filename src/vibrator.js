"use strict";

var hasVibrate = (typeof window !== 'undefined' && 'vibrate' in window.navigator),

    returnFalse = function () {
        return false;
    },

    vibrateDevice = function (duration) {
        window.navigator.vibrate(duration);
        return this;
    };
    
vibrateDevice.stop = function () {
    vibrateDevice(0);
};

returnFalse.stop = function () {};
    
module.exports = hasVibrate ? vibrateDevice : returnFalse;
