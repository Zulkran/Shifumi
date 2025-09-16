
const tab = document.querySelectorAll(".possibilities"); 
const winDisplay = document.getElementById('win');
const drawDisplay = document.getElementById('draw');
const loseDisplay = document.getElementById('lose');
const resultDisplay = document.getElementById('resultDisplay');
const resetButton = document.getElementById('reinisialise');


let tableScores = {
    win : 0,
    draw : 0,
    lose : 0
};

tab.forEach(bouton => 
    bouton.addEventListener("click", () => {
        let choice = bouton.textContent;

        let botChoi = tab[Math.floor(Math.random()*3)].textContent;

        let result;
        if(choice === botChoi){
            result = "égalité";
            tableScores.draw++;
        }
        else if(
            (choice == 'Pierre' && botChoi == 'Ciseaux')
            ||(choice == 'Feuille' && botChoi == 'Pierre')
            ||(choice == 'Ciseaux' && botChoi == 'Feuille')
        ) {
            result = "victoire";
           tableScores.win++;
        }
        else{
            result = "défaite";
            tableScores.lose++;
        }

        updateScore();
        showResultTurn(choice, botChoi, result);

    })
);

function updateScore(){
    winDisplay.textContent = tableScores.win > 1 ? tableScores.win + " victoires" : tableScores.win + " victoire";
    drawDisplay.textContent = tableScores.draw > 1 ? tableScores.draw + " égalités" : tableScores.draw + " égalité";
    loseDisplay.textContent = tableScores.lose > 1 ? tableScores.lose + " défaites" : tableScores.lose + " défaite";
}

function showResultTurn(choice, botChoi, result) {
    let pSelector = resultDisplay.querySelectorAll('p');
    if(pSelector.length == 0) {
        let p1 = document.createElement('p');
        p1.textContent = "J'ai joué : " + choice;
        resultDisplay.append(p1);
        let p2 = document.createElement('p');
        p2.textContent = "Le robot a joué : " + botChoi;
        resultDisplay.append(p2);
        let p3 = document.createElement('p');
        p3.textContent = "C'est une " + result;
        resultDisplay.append(p3);
    }
    else if (pSelector.length == 3) {
        pSelector[0].textContent = "J'ai joué : " + choice;
        pSelector[1].textContent = "Le robot a joué : " + botChoi;
        pSelector[2].textContent = "C'est une " + result;
    }
}

resetButton.addEventListener('click', () => {
    location.reload();
})