//  Variables//


var deck = [];
var element="";
var stroke = 0;
var card=[];
    


//Functions//


document.addEventListener('click', function(e){
     
});
start();

function start(){
    genererCartes(24); // Afficher tableau 24 cartes
    melangerCartes(deck); // shuffle
    afficherCartes();
    console.log(deck)//afficherCartes(); Disposer les cartes de manière aléatoire//
}
function genererCartes(nb_cartes) {
    for (let index = 1; index <= 12; index++) {
        deck.push('img-alt'+index+'.png');
        deck.push('img-alt'+index+'.png');
    }
    
}
function melangerCartes(card){
    var temp=null;
    for (var i =0; i<card.length; i++){
        var alea = Math.floor (Math.random () * (i+1));
        temp=card[i];
        card[i]=card[alea];
        card[alea]=temp;
    }
}
function retournerCartes() {

}
function afficherCartes() {
    var board = document.getElementById('board');
    // ... sur mon tableau aléatoire
    var card = document.getElementById('deck').getAttribute(data-alt-img);

   board.innerHtml += "<img id='img' src='pictures/card-back.png' data-alt-img='pictures/img-alt2.png'/>";
    
}