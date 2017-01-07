/**
 * Created by Administrator on 2017/1/5.
 */
'use strict';

var DEFAULT_INTERVAL = 1000/ 60;


var requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback,callback.interval || DEFAULT_INTERVAL);
            }
})();