function rollDice() {
    const dices = document.getElementById('dices').value;
    const diceresult = document.getElementById('diceresult');
    const diceimg = document.getElementById('diceimg');

  
    const values = [];
    const img = [];

    for (let i = 0; i < dices; i++) 
    {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        img.push(`<img src="img/${value}.png" class="dice">`);
    }

    diceresult.textContent = `Dice : ${values.join(', ')}`;
    diceimg.innerHTML = img.join(' ');
}
