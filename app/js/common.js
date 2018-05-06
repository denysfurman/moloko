


    jQuery(document).ready(function($){

        //  mobile menu
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
            $('body').removeClass('search-active');

            //check if transitions are not supported - i.e. in IE9
            if($('html').hasClass('no-csstransitions')) {
                $('body').toggleClass('overflow-hidden');
            }
        });

        //form
        $('.form_style').styler({
            selectSearch: true
        });


        //tabs
        $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
            e.preventDefault();
            var $this = $(this),
                tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('href');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('div').hide();
            $(target).show();

        })
//serch
        $('.control , .icon-material-search , icon-material-search img , .btn-material').click( function(){
            $('body').addClass('search-active');
            $('.input-search').focus();
            $('.icon-close').fadeIn();
        });

        $('.icon-close').click( function(){
            $('body').removeClass('search-active');
            $('.icon-close').fadeOut();
        });








    });





