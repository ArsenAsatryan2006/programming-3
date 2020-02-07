var LivingCreature = require("./LivingCreature")
module.exports = class Gishatich extends LivingCreature{
	chooseCell(ch) {
		this.getNewCoordinates();
		return super.chooseCell(ch);
	 }
	 
	move() {
		var emptyCells = this.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY;
		}

		this.energy--;
		if (this.energy <= 0) {
			this.die();
		}
	}

	eat() {
		var grassCells = this.chooseCell(2);
		var newCell = grassCells[Math.floor(Math.random() * grassCells.length)];
		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];
			if (matrix[newY][newX].index == 2) {

				var newX = newCell[0];
				var newY = newCell[1];

				matrix[newY][newX] = matrix[this.y][this.x];
				matrix[this.y][this.x] = 0;

				this.x = newX;
				this.y = newY;
				this.energy++;
                   
				if (this.energy >= 10) {
					this.mul();
				}
			}
			else if (matrix[newY][newX].index == 5) {
				var newX = newCell[0];
				var newY = newCell[1];

				matrix[newY][newX] = 0;
				matrix[this.y][this.x] = 0;
			}
		}
		else {
			this.move();
		}
	}
	mul() {
		var emptyCells = this.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = new Gishatich(newX, newY, 2);
			this.energy = 8;
		}
	}

	die() {
		matrix[this.y][this.x] = 0;
	}
}