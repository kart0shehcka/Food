function openModal(modalSellector, modalTimerId) {
	const modal = document.querySelector(modalSellector);
	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = 'hidden';

	if (modalTimerId) {
		clearInterval(modalTimerId);
	}

}

function closeModal(modalSellector) {
	const modal = document.querySelector(modalSellector);
	modal.classList.add('hide');
	modal.classList.remove('show');
	document.body.style.overflow = 'scroll';
}

function modal(triggerSelector, modalSellector, modalTimerId) {
	// MODAL
	const modalTrigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSellector);


	modalTrigger.forEach(btn => {
		btn.addEventListener('click', () => openModal(modalSellector, modalTimerId));
	});
	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closeModal(modalSellector);
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModal(modalSellector);
		}
	});

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal(modalSellector, modalTimerId);
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);

}

export default modal;

export { closeModal };
export { openModal };