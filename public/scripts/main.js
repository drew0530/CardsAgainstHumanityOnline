var data = require(["./../data/cards.json"]);

var player = {
    playerName: "",
    cardAmount:0,
    cards: [],
}

function drawWhiteCard(num) {
    for (var i=0; i < num; i++){
        var index = Math.floor(Math.random() * Math.floor(460)); // 460 white cards in the Base deck
        player.cards.push(data.whiteCards[index]);
        console.log(player.cards);
    }
}

// function drawBlackCard() {
    
// }

// function toggleExpandCards() {
//     $('.card-container').toggleClass("expanded");
// }