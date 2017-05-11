$.fn.popupInfo = function (popupText) {
    var delay = 500;
    var mouseSize = 16;
    var $that = $(this).addClass('popupInfo');

    var $popup = $('<div>')
        .addClass('popupContent')
        .text(popupText);

    $that.mouseover(function (e) {
        setTimeout(function () {
            if ($that.is(':hover')) {
                $popup.css('visibility', 'hidden');

                $that.append($popup);

                var left = e.clientX + mouseSize;
                var top = e.clientY - $popup.height() - mouseSize;

                $popup.css('left', left + 'px');
                $popup.css('top', top + 'px');

                $popup.css('visibility', 'visible');
            }
        }, delay);
    }).mouseleave(function () {
        $popup.remove();
    });
};
