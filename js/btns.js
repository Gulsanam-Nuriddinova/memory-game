function goBack() {
    window.history.back();
}

function restartGame() {
    clearInterval(timer);
    resetGame();
}