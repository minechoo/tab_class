/*property 접근자
get : 프러퍼티의 key에 접근할때 자동으로 호출되는 접근자
set : ㅍ러퍼티에 value에 값이 담길때 자동으로 호출되는 접근자
*/

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
		//this.bindingEvent();
	}

	//tab이라는 property key에 접근하는 순간 호출되는 방식
	get tab() {
		return this.value;
	}
	//tab이라는 property value 값을 담으려는 순간 호출되는 함수
	set tab(value) {
		this.value = value.tagName === 'SECTION' ? value : document.querySelector('#tab');
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
