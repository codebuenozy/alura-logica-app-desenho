		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		var corLinha = document.getElementById("corLinha").value;
		var borrachaAtivada = false;
		var desenhando = false;
		var mouseX, mouseY;
		
		canvas.width = window.innerWidth - 20;
		canvas.height = window.innerHeight - 120;

		canvas.addEventListener("mousedown", function(event) {
			desenhando = true;
			mouseX = event.pageX - canvas.offsetLeft;
			mouseY = event.pageY - canvas.offsetTop;
		});

		canvas.addEventListener("mousemove", function(event) {
			if (desenhando) {
				desenhar(mouseX, mouseY, event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
				mouseX = event.pageX - canvas.offsetLeft;
				mouseY = event.pageY - canvas.offsetTop;
			}
		});

		canvas.addEventListener("mouseup", function(event) {
			desenhando = false;
		});

		canvas.addEventListener("touchstart", function(event) {
			desenhando = true;
			mouseX = event.touches[0].pageX - canvas.offsetLeft;
			mouseY = event.touches[0].pageY - canvas.offsetTop;
		});

		canvas.addEventListener("touchmove", function(event) {
			if (desenhando) {
				desenhar(mouseX, mouseY, event.touches[0].pageX - canvas.offsetLeft, event.touches[0].pageY - canvas.offsetTop);
				mouseX = event.touches[0].pageX - canvas.offsetLeft;
				mouseY = event.touches[0].pageY - canvas.offsetTop;
			}
		});

		canvas.addEventListener("touchend", function(event) {
			desenhando = false;
		});

		function desenhar(x1, y1, x2, y2) {
			if (borrachaAtivada) {
				ctx.strokeStyle = "white";
				ctx.lineWidth = 20;
			} else {
				ctx.strokeStyle = corLinha;
				ctx.lineWidth = 5;
			}
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.stroke();
			ctx.closePath();
		}

		function usarLapis() {
			borrachaAtivada = false;
		}

		function usarBorracha() {
			borrachaAtivada = true;
		}

		function limpar() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}

		document.getElementById("corLinha").addEventListener("input", function() {
			corLinha = this.value;
		});
