let activePlayer = 'X';
let selectedSquares = [];

function placeXOrO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.jpg")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        audio('./media/place2.flac');
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }
    function computersTurn() {
        let seccess = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawinLine(100, 50, 100, 508) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '10', '20')) { drawinLine(50, 100, 558, 100) }
    else if (arrayIncludes('30', '40', '50')) { drawinLine(50, 304, 558, 304) }
    else if (arrayIncludes('60', '70', '80')) { drawinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '30', '60')) { drawinLine(100, 50, 100, 558) }
    else if (arrayIncludes('10', '40', '70')) { drawinLine(304, 50, 304, 558) }
    else if (arrayIncludes('20', '50', '80')) { drawinLine(508, 50, 508, 558) }
    else if (arrayIncludes('60', '40', '20')) { drawinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '40', '80')) { drawinLine(100, 100, 520, 520) }
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 500);
    }
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true; }
    }
}

function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

function drawinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1, 
        y = y1;
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}