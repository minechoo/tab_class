/*property 접근자
get : 프러퍼티의 key에 접근할때 자동으로 호출되는 접근자
set : ㅍ러퍼티에 value에 값이 담길때 자동으로 호출되는 접근자

클래스에 직접 값을 등록할때
public : 클래스에 등록한
static : 고정적인 상태로 값을 저장 접근가능 확인 변경
provite : 접근 및 변경이 불가
*/

class Tab {
	//인스턴스가 복사가 될때마다 매번 메모리할당을 할 필요가 없는 공통의 값을 클래스자체에 등록
	//클래스에 등록한 변수 앞쪽에 #을 붙이면 private설정으로 변경되고
	//private로 등록된 변수는 외부에서 변경 불가능한 캡슐화 상태
	#defaults = { btns: 'ul li', boxs: 'article div' };

	constructor(selector, option) {
		//defaults, results값은 굳이 인스턴스 객체에 전달할 필요가 없으므로
		//지역변수로 설정
		//this 객체에 특정 정보값을 복사해서 전달하는 구조이므로
		//가급적이면 this로 복사해야할 정보값을 줄이는 걸 권장
		//defaults 와 result 값을 인스턴스 객체에서 직접적으로 필요한 값이 아니므로 지역변수로 설정
		//해당 생성자를 통해서 복사가 될때마다 지역변수로 설정한 값을 static하게 유지가 됨

		const result = { ...this.#defaults, ...option };
		this.tab = document.querySelector(selector);
		this.btns = this.tab.querySelectorAll(result.btns);
		this.boxs = this.tab.querySelectorAll(result.boxs);
		//해당 생성자를 통해서 복사가 될 인스턴스 객체를 강제로 고정시켜서
		//추후 해당 인스턴스의 property값 변경자체를 막음
		Object.freeze(this);
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
