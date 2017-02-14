app.controller('appController', function($timeout) {
	var vm = this;

	vm.draw = false;

	vm.isOpen = false;
	vm.selectedMode = 'md-fling';
	vm.direction = 'right';

	vm.mouseDown = mouseDown;
	vm.mouseUp = mouseUp;
	vm.mouseMove = mouseMove;
	vm.openOptions = openOptions;
	vm.download = download;
	vm.blank = blank;
	vm.mouse = {};

	vm.canvasId = 'canvas';
	vm.canvasContainer = 'paint';

	var canvas = document.getElementById(vm.canvasId);
	var ctx = canvas.getContext('2d');
	var width;
	var height;

	$timeout(function() {
		canvasSetup();
	}, 500);

	setTouchEvents();

	function setTouchEvents() {
		var el = document.getElementsByTagName("canvas")[0];
		el.addEventListener("touchstart", mouseDown, false);
		el.addEventListener("touchend", mouseUp, false);
		el.addEventListener("touchleave", mouseUp, false);
		el.addEventListener("touchmove", mouseMove, false);
	}

	function canvasSetup() {
		width = document.getElementById(vm.canvasContainer).clientWidth;
		height = document.getElementById(vm.canvasContainer).clientHeight;

		canvas.width = width;
		canvas.height = height;

		document.getElementById(vm.canvasId).style.width = width + 'px';
		document.getElementById(vm.canvasId).style.height = height + 'px';

		ctx.beginPath();
		ctx.rect(0, 0, window.innerWidth, window.innerHeight);
		ctx.fillStyle = "white";
		ctx.fill();

		ctx.lineWidth = 3;
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
		ctx.strokeStyle = '#00CC99';
	}

	function openOptions() {
		vm.isOpen = !vm.isOpen;
		console.log(vm.isOpen);
	}

	function mouseDown(e) {
		vm.draw = true;
		mouseMove(e);
	}

	function mouseMove(e) {
		if (vm.draw) {

			var x = e.offsetX ? e.offsetX : e.touches[0].clientX;
			var y = e.offsetY ? e.offsetY : e.touches[0].clientY;

			if (vm.mouse === {}) {
				vm.mouse = {
					'x': x,
					'y': y
				};
			}

			ctx.beginPath();
			ctx.moveTo(vm.mouse.x, vm.mouse.y);
			ctx.lineTo(x, y);
			ctx.stroke();

			vm.mouse.x = x;
			vm.mouse.y = y;
		}
	}

	function mouseUp(e) {
		vm.draw = false;
		vm.mouse = {};
	}

	function download() {
		var canvas = document.getElementById('canvas');

		window.canvas2ImagePlugin.saveImageDataToLibrary(
			function(msg) {
				console.log(msg);
			},
			function(err) {
				console.log(err);
			},
			canvas
		);
	}

	function blank() {
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, width, height);
	}
});
