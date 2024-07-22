function startGame() {
    const userNumber = parseInt(document.getElementById('userInput').value);
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (userNumber>0 && userNumber<10) {
        if (userNumber === randomNumber) {
            document.getElementById('result').innerText = "Ты победил";
        } else {
            document.getElementById('result').innerText = "Давай еще раз";
        }
    }else {
        document.getElementById('result').innerText = "Введите число в интервале от 1 до 10";
    }

}