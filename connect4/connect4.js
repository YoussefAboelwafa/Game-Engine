class Connect4 {
  constructor() {
    this.startBtn = document.getElementById("start-btn");
    this.board = [
      ["white", "white", "white", "white", "white", "white", "white"],
      ["white", "white", "white", "white", "white", "white", "white"],
      ["white", "white", "white", "white", "white", "white", "white"],
      ["white", "white", "white", "white", "white", "white", "white"],
      ["white", "white", "white", "white", "white", "white", "white"],
      ["white", "white", "white", "white", "white", "white", "white"],
    ];

    this.id = [
      ["0", "1", "2", "3", "4", "5", "6"],
      ["7", "8", "9", "10", "11", "12", "13"],
      ["14", "15", "16", "17", "18", "19", "20"],
      ["21", "22", "23", "24", "25", "26", "27"],
      ["28", "29", "30", "31", "32", "33", "34"],
      ["35", "36", "37", "38", "39", "40", "41"],
    ];
    this.player = 1;
    this.colors = [];
    this.colors[1] = "yellow";
    this.colors[-1] = "red";
    this.counter = 0;
    this.startBtn.addEventListener("click", this.initializeGame.bind(this));
  }
  drawer() {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        const myElement = document.getElementById(this.id[i][j]);
        myElement.style.backgroundColor = this.board[i][j];
      }
    }
  }
  controller(input) {
    console.log(input);
    if (input > 6 || input < 0) {
      alert("invalid input");
    } else {
      let found = false;
      for (let i = 5; i >= 0; i--) {
        if (this.board[i][input] == "white") {
          this.board[i][input] = this.colors[this.player];
          console.log(this.board[i][input]);
          found = true;
          break;
        }
      }
      if (!found) {
        alert("no more empty cells");
      } else {
        this.player *= -1;
        this.counter = 1;
      }
    }
    document.getElementById("input").value = "";
    this.drawer();
  }
  takeInput() {
    const input = document.getElementById("input").value;
    this.controller(input);
  }
  initializeGame() {
    const box1 = document.getElementById("box1");
    box1.style.display = "none";
    const box2 = document.getElementById("box2");
    box2.style.display = "block";
    this.drawer();
  }
}
let connect4 = new Connect4();
