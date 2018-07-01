$(function(){

	function resize(){
		//get window width
		var windowWidth = $(window).width();

		var isSm = windowWidth<768;

		//for loop dom object 
		$('#main_ad  .carousel-inner   .item').each(function(i,item){
			var $item = $(item); //DOM、转换成jquery对象
			var images = isSm ? $item.data('image-xs') : $item.data('image-lg');
			//需要小图时图片等比例缩放 使用img方式展现更好
			if(isSm){
				$item.css('backgroundImage', 'none');
				$item.html('<img src="'+images+'" alt="" class="img-responsive" />');
			}else{
				$item.empty();
				$item.css('background', 'url("'+images+'") center center no-repeat');
			}

		});
	}

	$(window).on('resize',resize).trigger('resize');
 	var $carousels = $('.carousel');
 	var startX;
 	var moveX;
	 $carousels.on('touchstart',function(e){
	 	startX=e.originalEvent.touches[0].clientX;
	 })

	 $carousels.on('touchmove',function(e){
	 	moveX=e.originalEvent.touches[0].clientX;
	 })

	 $carousels.on('touchend',function(e){
		 	// 触摸结束比大小
		 	var distance = startX-moveX;
		 	if(distance>60){
		 		$(this).carousel('next');
		 	}else if(distance<-60){
		 		$(this).carousel('prev');
		 	}else{
		 			// nothing important here
		 	}
	 })

});