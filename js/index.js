$(function(){
	// 获取当前屏幕高度
	var h=$(window).height();
	var flg= false;
	$(".next").click(function(){
		$.fn.fullpage.moveSectionDown();
	});
	$("#fullpage").fullpage({
		navigation:true,
		//滚动到第二屏开始的动画 
		
		
		afterLoad : function(anchorLink,index){
			
			if(index== 2 && flg== false){
				$(".next").fadeOut();
				$(".search").show().animate({"right":370},1500,function(){
					$(".search_img").animate({"opacity":1},1000,function(){
						$(".search").hide();
						$(".search_01").show().animate({"height":30,"right":250,"bottom":452},1000,function(){
							flg= true;
						});
						$(".search_02").show().animate({"height":218},1000);
						$(".word_02").animate({"opacity":1},1000,function(){
							$(".next").fadeIn();
						});
					})
				});
			}
			
			// 滚动到第五屏开始的动画
			if(index==5){
				$(".next").fadeOut();
				$(".hand_5").animate({"bottom":0},1000,function(){
					$(".mouseA").show();
					$(".shirt_5").show().animate({"bottom":70},1500,function(){
						$(".order_5").animate({"bottom":390},1000,function(){
							$(".word_5").show().addClass("word_5_1");
							$(".next").fadeIn();
						});
						
					});
				});	
			}
			// 第八屏隐藏继续往下按钮
			if(index==  8){
				$(".next").fadeOut();
			}
			
		},
		
		onLeave:function(index,nextIndex,direction){
			// 屏幕开始滚动到第三屏的动画
			if(index== 2 && nextIndex == 3 && flg == true){
				$(".next").fadeOut();
				$(".shirt_02").show().animate({"bottom":-(h-250),"width":207,"left":260},2000,function(){
					$(".img_1").animate({"opacity":1},1000);
					$(".btn_1").animate({"opacity":1},1000,function(){
						$(".next").fadeIn();
					});
				});
				$(".cover").show();
			}
			// 屏幕开始滚动到第4屏的动画
			if(index== 3 && nextIndex == 4){
				$(".next").fadeOut();
				$(".shirt_02").hide();
				$(".shirt_04").show().animate({"bottom":-(h-200),"width":207,"left":246,"z-index":-1},1500,function(){
					$(this).hide();
					$(".carShirt").show();
					$(".car").animate({"left":"200%"},5000,"easeInBounce",function(){
						$(".note").show();
						$(".note_word").animate({"opacity":1},2000);
						$(".word_04_a").animate({"opacity":1},2000,function(){
							$(".next").fadeIn();
						});
					});
				});
				
			}
			
			// 屏幕开始滚动到第6屏的动画
			
			if(index== 5 && nextIndex == 6){
				$(".next").fadeOut();
				$(".shirt_5").animate({"bottom":-(h-500),"left":"40%","width":65},1500,function(){
					$(this).hide();
				});
				$(".box_06").animate({"left":"37%"},1500,function(){
					$(this).animate({"bottom":40},800,function(){
						$(this).hide();
						$(".section6").animate({"backgroundPositionX":"100%"},3000,function(){
							$(".man_06").animate({"height":305,"bottom":116},900,function(){
								$(this).animate({"right":500},900,function(){
									$(".shopping").animate({"opacity":1},1000);
									$(".door").animate({"opacity":1},200,function(){
										$(".women_06").show().animate({"height":305,"right":350},1000,function(){
											$(".next").fadeIn();
										});
									} );
								});
							});
							$(".pop_06").animate({"opacity":0},1000);
			
						});
						$(".word_06").show().animate({"left":"30%"},3000,"easeInOutBounce");
						$(".pop_06").show();
					});
				});
				
			}
			
			
			
			// 屏幕开始滚动到第7屏的动画
			
			if(index== 6 && nextIndex == 7){
				$(".next").fadeOut();
				setTimeout(function(){
					$(".star").animate({"width":120},800,function(){
						$(".good_07").animate({"opacity":1},1000,function(){
							$(".next").fadeIn();
						});
					});
				},1300);
			}
			
			// 屏幕开始滚动到第8屏的动画
			$(".beginShop").hover(function(){
				$(".btn_08_a").toggle();
			});
			$(document).mousemove(function(event){
				var x = event.pageX - $(".hand_08").width()/2;
				var y = event.pageY+10;
				var miniY = h-449;
				if(y<miniY){
					$(".hand_08").css({"left":x,"top":miniY});
				}else {
					$(".hand_08").css({"left":x,"top":y});
				}
				
			});
			$(".again").click(function(){
				
				$.fn.fullpage.moveTo(1);
				$(".section6").animate({"backgroundPositionX":"25%"},1000);
				
				$("img,.overHide,.cover,.reMove").attr("style","");
				
				flg = false;
			});
			
			
		},
	});
});