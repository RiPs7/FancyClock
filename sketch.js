function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
	background(0);

	textSize(20);
	text('Fancy Clock', 20, 40);

	translate(width / 2, height / 2 - 50);

	let h = hour();
	let m = minute();
	let s = second();

	let r1 = 320, r2 = 300, r3 = 280;
	let l1 = 100, l2 = 75, l3 = 50;

	push()

	rotate(-90);

	strokeWeight(4);
	noFill();

	stroke(255, 100, 150);
	let end1 = map(s, 0, 60, 0, 360);
	arc(0, 0, r1, r1, 5, end1);

	stroke(150, 100, 255);
	let end2 = map(m, 0, 60, 0, 360);
	arc(0, 0, r2, r2, 5, end2);

	stroke(150, 255, 100);
	let end3 = map(h % 12, 0, 12, 0, 360);
	arc(0, 0, r3, r3, 5, end3);

	push();
	rotate(end3);
	strokeWeight(4);
	stroke(150, 255, 100);
	line(0, 0, l3, 0);
	pop();

	push();
	rotate(end2);
	strokeWeight(2);
	stroke(150, 100, 255);
	line(0, 0, l2, 0);
	pop();

	push();
	rotate(end1);
	strokeWeight(1);
	stroke(255, 100, 150);
	line(0, 0, l1, 0);
	pop();

	pop();

	stroke(255);
	fill(255);

	textSize(20);
	for (let i = 1; i <= 12; i++){
		let angle = (360 / 12) * i - 90;
		let x = (r1 / 2 + 25) * cos(angle) - 10;
		let y = (r1 / 2 + 25) * sin(angle) + 5;
		text(i, x, y);
	}

	for (let i = 1; i <= 60; i++){
		let angle = (360 / 60) * i - 90;
		let x = (r3 / 2 - 15) * cos(angle) - 1;
		let y = (r3 / 2 - 15) * sin(angle);
		text('.', x, y);
	}

	textSize(40);
	text(((h < 10 ? '0' : '') + h) + ':' + 
		 ((m < 10 ? '0' : '') + m) + ':' + 
		 ((s < 10 ? '0' : '') + s), -85, 280);
}
