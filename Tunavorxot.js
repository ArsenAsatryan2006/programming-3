var LivingCreature = require("./LivingCreature")
module.exports = class Tunavorxot extends LivingCreature {
	mul() {
		this.multiply++;
		var emptyCells = this.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
		if (newCell && this.multiply >= 5) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = new Tunavorxot(newX, newY, 5);

			this.multiply = 0;
		}
	}
}