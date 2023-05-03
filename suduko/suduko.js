class Suduko {
  constructor() {
    this.startBtn = document.getElementById("start-btn");
    this.cells = document.querySelectorAll(".cell");
    this.solution = [
      ["3", "8", "7", "4", "9", "1", "6", "2", "5"],
      ["2", "4", "1", "5", "6", "8", "3", "7", "9"],
      ["5", "6", "9", "3", "2", "7", "4", "1", "8"],
      ["7", "5", "8", "6", "1", "9", "2", "3", "4"],
      ["1", "2", "3", "7", "8", "4", "5", "9", "6"],
      ["4", "9", "6", "2", "5", "3", "1", "8", "7"],
      ["9", "3", "4", "1", "7", "6", "8", "5", "2"],
      ["6", "7", "5", "8", "3", "2", "9", "4", "1"],
      ["8", "1", "2", "9", "4", "5", "7", "6", "3"],
    ];
    this.board = [
      ["-", "-", "7", "4", "9", "1", "6", "-", "5"],
      ["2", "-", "-", "-", "6", "-", "3", "-", "9"],
      ["-", "-", "-", "-", "-", "7", "-", "1", "-"],
      ["-", "5", "8", "6", "-", "-", "-", "-", "4"],
      ["-", "-", "3", "-", "-", "-", "-", "9", "-"],
      ["-", "-", "6", "2", "-", "-", "1", "8", "7"],
      ["9", "-", "4", "-", "7", "-", "-", "-", "2"],
      ["6", "7", "-", "8", "3", "-", "-", "-", "-"],
      ["8", "1", "-", "-", "4", "5", "-", "-", "-"],
    ];
    this.initialBoard = [
      ["-", "-", "7", "4", "9", "1", "6", "-", "5"],
      ["2", "-", "-", "-", "6", "-", "3", "-", "9"],
      ["-", "-", "-", "-", "-", "7", "-", "1", "-"],
      ["-", "5", "8", "6", "-", "-", "-", "-", "4"],
      ["-", "-", "3", "-", "-", "-", "-", "9", "-"],
      ["-", "-", "6", "2", "-", "-", "1", "8", "7"],
      ["9", "-", "4", "-", "7", "-", "-", "-", "2"],
      ["6", "7", "-", "8", "3", "-", "-", "-", "-"],
      ["8", "1", "-", "-", "4", "5", "-", "-", "-"],
    ];
    this.id = [
      ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
      ["9", "10", "11", "12", "13", "14", "15", "16", "17"],
      ["18", "19", "20", "21", "22", "23", "24", "25", "26"],
      ["27", "28", "29", "30", "31", "32", "33", "34", "35"],
      ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
      ["45", "46", "47", "48", "49", "50", "51", "52", "53"],
      ["54", "55", "56", "57", "58", "59", "60", "61", "62"],
      ["63", "64", "65", "66", "67", "68", "69", "70", "71"],
      ["72", "73", "74", "75", "76", "77", "78", "79", "80"],
    ];

    this.startBtn.addEventListener("click", this.initializeGame.bind(this));
  }
  drawer() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const elem = document.getElementById(this.id[i][j]);
        if (this.board[i][j] != "-") {
          elem.textContent = this.board[i][j];
        } else {
          elem.style.backgroundColor = "yellow";
        }
      }
    }
  }
  controller(inputArray) {
    let cellID = inputArray[0];
    let value = inputArray[1];
    var row;
    var col;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (cellID == this.id[i][j]) {
          row = i;
          col = j;
          break;
        }
      }
    }
    //update board with new value
    if(value == 0){
      this.board[row][col] = "-";
    }
    else {
    this.board[row][col] = value;
    }
    let cell = document.getElementById(cellID);

    //check if the value is corret
    if (
      this.board[row][col] != this.solution[row][col] &&
      this.initialBoard[row][col] == "-"
    ) {
      cell.style.backgroundColor = "red";
    } else if (
      this.board[row][col] == this.solution[row][col] &&
      this.initialBoard[row][col] == "-"
    ) {
      cell.style.backgroundColor = "yellow";
    }
    this.drawer();
  }
  checkInput(input) {
    if (input >= 0 && input < 10) {
      return true;
    } else return false;
  }
  initializeGame() {
    this.cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        const input = prompt("Enter a number (1-9) or (0) to clear cell:");
        let inputArray;
        var isValid = this.checkInput(input);
        if (!isValid) {
          alert("INVALID INPUT, Enter a number (1-9) or (0) to clear cell");
          input = prompt("Enter a number (1-9) or (0) to clear cell:");
        } else {
          var row;
          var col;
          for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
              if (cell.id == this.id[i][j]) {
                row = i;
                col = j;
                break;
              }
            }
          }
          if (this.initialBoard[row][col] == "-") {
            if (input == 0) {
              cell.textContent = "";
              cell.style.backgroundColor = "yellow";
              inputArray = [cell.id, input];
              this.controller(inputArray);
            } else if (input == null) {

            } else {
              cell.textContent = input;
              inputArray = [cell.id, input];
              this.controller(inputArray);
            }
          }
        }
      });
    });
    let parentElement = this.startBtn.parentNode;
    parentElement.removeChild(this.startBtn);
    this.drawer();
  }
  resetGame() {
    this.board = [
      ["-", "-", "7", "4", "9", "1", "6", "-", "5"],
      ["2", "-", "-", "-", "6", "-", "3", "-", "9"],
      ["-", "-", "-", "-", "-", "7", "-", "1", "-"],
      ["-", "5", "8", "6", "-", "-", "-", "-", "4"],
      ["-", "-", "3", "-", "-", "-", "-", "9", "-"],
      ["-", "-", "6", "2", "-", "-", "1", "8", "7"],
      ["9", "-", "4", "-", "7", "-", "-", "-", "2"],
      ["6", "7", "-", "8", "3", "-", "-", "-", "-"],
      ["8", "1", "-", "-", "4", "5", "-", "-", "-"],
    ];
  }
}
let suduko = new Suduko();
