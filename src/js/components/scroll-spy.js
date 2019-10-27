import $ from 'jquery';
import ScrollMagic from 'scrollmagic';

    let scrollSpy = () =>{


    let ACTIVE_CLASS = 'is-current';

    // init controller
    let controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0.25,
        reverse: true
    }
    });


    let secLength = document.getElementsByTagName('section').length;
    for(let i=0; i< secLength; i+=1) { 

    new ScrollMagic.Scene({
        triggerElement: '#sec' + i,
        duration: document.getElementById('sec' + i).offsetHeight
    })
        .setClassToggle('#nav' + i, ACTIVE_CLASS)
        .addTo(controller);
    }


}
export default scrollSpy;