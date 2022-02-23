$( function(){

    //選單
	$('nav a').click(function(event){
		event.preventDefault();
		var bt = $(this).attr('href');
		var pos = $(bt).offset();
		$('html,body').animate({scrollTop:pos.top},750);
	});
    //置頂
    $('#gotop').click(function(){
        $('html,body').animate({scrollTop:0},1000);
    });
    //置頂淡入淡出
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $('#gotop').stop().fadeTo('fast',1);
        } else{
            $('#gotop').stop().fadeOut('fast');
        }
    });
    //變色
    $(window).scroll(function(){
        if($(this).scrollTop()>1000 && $(this).scrollTop()<1800){
            $('.menu').css('background-color','#f90');
            $('#gotop').css('background-color','#f90');
            $('#gotop').on({
                mouseenter: function(){
                    $('#gotop').css({'background-color':'#fff','border-color':'#f90'});
                    $('#gotop span').css('background-color','#f90',);
                },
                mouseleave: function(){
                    $('#gotop').css('background-color','#f90');
                    $('#gotop span').css('background-color','#FFF',);
                }
            });
        } else  {
            $('.menu').css('background-color','#68ae9f');
            $('#gotop').css('background-color','#68ae9f');
            $('#gotop').on({
                mouseenter: function(){
                    $('#gotop').css({'background-color':'#FFF','border-color':'#68ae9f'});
                    $('#gotop span').css('background-color','#68ae9f',);
                },
                mouseleave: function(){
                    $('#gotop').css('background-color','#68ae9f');
                    $('#gotop span').css('background-color','#FFF',);
                }
            });
        }
    });
    //換圖輪播
    $('.carousel').carousel({
        interval: 3000,
        pause: false
    });



    //固定同位置
     $('#fullpage').fullpage({
      scrollBar: true,
      sectionSelector: 'section',
      slideSelector:'.fullpage_slide',
      resetSliders:true,
      loopHorizontal:false,
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage','sixthPage'],
      menu: '#myMenu',
      fadingEffect:true
     });
    //動畫
    new WOW().init();
    //音樂介面
    

    //與視窗同高
    $(function(){
    var h = $(window).height();
    $('#banner,#about,#member,#live,#music,#media').css('height',h);
    });

    //手機NAV
    $('.plus-btn').click(function(){
      $('body').toggleClass('menu-open');
    })

    if($(window).width() < 767){   
        var mdbutton = $('.md_music_img');
        function switchToNext(){
            var _this = $(this);
            if(_this.hasClass('active'))
                return false;
            else{
                $('.md_music_img.active').removeClass('active');
                _this.addClass('active');
        }
    }
    mdbutton.on('click',switchToNext);
    
} else {
        var button = $('.music_img');
    function switchToNext(){
        var _this = $(this);
        if(_this.hasClass('active'))
            return false;
        else{
            $('.music_img.active').removeClass('active');
            _this.addClass('active');
        }
    }
    button.on('click',switchToNext);
        

};
if($(window).width() < 767)
{
    // JavaScript here 
    // 當視窗寬度小於767px時執行
} else {
    // JavaScript here
    // 當視窗寬度不小於767px時執行
}







});

// $( function(){
// 	$('.music_content div').on({
// 				mouseenter: function(){
// 					$(this).css({opacity:'1',transform:'scaleX(1.5)'});
// 					$(this).siblings().css({opacity:'.4',transform:'scaleX(0.5)'});
// 				},
// 				mouseleave: function(){
// 					$(this).css({opacity:'.4',transform:'scaleX(1)'});
// 					$(this).siblings().css({opacity:'.4',transform:'scaleX(1)'});
// 				}   
// 			});
// 		});
