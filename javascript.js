//  Variables//


var deck = [];
var element="";
var stroke = 0;
var card=[];
    


//Functions//

function start(){
    genererCartes(24); // Afficher tableau 24 cartes
    melangerCartes(deck); // shuffle
    afficherCartes(); // Disposer les cartes de manière aléatoire
}
function genererCartes(nb_cartes) {
    deck=['img-alt1.png','img-alt1.png','img-alt2.png','img-alt2.png','img-alt3.png','img-alt3.png','img-alt4.png','img-alt4.png',
    'img-alt5.png','img-alt5.png','img-alt6.png','img-alt6.png','img-alt7.png','img-alt7.png','img-alt8.png','img-alt8.png',
    'img-alt9.png','img-alt9.png','img-alt10.png','img-alt10.png','img-alt11.png','img-alt11.png','img-alt12.png','img-alt12.png',]
   // deck = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12];//
}
function melangerCarte(card){
    var j=0;
    var temp=null;
    for (var i =0; i>card.length; i++){
        var alea = Math.floor (Math.random () * (i+1));
        temp=card[i];
        card[i]=alea[j];
        alea[j]=temp;
        }
    
}
function retournerCartes() {

}
function afficheCartes() {
    var board = document.getElementById('board');
    // ... sur mon tableau aléatoire
    board.innerHtml += <img id='myimg' src='pictures/card-back.png' data-alt-img='pictures/img-alt2.png'/>;
    // ...

    
    
}