/*! Author: Luiz Gustavo Freire Gama - @luizgamabh */

'use strict';

(function($) {

    $.fn.advancedBreak = function(breaks) {
        var lastBreak = null,
            actualBreak = null;
        breaks = typeof breaks === 'undefined' ? null : breaks;
        if (!(breaks instanceof Array && breaks.length > 0)) return 0;
        breaks = breaks.sort().reverse(); //sort from bigger screen to smaller screen
        var getBreakIndex = function(element, breaks) {
            var innerWidth = element.innerWidth;
            for (var i = 0, j = breaks.length; i <= j; i++) {
                if ((innerWidth > breaks[i] && i < j) || i == j) {
                    return i;
                }
            }
        };
        this.getIndex = function() {
            return getBreakIndex(window, breaks);
        };
        return this.each(function() {
            var _this = this,
                $this = $(_this);
            if (!_this.instantiated) {
                this.instantiated = true;
                if (_this.self != window.self) return; // Allows only window to use this plugin
                actualBreak = lastBreak = getBreakIndex(_this, breaks);
                $this.resize(function() {
                    actualBreak = getBreakIndex(_this, breaks);
                    if (actualBreak != lastBreak) {
                        lastBreak = actualBreak;
                        $this.trigger("break", [lastBreak]);
                    }
                });
            }
        });
    };
})(jQuery);

// Uncomment the following line to enable it wherever, or call this on each page you want to use:
// $(window).advancedBreak();