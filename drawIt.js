class DrawInstance {
	canvas = undefined;
	context = undefined;
	w = undefined;
	h = undefined;

	objectsArray = [];

	constructor(canvasIdentifier, w, h) {
		this.canvas = document.querySelector(canvasIdentifier);
		this.canvas.width = w;
		this.canvas.height = h;
		this.w = w;
		this.h = h;
		this.context = this.canvas.getContext("2d");
	}

	// MEMORY CREATING
	CreateRectMemorySpace({ x, y, w, h, color = "#000", outline = false }) {
		this.objectsArray.push({ x, y, w, h, color, outline });
	}

	CreateArcMemorySpace({
		cx,
		cy,
		radius,
		startAngle = 0,
		endAngle = 2 * Math.PI,
	}) {
		this.objectsArray.push(cx, cy, radius, startAngle, endAngle);
	}
	//                                                                             //

	DrawSquare(assignId, type = "filled") {
		var obj = this.objectsArray[assignId];
		this.context.beginPath();
		this.context.fillStyle = obj.color;
		if (type == "filled") {
			this.context.fillRect(obj.x, obj.y, obj.w, obj.h);
		} else if ((type = "outlined")) {
			this.context.rect(obj.x, obj.y, obj.w, obj.h);
			this.context.stroke()
		}
		this.context.closePath();
	}

	DrawArc(assignId, type = "outline") {
		let obj = this.objectsArray[assignId];
		this.context.beginPath();
		this.context.arc(obj.cx, obj.cy, obj.radius, obj.startAngle, obj.endAngle);
		if (type == "outline") {
			this.context.stroke();
		} else {
			this.context.fill();
		}
		this.context.closePath();
	}

	DrawCanvasBorders(px) {
		this.canvas.style.border = `${px}px solid black`;
	}

	ClearScreenColor(color) {
		this.context.fillStyle = color;
		this.context.fillRect(0, 0, this.w, this.h);
	}

	ClearScreen() {
		this.context.clearRect(0, 0, this.w, this.h);
	}

	GetRectPos(i) {
		return this.objectsArray[i];
	}
	// OBJECT CHANGES
	// RECTS
	SetRectPos( i, x, y ) {
		this.objectsArray[i]._x = x;
		this.objectsArray[i]._y = y;
	}

	SetStyle(index, color) {
		this.objectsArray[index].color = color
	}
}
