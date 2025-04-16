function goBack() {
    window.history.back();
}

function restartGame() {
    clearInterval(timer);
    resetGame();
}

document.getElementById("closeAdButton").addEventListener("click", () => {
    const adBox = document.getElementById("adBox");
    adBox.style.display = "none"; 
});