// var tab = document.querySelector('#tab');
// var btns = tab.querySelectorAll('ul li');
// var boxs = tab.querySelectorAll('article div');

// btns.forEach(function (btn, idx) {
// 	btn.addEventListener('click', function () {
// 		[btns, boxs].forEach(function (el) {
// 			activation(el, idx);
// 		});
// 	});
// });

// function activation(arr, idx) {
// 	arr.forEach(function (el) {
// 		el.classList.remove('on');
// 	});
// 	arr[idx].classList.add('on');
// }

new Tab('#tab', {
	btns: 'ul li',
	boxs: 'article div',
});

function Tab(selector, option) {
	this.tab = document.querySelector(selector);
	this.btns = this.tab.querySelectorAll(option.btns);
	this.boxs = this.tab.querySelectorAll(option.boxs);
	console.log('constructor', this);

	this.btns.forEach(
		function (btn, idx) {
			console.log('forEach', this); //forEach안쪽에서는 this -> 인스턴스가 아닌 window
			btn.addEventListener(
				'click',
				function () {
					console.log('event', this); //이벤트문안쪽에서의 this -> 이벤트가 발생한 대상
					[this.btns, this.boxs].forEach(
						function (el) {
							this.activation(el, idx);
						}.bind(this)
					);
				}.bind(this)
			); //forEach안쪽의 인스턴스 this객체값을 다시 이벤트 안쪽의 this객체값으로 고정
		}.bind(this)
	); //forEach밖의 인스턴스 this객체를 forEach의 안쪽의 this객체값으로 고정
}

Tab.prototype.activation = function (arr, idx) {
	arr.forEach(function (el) {
		el.classList.remove('on');
	});
	arr[idx].classList.add('on');
};
