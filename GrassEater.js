var LivingCreature = require("./LivingCreature")
module.exports = class GrassEater extends LivingCreature {
	chooseCell(ch) {
		this.getNewCoordinates();
		return super.chooseCell(ch);
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

			this.energy--;
		}

		if (this.energy <= 0) {
			this.die();
		}
	}

	eat() {
		var grassCells = this.chooseCell(1);
		var allgrassCells = this.chooseCell(5);
		var miasin = grassCells.concat(allgrassCells);



		var newCell = miasin[Math.floor(Math.random() * miasin.length)];
		if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

			if (matrix[newY][newX].index == 1) {
				var newX = newCell[0];
				var newY = newCell[1];

				matrix[newY][newX] = matrix[this.y][this.x];
				matrix[this.y][this.x] = 0;

				this.x = newX;
				this.y = newY;
				this.energy++;
				if (this.energy >= 12) {
					this.mul();
				}

			}
			else if (matrix[newY][newX].index == 5) {
				// var newX = newCell[0];
				// var newY = newCell[1];

				matrix[newY][newX] = 0;
				matrix[this.y][this.x] = 0;

				this.x = newX;
				this.y = newY;



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

			matrix[newY][newX] = new GrassEater(newX, newY, 2);
			this.energy = 6;                                       //____________________
		}
	}

	die() {
		matrix[this.y][this.x] = 0;
	}

	chooseCell(num) {
		this.getNewCoordinates();
		return super.chooseCell(num);
	}
}