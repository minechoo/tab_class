class Tab {
	constructor(selector, option) {
		//defaults, results값은 굳이 인스턴스 객체에 전달할 필요가 없으므로
		//지역변수로 설정
		//this 객체에 특정 정보값을 복사해서 전달하는 구조이므로
		//가급적이면 this로 복사해야할 정보값을 줄이는 걸 권장
		//defaults 와 result 값을 인스턴스 객체에서 직접적으로 필요한 값이 아니므로 지역변수로 설정
		//해당 생성자를 통해서 복사가 될때마다 지역변수로 설정한 값을 static하게 유지가 됨
		const defaults = { btns: 'ul li', boxs: 'article div' };
		const result = { ...defaults, ...option };
		this.tab = document.querySelector(selector);
		this.btns = this.tab.querySelectorAll(result.btns);
		this.boxs = this.tab.querySelectorAll(result.boxs);
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
		arr.forEach((el) => el.classList.remove('on'));
		arr[idx].classList.add('on');
	}
}
