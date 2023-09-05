


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
					popupWorkSlider()
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


const cabiSlider = new Swiper('.work-slider', {
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: '.work-next',
		prevEl: '.work-prev'
	},
	pagination: {
		el: '.work-pagination',
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 2.3,
			spaceBetween: 80,
		},
	}
})





function accordion(title, content) {
	// hide all content	
	let accordionTitle = $(title),
		accordionContent = $(content);
	$(accordionContent).hide();
	
	$(accordionTitle).on('click', function () {
		let $this = $(this);
		$this.parent().toggleClass('active_mod').siblings().removeClass('active_mod');
		$(accordionContent).slideUp();

		if (!$this.next().is(":visible")) {
			$this.next().slideDown();
		}
	});
};

accordion('.faq_item--head', '.faq_item--content');

$('.up').click(function () {
	$('body,html').animate({ scrollTop: 0}, 800); // 800 - Скорость анимации
});

$(window).scroll(function() { 
	let scrolled = $(window).scrollTop();
	if(scrolled > 10000) {
			$('.up').addClass('active');
	} else {
			$('.up').removeClass('active');
	}
});



$(document).ready(function() {
	const popupThumb = new Swiper(".popup-thumb", {
		// spaceBetween: 1,
		freeMode: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		watchOverflow: true,
		breakpoints: {
			320: {
				slidesPerView: 4,
				// spaceBetween: 5,
				direction: 'horizontal'
			},
			768: {
				slidesPerView: 5,
				// spaceBetween: 5,
				direction: 'vertical'
			},
			1200: {
				slidesPerView: 5
			}
		},
	});
	const popupSlider = new Swiper(".popup-slider", {
		spaceBetween: 20,
		watchOverflow: true,
		navigation: {
			nextEl: '.popup-next',
			prevEl: '.popup-prev'
		},
		keyboard: {
			enabled: true,
		},
		thumbs: {
			swiper: popupThumb
		}
	});
})

// function popupWorkSlider() {

// 	console.log('Good')
// 			const popupThumb = new Swiper(".popup-thumb", {
// 				spaceBetween: 11,
// 				slidesPerView: 4,
// 				freeMode: false,
// 				watchSlidesVisibility: true,
// 				watchSlidesProgress: true,
// 				watchOverflow: true,
// 				scrollbar: {
// 					el: '.singleproducts_thumb_scrollbar',
// 					draggable: true,
// 				},
// 				breakpoints: {
// 					480: {
// 						direction: "horizontal",
// 						slidesPerView: 4
// 					},
// 					768: {
// 						direction: "horizontal",
// 						slidesPerView: 4
// 					},
// 					1200: {
// 						direction: "vertical",
// 						slidesPerView: 4
// 					}
// 				},
// 			});
// 			const popupSlider = new Swiper(".popup-slider", {
// 				spaceBetween: 20,
// 				keyboard: {
// 					enabled: true,
// 				},
// 				thumbs: {
// 					swiper: popupThumb
// 				}
// 			});
// }




document.addEventListener('DOMContentLoaded', () => {
	let quizWrapper = document.querySelector('.hero-quiz')
	let quizStartBtn = quizWrapper.querySelector('.start-quiz')

	const quizSteps = document.querySelectorAll(".quiz-step");

	const quizNavigation = document.querySelector('.quiz-nav')
	const quizPavigation = document.querySelector('.quiz-pagination')

	let currentStepPagination = document.querySelector('.current-step')
	let allStepPagination = document.querySelector('.all-step')

	let currentStep = 0;


	function scrollToQuiz() {
		// Проверяем ширину экрана
		const screenWidth = window.innerWidth;
		
		// Определяем элемент, к которому хотим прокрутить
	
		if (quizWrapper) {
			if (screenWidth <= 768) { // На мобильных устройствах
				quizWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
				console.log('Good')
			}
		}
	}
	

	
	quizStartBtn.addEventListener('click', () => {
		scrollToQuiz();
		if(quizWrapper.classList.contains('active')) {
			quizWrapper.classList.remove('active')
		} else {
			quizWrapper.classList.add('active')
			quizPavigation.style.display = 'flex'
		}
	})

	function showStep(stepIndex) {
    quizSteps.forEach((step, index) => {
      if (index === stepIndex) {
        step.style.display = "block";
      } else {
        step.style.display = "none";
      }
			// console.log('Good', index)

    });
  }

	function nextStep() {
		if (currentStep < quizSteps.length - 1) {
			currentStep++;
			showStep(currentStep);
			quizPagination()
			scrollToQuiz();
		}
		if(currentStep === 7) {
			quizNavigation.style.display = "none";
			quizPavigation.style.display = "none";
			quizWrapper.classList.add('end-quiz')
		}
		
	
		if (currentStep > 0) {
			prevButton.classList.add("active");
		} else {
			prevButton.classList.remove("active");
		}
	}
	
	
	function prevStep() {
		if (currentStep > 0) {
			currentStep--;
			showStep(currentStep);
		}
		quizPagination()
		scrollToQuiz();
		if (currentStep > 0) {
			prevButton.classList.add("active");
		} else {
			prevButton.classList.remove("active");
		}
	
		// Возвращаем видимость навигации при переходе назад
		quizNavigation.style.display = "flex";
	}


  // Назначение обработчиков событий для кнопок "Далее" и "Назад"
  const nextButton = document.querySelector(".quiz-next button");
  const prevButton = document.querySelector(".quiz-prev");

	if(nextButton) {
		nextButton.addEventListener("click", nextStep);
	}

	if(prevButton) {
		prevButton.addEventListener("click", prevStep);
	}

  // Начать с первого вопроса
  showStep(currentStep);

	function quizPagination() {
		allStepPagination.innerHTML = quizSteps.length - 1
		currentStepPagination.innerText = currentStep + 1
		console.log(currentStep)
	}

	quizPagination();
})

$(document).ready(function() {
	var slider = document.querySelector('.quiz_input--slider');
	var valueElement = document.querySelector('.slider-value');
	let sliderPips = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200];

	noUiSlider.create(slider, {
			start: [20],
			connect: [true, false],
			step: 20,
			mode: 'values',
			values: [20],
			pips: {
					mode: 'steps',
					filter: function(value) {
							// Функция форматирования для меток
							return sliderPips.indexOf(value) !== -1 ? 1 : 0;
					},
					format: {
							to: function(value) {
									return String(value);
							},
							from: function(value) {
									return parseFloat(value);
							}
					}
			},
			range: {
					'min': 0,
					'max': 200
			}
	});
});




// Функция для проверки, виден ли элемент на экране
function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

// Функция для добавления класса "active" к видимым элементам с задержкой
function addActiveClassToItems() {
	const orderItems = document.querySelectorAll('.order-item');
	
	orderItems.forEach((item, index) => {
			setTimeout(() => {
					if (isElementInViewport(item)) {
							item.classList.add('active');
					}
			}, index * 200); // Задержка в миллисекундах (200 миллисекунд = 0.2 секунды)
	});
}


window.addEventListener('scroll', addActiveClassToItems);


$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})











