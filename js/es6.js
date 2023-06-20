class Tab {
	constructor(selector, option) {
		this.tab = document.querySelector(selector);
		this.btns = this.tab.querySelectorAll(option.btns);
		this.boxs = this.tab.querySelectorAll(option.boxs);
		this.bindingEvent();
	}

	bindingEvent() {
		this.btns.forEach((el, idx) => {
			el.addEventListener('click', () => {
				[this.btns, this.boxs].forEach((el) => this.activation(el, idx));
			});
		});
	}

	activation(arr, idx) {
		arr.forEach((el) => {
			el.classList.remove('on');
		});
		arr[idx].classList.add('on');
	}
}

new Tab('#tab', {
	btns: 'ul li',
	boxs: 'article div',
});
