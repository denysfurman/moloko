


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

            //check if transitions are not supported - i.e. in IE9
            if($('html').hasClass('no-csstransitions')) {
                $('body').toggleClass('overflow-hidden');
            }
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
        //search
        function expand() {
            $(".search").toggleClass("close");
            $(".input").toggleClass("square");
            if ($('.search').hasClass('close')) {
                $('input').focus();
            } else {
                $('input').blur();
            }
        }
        $('button').on('click', expand);
        //chart js
        var lineChartData = {
            labels: ["19 мар", "26 мар", "02 апр", "09 апр", "16 апр", "23 апр"],
            datasets: [{
                fillColor: "transparent",
                strokeColor: "#4c5a6c",
                pointColor:"#4c5a6c",
                data: [2, 4, 1, 8,4,6]
            }]

        }

        Chart.defaults.global.animationSteps = 50;
        Chart.defaults.global.tooltipYPadding = 16;
        Chart.defaults.global.tooltipCornerRadius = 0;
        Chart.defaults.global.tooltipTitleFontStyle = "normal";
        Chart.defaults.global.tooltipFillColor = "#000";
        Chart.defaults.global.animationEasing = "easeOutBounce";
        Chart.defaults.global.responsive = true;
        Chart.defaults.global.scaleLineColor = "black";
        Chart.defaults.global.scaleFontSize = 16;

        var ctx = document.getElementById("canvas").getContext("2d");
        var LineChartDemo = new Chart(ctx).Line(lineChartData, {
            pointDotRadius: 10,
            bezierCurve: false,
            scaleShowVerticalLines: false,
            scaleGridLineColor: "black"
        });




    });





