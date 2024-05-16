let keywords = ["a", "hạ" ,"hào", "diệp", "con mẹ nó","con mèo", "cây phượng", "hoa hướng dương" ,"con chó đánh nhau với con mèo"];
let selectedWord = keywords[Math.floor(Math.random() * keywords.length)];
let remainingGuesses = 3;
let points = 0; 

document.getElementById("displayedWord").textContent = "*".repeat(selectedWord.length);

function guess() {
    let guess = document.getElementById("guessInput").value.trim().toLowerCase();
    if (guess === selectedWord) {
        document.getElementById("displayedWord").textContent = selectedWord;
        document.getElementById("displayedWord").style.color = "green";
        
        points++; 
        
        document.getElementById("guesspoint").textContent = points; // Cập nhật điểm số trên giao diện
        disableGuessButton();
        
        setTimeout(nextWord, 1000); 
    } else {
        remainingGuesses--;
        document.getElementById("remainingGuess").textContent = remainingGuesses;
        if (remainingGuesses === 0) {
            alert("Game kết thúc từ đúng là: " + selectedWord);
            disableGuessButton();
        }
    }
}

function nextWord() {
    selectedWord = keywords[Math.floor(Math.random() * keywords.length)];
    remainingGuesses = 3;
    document.getElementById("displayedWord").textContent = "*".repeat(selectedWord.length);
    document.getElementById("guessInput").value = "";
    document.getElementById("remainingGuess").textContent = remainingGuesses;
    enableGuessButton();
}

function resetGame() {
    selectedWord = keywords[Math.floor(Math.random() * keywords.length)];
    remainingGuesses = 3;
    document.getElementById("displayedWord").textContent = "*".repeat(selectedWord.length);
    document.getElementById("guessInput").value = "";
    document.getElementById("remainingGuess").textContent = remainingGuesses;
    points = 0; // Reset điểm số khi reset game
    document.getElementById("guesspoint").textContent = points; // Cập nhật điểm số trên giao diện
    enableGuessButton();
}

function disableGuessButton() {
    document.querySelector(".btn").disabled = true;
}

function enableGuessButton() {
    document.querySelector(".btn").disabled = false;
}