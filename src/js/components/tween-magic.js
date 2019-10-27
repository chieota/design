// import {TweenMax} from 'gsap';
// window.TweenMax = TweenMax;
// import ImportsLoader from 'imports-loader';

window.ScrollMagic = require('scrollmagic');
require('imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
window.gsap = require('gsap');
import ScrollMagic from 'scrollmagic';

export default function tweenMagic() {
    let controller = new ScrollMagic.Controller();
    let tween1 = TweenMax.from(".content-phone-a", 1, {
        opacity: 0.8,
        transform: "translate(0px, -50px)"
    });
    let tween2 = TweenMax.from(".content-phone-b", 1, {
        opacity: 0.8,
        transform: "translate(0px, -50px)"
    });
    let tween3 = TweenMax.from(".content-phone-c", 1, {
        opacity: 0.8,
        transform: "translate(0px, -50px)"
    });
    let tween4 = TweenMax.from(".feature-item-html", 0.5, {
        opacity: 0.2,
        transform: "translate(0px, 50px)"
    });
    let tween5 = TweenMax.from(".feature-item-css", 0.5, {
        opacity: 0.2,
        transform: "translate(0px, 50px)"
    });
    let tween6 = TweenMax.from(".feature-item-js", 0.5, {
        opacity: 0.2,
        transform: "translate(0px, 50px)"
    });
        let scene1 = new ScrollMagic.Scene({
        triggerElement: '.content-phone-a',
        offset: 30
    })
    .setTween(tween1)
    .addTo(controller);
    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.content-phone-b',
        offset: 30
    })
    .setTween(tween2)
    .addTo(controller);
    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.content-phone-c',
        offset: 30
    })
    .setTween(tween3)
    .addTo(controller);
    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.feature-item-html',
        offset: -500
    })
    .setTween(tween4)
    .addTo(controller);
    let scene5 = new ScrollMagic.Scene({
        triggerElement: '.feature-item-css',
        offset: -450
    })
    .setTween(tween5)
    .addTo(controller);
    let scene6 = new ScrollMagic.Scene({
        triggerElement: '.feature-item-js',
        offset: -400
    })
    .setTween(tween6)
    .addTo(controller);
        

}



