import 'slick-carousel';
import $ from 'jquery';


export default function featureSlider(){
    let mediaQuery = matchMedia('(max-width:768px)');
    handle(mediaQuery);

    mediaQuery.addListener(handle);
    function handle(mq){
        if(mq.matches){
            $(document).find('.js-feature-box').not('.slick-initialized').slick();
            // console.log("correct");
        }else{
            return;
        }
    }
}