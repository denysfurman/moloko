

    //  mobile menu
    jQuery(document).ready(function($){
        var $lateral_menu_trigger = $('#cd-menu-trigger'),
            $content_wrapper = $('.cd-main-content'),
            $navigation = $('header');

        //open-close lateral menu clicking on the menu icon
        $lateral_menu_trigger.on('click', function(event){
            event.preventDefault();

            $lateral_menu_trigger.toggleClass('is-clicked');
            $navigation.toggleClass('lateral-menu-is-open');
            $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
                $('body').toggleClass('overflow-hidden');
            });
            $('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
            $('body').toggleClass('shadow');
            $('.cd-navigation li').toggleClass('inner');

            //check if transitions are not supported - i.e. in IE9
            if($('html').hasClass('no-csstransitions')) {
                $('body').toggleClass('overflow-hidden');
            }
        });
    });


