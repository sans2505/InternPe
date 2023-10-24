document.addEventListener("DOMContentLoaded", () => {
  const board = document.querySelector(".board");
  const resetButton = document.querySelector(".reset-button");
  const ROWS = 6;
  const COLS = 7;
  let currentPlayer = "player1"; // player1 or player2
  let gameBoard = Array.from({ length: ROWS }, () => Array(COLS).fill("empty"));

  // Function to create the game board
  function createBoard() {
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell", "empty");
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.addEventListener("click", handleCellClick);
        board.appendChild(cell);
      }
    }
  }

  // Function to handle cell click
  function handleCellClick(event) {
    const cell = event.target;
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    if (gameBoard[row][col] === "empty") {
      const nextRow = findNextRow(col);
      if (nextRow !== -1) {
        gameBoard[nextRow][col] = currentPlayer;
        cell.classList.add(currentPlayer);
        checkWin(nextRow, col);
        togglePlayer();
      }
    }
  }

  // Function to find the next available row in a column
  function findNextRow(col) {
    for (let row = ROWS - 1; row >= 0; row--) {
      if (gameBoard[row][col] === "empty") {
        return row;
      }
    }
    return -1; // Column is full
  }

  // Function to toggle the current player
  function togglePlayer() {
    currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
  }

  // Function to check for a win
  function checkWin(row, col) {
    // Implement your win-checking logic here
    // This is just a placeholder
  }

  // Function to reset the game
  function resetGame() {
    gameBoard = Array.from({ length: ROWS }, () => Array(COLS).fill("empty"));
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.classList.remove("player1", "player2");
    });
    currentPlayer = "player1";
  }

  // Event listener for the reset button
  resetButton.addEventListener("click", resetGame);

  // Initialize the game board
  createBoard();
});
