var LivingCreature = require("./LivingCreature")
module.exports = class Zombi extends LivingCreature {
	chooseCell(ch) {
		this.getNewCoordinates();
		return super.chooseCell(ch);
	}

	eat() {
		var grassCells = this.chooseCell(5);
		var newCell = grassCells[Math.floor(Math.random() * grassCells.length)];

		if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = 0
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY;
		}
		else {
			this.eat1();
		}
	}

	eat1() {
		var grassCells = this.chooseCell(2);
		var newCell = grassCells[Math.floor(Math.random() * grassCells.length)];

		if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY;
		}
		else {
			this.eat2();
		}
	}

	eat2() {
		var grassCells = this.chooseCell(3);
		var newCell = grassCells[Math.floor(Math.random() * grassCells.length)];

		if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY;
		}
		else {
			this.eat3();
		}
	}

	eat3() {
		var grassCells = this.chooseCell(1);
		var newCell = grassCells[Math.floor(Math.random() * grassCells.length)];

		if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY;
		}
		else {
			this.move();
		}
	}

	move() {
		var emptyCells = this.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY;
		}
	}
}