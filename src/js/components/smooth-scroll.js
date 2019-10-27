import $ from 'jquery';

let smoothScroll = () => {

    'use strict';

    const HEADER_HEIGHT = $('#js-header').height();

    let $document = $(document);

    let mStopOn = () => {
        $document.on('DOMMouseScroll', preventDefault);
        $document.on('mousewheel', preventDefault);
    };

    let mStopOff = () => {
        $document.off('DOMMouseScroll', preventDefault);
        $document.off('mousewheel', preventDefault);
    };

    let preventDefault = (event) => {
        event.preventDefault();
    };

    let handleClick = (e) => {
        if (!$(e.currentTarget).hasClass('nolink')) {
            let id = $(e.currentTarget).attr('href'),
                target = $(id).offset().top;
            mStopOn();
            $('html,body').animate({scrollTop: target - HEADER_HEIGHT}, 500, mStopOff);
            e.preventDefault();
        }
    };

    $(document).on('click', 'a.js-scroll', handleClick);
}

export default smoothScroll;