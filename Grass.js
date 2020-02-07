var LivingCreature = require("./LivingCreature")

module.exports = class Grass extends LivingCreature {

	mul() {
		this.multiply++;
		var emptyCells = this.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]




		if (newCell && this.multiply >= 8) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = new Grass(newX, newY, 1);

			this.multiply = 0;
		}
	}

}