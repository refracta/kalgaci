// ==UserScript==
// @name         kalgaci
// @version      1.0
// @description  Socket.IO & UserScript based simple WebDriver
// @author       refracta
// @namespace    mailto:refracta@github.com
// @match      *://*/*
// @require         https://code.jquery.com/jquery-3.2.1.min.js
// @require         http://script.abstr.net/fixedPrune-min.js
// @require         https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js
// ==/UserScript==


(function () {
    'use strict';
    $(document).ready(function() {
        var socket = io('http://localhost:8080');
        socket.emit('connection', {
            msg: 'init',
            window: JSON.prune(window)
        });
        socket.on('connection', function (data) {
            console.log(data);
        });
    });
})();
