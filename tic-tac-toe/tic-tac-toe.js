class TicTacToe {
  constructor() {
    this.cells = document.querySelectorAll(".cell");
    this.statusText = document.getElementById("status-text");
    this.restartBtn = document.getElementById("restart-btn");
    this.startBtn = document.getElementById("start-btn");
    this.winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    this.winCombo = [0, 0, 0];
    this.input;
    this.cell;
    this.index;
    this.event;
    this.running = false;
    this.isRestarted = false;
    this.startBtn.addEventListener("click", this.initializeGame.bind(this));
  }

  drawer() {
    //print new player turn
    if (this.running) {
      this.statusText.textContent = `${this.currentPlayer}'s Turn`;
    }
    //Reset the board if the game is restarted
    if (this.isRestarted) {
      this.gameState = ["", "", "", "", "", "", "", "", ""];
      this.currentPlayer = "X";
      this.statusText.textContent = `${this.currentPlayer}'s Turn`;
      this.cells.forEach((cell) => (cell.textContent = ""));
      this.running = true;
      document.getElementById(this.winCombo[0]).style.color = "#000";
      document.getElementById(this.winCombo[1]).style.color = "#000";
      document.getElementById(this.winCombo[2]).style.color = "#000";
      this.isRestarted = false;
    }
  }
  controller(input) {
    //update cell
    this.cell = input[0];
    this.index = input[1];
    this.gameState[this.index] = this.currentPlayer;
    this.cell.textContent = this.currentPlayer;

    //check win
    let roundWon = false;
    for (let i = 0; i < this.winConditions.length; i++) {
      const condition = this.winConditions[i];
      const cellA = this.gameState[condition[0]];
      const cellB = this.gameState[condition[1]];
      const cellC = this.gameState[condition[2]];

      if (cellA == "" || cellB == "" || cellC == "") {
        continue;
      }
      if (cellA == cellB && cellB == cellC) {
        roundWon = true;
        this.winCombo[0] = condition[0];
        this.winCombo[1] = condition[1];
        this.winCombo[2] = condition[2];
        break;
      }
    }
    //win case
    if (roundWon) {
      this.statusText.textContent = `${this.currentPlayer} Wins !`;
      document.getElementById(this.winCombo[0]).style.color = "#f00";
      document.getElementById(this.winCombo[1]).style.color = "#f00";
      document.getElementById(this.winCombo[2]).style.color = "#f00";
      this.running = false;
    }
    //draw case
    else if (!this.gameState.includes("")) {
      this.running = false;
      this.statusText.textContent = `Draw !`;
    } else {
      //change player
      this.currentPlayer = this.currentPlayer == "X" ? "O" : "X";
      this.drawer();
    }
  }

  initializeGame() {
    this.cells.forEach((cell) =>
      cell.addEventListener("click", this.cellClick.bind(this))
    );
    this.running = true;
    this.gameState = ["", "", "", "", "", "", "", "", ""];
    this.currentPlayer = "X";
    this.restartBtn.addEventListener("click", () => {
      this.isRestarted = true;
      this.drawer();
    });
    let parentElement = this.startBtn.parentNode;
    parentElement.removeChild(this.startBtn);
  }

  cellClick(event) {
    const cellIndex = event.target.getAttribute("cellIndex");
    if (this.gameState[cellIndex] != "" || !this.running) {
      return;
    }
    this.input = [event.target, cellIndex];
    this.controller(this.input);
  }
}

let tictactoe = new TicTacToe();
