// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.
//remap jQuery to $
(function($) {


})(window.jQuery);



/*plugins.js
This file can be used to contain all your plugins, such as jQuery plugins and other 3rd party scripts.

One approach is to put jQuery plugins inside of a (function($){ ... })(jQuery); closure to make sure they're in the jQuery namespace safety blanket. Read more about jQuery plugin authoring


You can approach plugins.js a few ways:

Ignore it and include all of your JS plugins as separate files (undesirable)
Manually concatenate and minify the plugin files (this is a pain to maintain)
Use a script to concatenate them (and cache it) at run-time (like this ! http://rakaz.nl/2006/12/make-your-pages-load-faster-by-combining-and-compressing-javascript-and-css-files.html)
Use a makefile to concatenate/compress like a ninja (like this : http://sixohthree.com/1380/makefile-for-css-and-js-minifycompress)
Use a slick JS library like yepnope.js to asynchronously load your plugin files as needed.
There's a lot of options for including your JS plugins...you'll have to weigh them yourself, of course. I usually use options 3 or 4, though I need to start using 5.

*/