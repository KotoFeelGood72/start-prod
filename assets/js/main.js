


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
	// if(devStatus) {
	// 	pageWidget(['index']);
	// 	getAllClasses('html', '.elements_list');
	// }
	modal();
});

$(window).on('load', function () {

});


function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function modal() {
	let popup = document.querySelectorAll('.popup')
	let btnArray = document.querySelectorAll('.trigger')
	
	btnArray.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target
			popup.forEach((el) => {
				if(el.dataset.id == path) {
					isOpen(el)
				}
			})
			
		})
	})
	

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll('.remove')
		remove.forEach(el => {
			el.addEventListener('click', (e) => {
				isRemove(pop);
			})
		});
	})
}



function isOpen(popup) {
	document.body.classList.add('fixed')
	popup.classList.add('active')
}

function isRemove(popup) {
	popup.classList.remove('active')
	document.body.classList.remove('fixed')
}


const cabiSlider = new Swiper('.cabinet-slider', {
	loop: true,
	freeMode: true,
	centeredSlides: true,
	breakpoints: {
		480: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,			
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
	}
})








