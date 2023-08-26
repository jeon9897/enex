$(function(){
	
    /*메인비쥬얼 슬라이드*/
    $(".mainVisual ul").bxSlider({
		  mode:"fade",
		  auto: true,
		  autoControls:true,
		  stopAutoOnClick: true,
		  pager: true,
		  speed: 800,
		  pause: 4000, 
		  controls: true,
          autoControlsCombine: true
		
	})

    /*모바일 테블릿 버전 메뉴열기버튼*/
    $(".openMenu").click(function(){
        
        var w = $(window).width()
        if(w<1200){
            
            $(".gnbBg").css("height","100%")
			$(".openSearch").removeClass("on")
            $(".search").removeClass("on")
        	$(".gnb li .sub").stop().slideUp(200) // 메뉴가 열려있었으면 닫기
        

            if($(this).hasClass("on")){
                $(this).removeClass("on")
                $(".gnb").stop().slideUp(200)
				$(".utill").stop().slideUp(200)
                $(".gnbBg").fadeOut()
            }else{
				$(this).addClass("on")
                $(".gnbBg").fadeIn()
				$(".gnb").stop().slideDown(200)
				$(".utill").stop().slideDown(200)
            }
       
		}
         return false
        
    })
    
	 /*모바일 테블릿 버전 검색버튼열기*/
	$(".openSearch").click(function(){
        
        //초기화값
             
		$(".gnb").slideUp()// 메뉴 올리기
        $(".gnbBg").fadeOut()
        $(".openMenu").removeClass("on") //메뉴버튼 삼선으로 만들기
		$(".gnb li .sub").stop().slideUp() //메뉴열린것 닫기
		$(".utill").slideUp()//유틸 올리기
        
        if($(this).hasClass("on")){
            $(this).removeClass("on")
            $(".search").removeClass("on")
        }else{
            $(this).addClass("on")
            $(".search").addClass("on")
        }
        
        return false
    })
	
	/*모바일 테블릿 버전 검은배경 클릭시 이벤트*/
    $(".gnbBg").click(function(){
        
               
        var w = $(window).width()
        if(w<1200){
            $(this).fadeOut()
            $(".openMenu").removeClass("on")
            $(".gnb li .sub").stop().slideUp(200)
            $(".gnb").slideUp(200)
            $(".utill").slideUp(200)

            return false
            }
        
    })
    
    /*모바일 테블릿 버전 아코디언 메뉴*/
    $(".gnb li .m1").click(function(){
            
        var w = $(window).width()
        if(w<1200){
            var tg=$(this).siblings(".sub")
            var dis=tg.css("display")
            if(dis=="block"){
                tg.slideUp(200)
            }
            
            if(dis=="none"){
                $(".gnb li .sub").slideUp(200)
                tg.slideDown(200)
            }
            return false
        }
    })
    	
	//피씨버전 미디어쿼리에서 적용된 스타일시트값을 업애버리기
	// 브라우저 사이즈 변경시에 바로 작동
	$(window).resize(function(){

		 	//서브메뉴 스타일 지워버리기
            $(".gnb li .sub").removeAttr("style")
		 
		   //검은배경 초기화 시키
		 	var w = $(window).width()
			if(w>=1200){
				$(".gnbBg").slideUp(300)
			}
        })   	
	
	/*pc버전 메뉴 드랍 이벤트_마우스오버*/
    $(".gnb").mouseover(function(){
        
		
        var w = $(window).width()
        if(w>=1200){
			$(".gnbBg").css("height","300")
            $(".gnbBg").stop().slideDown(200)
            $(".gnb li .sub").stop().slideDown(200)
            $("#header").addClass("on")
        }
        
    })
    /*pc버전 메뉴 드랍 이벤트_마우스아웃*/
    $(".gnb").mouseout(function(){
        
				
        var w = $(window).width()
        if(w>=1200){
            $(".gnbBg").stop().slideUp(200)
            $(".gnb li .sub").stop().slideUp(200)
            $("#header").removeClass("on")
        }
        
    })
    
    /*pc버전 매장찾기 탭매뉴*/
    $(".tabMenu ul li").click(function(){
        $(".tabMenu ul li").removeClass("on")
		$(this).addClass("on")
		return false
    })
    
    /*pc버전 상단올라가기 버튼*/
    $(window).scroll(function(){
        if($(this).scrollTop()>40){
            $(".topBtn").fadeIn()
        }else{
            $(".topBtn").fadeOut()
        }
    })
    $(".topBtn").click(function(){
        $("html, body").animate({scrollTop:0},800)
    })
			 
})

