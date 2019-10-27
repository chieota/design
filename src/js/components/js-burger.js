import $ from 'jquery';
export default function jsBurger(){
   
  $(function() {
    $('.nav-button').click(function() {
        $(this).toggleClass('is-active');
        if ($(this).hasClass('is-active')){
            $('.nav-wrap-sp').addClass('is-active');
        } else {
            $('.nav-wrap-sp').removeClass('is-active');
        }
    });
});

  $(function(){
    $('.js-active-not').click(function(){
      $(this).toggleClass('is-active');
      if ($(this).hasClass('is-active')) {
        $('.nav-wrap-sp').addClass('is-active');
    } else {
        $('.nav-wrap-sp').removeClass('is-active');
        $('.nav-button').removeClass('is-active');
    }
});        
});    
}

