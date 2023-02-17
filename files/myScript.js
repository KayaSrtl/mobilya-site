//Copyright 2023 Kaya Sertel. All Rights Reserved.

var window_height, window_width, old_active_index = 0, new_active_index, current_active_index = 0;

$( document ).ready(function() {
	var mySwiper = new Swiper('.swiper-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		autoplay: {
			delay: 3000, // change delay as needed
		},
		on: {
			slideNextTransitionEnd: (swiper) => {
				console.log('SWIPED RIGHT');
				if(current_active_index == 3)
					current_active_index = 0;
				else
					current_active_index++;
				
				new_active_index = current_active_index;//mySwiper.activeIndex;
				var elementID = "transClick_";
				document.getElementById(elementID + old_active_index).className = "trans_click";
				document.getElementById(elementID + new_active_index).className = "trans_click trans_active";
				old_active_index = new_active_index;
			},
			slidePrevTransitionEnd: (swiper) => {
				console.log('SWIPED LEFT');
				if(current_active_index == 0)
					current_active_index = 3;
				else
					current_active_index--;
				
				new_active_index = current_active_index;//mySwiper.activeIndex;
				var elementID = "transClick_";
				document.getElementById(elementID + old_active_index).className = "trans_click";
				document.getElementById(elementID + new_active_index).className = "trans_click trans_active";
				old_active_index = new_active_index;
			}
		},
		loop: true,
	});
	
	/*$( ".left_right_buttons_swipper" ).hover(function() {
		$(this).css({"-webkit-transform": "translateY(-5px)"});
		$(this).addClass("swiper_button_hover");
	}, function() {
		$(this).css({"-webkit-transform": "translateY(0px)"});
		$(this).removeClass("swiper_button_hover");
	});
	*/
	
	/*$(".icon.whatsapp").on('click', function(){
		window.open('https://wa.me/xxxxxxxxxxxxx', '_blank');
	});
	
	$(".icon.map.TURKEY").on('click', function(){
		window.open('https://goo.gl/maps/4X9SkuMErJdEcfG67', '_blank');
	});*/
	
	$(".left_right_buttons_swipper").on('click', function(){
		setTimeout(function() { mySwiper.autoplay.start();}, 6000);
		//if($(this).attr('class').slice(14, 18) == "prev")	//swiper-button-prev
			//;
	});
	
	$(".trans_click").on('click', function(){
		alert($(this).attr('id'));
		index = 2;
		mySwiper.slideTo(index);
		current_active_index = index;
	});
	
	beReadyPage();
	
	
	/*
	// Define the function to go to the last slide from the first slide
	function goToLastSlide() {
		mySwiper.slideTo(mySwiper.slides.length - 1);
	}

	// Define the function to go to the first slide from the last slide
	function goToFirstSlide() {
		mySwiper.slideTo(0);
	}

// Add a click event listener to the first slide to go to the last slide
	var firstSlide = document.querySelector('.swiper-slide:first-of-type');
	firstSlide.addEventListener('click', function() {
		if (mySwiper.activeIndex == 0) {
			for(var i = 0; i < mySwiper.slides.length - 1; i++)
				mySwiper.slideNext(i*30);
			current_active_index = 3;
			alert(mySwiper.activeIndex);
		}
	});

	// Add a click event listener to the last slide to go to the first slide
	var lastSlide = document.querySelector('.swiper-slide:last-of-type');
	lastSlide.addEventListener('click', function() {
		if (mySwiper.activeIndex == mySwiper.slides.length - 1) {
			goToFirstSlide();
			current_active_index = 0;
		}
	});*/
	
	var mySwiper = $(".swiper-container")[0].swiper;
	mySwiper.autoplay.stop();
	/*mySwiper.autoplay.start();
	$('.go_furniture_detail_a').mouseenter(function() {
		mySwiper.autoplay.stop();
	}).mouseleave(function() {
		mySwiper.autoplay.start();
	})*/
	
	mySwiper.on('slideChange', function () {
		if (mySwiper.autoplay.running) {
			if(current_active_index == 3)
				current_active_index = 0;
			//console.log('Slide changed automatically');

		} else {
			//console.log('Slide changed by user');
		}

	});
});

$(window).scroll(function(event){
	
	
});


$( window ).resize(function() {
	beReadyPage();
	setTimeout(function() { beReadyPage();}, 100);
	return;
});



function beReadyPage() {
	window_height = parseInt($( window ).height());
	window_width = parseInt($( window ).width());
	$(".swiper-container-wrapper").css("height", window_height);
	$(".main_container_2").css("height", window_height);
	
	if(window_width < 620) { 
		$(".mapouter").css("width", window_width - 20);
		$(".gmap_iframe").css("width", window_width - 20);
		$(".gmap_canvas").css("width", window_width - 20);
		document.getElementById('map1').style.width = ((window_width - 20) + "px");
	} else {
		$(".mapouter").css("width", 600);
		$(".gmap_iframe").css("width", 600);
		$(".gmap_canvas").css("width", 600);
		document.getElementById('map1').style.width = '600px';
	}
}

/*setTimeout(function() { changeImgg(); }, 5000);

function changeImgg() {
	if(is_change_on_going && !is_trans_button_clicked)
		transImg(transNum+1);
	is_trans_button_clicked = false;
	setTimeout(function() { changeImgg(); }, 5000);
}*/

setTimeout(function() { beReadyPage();}, 200);
setTimeout(function() { beReadyPage();}, 500);
