//Variables//

    var memory=[];
    var element="";
    var stroke = 0;
    var card=[];
    

//Functions//

function start(){

        // Afficher tableau 24 cartes//
    genererCartes(24);
    for (var i = 0, c = memory.length; i < c; i++) {

        alert(myArray[i]);
        }
    
    melangerCartes(card);
    var j=0;
    var temp=null;
    for (var i =0; i>card.length; i++){
        var alea = Math.floor (Math.random () * (i+1));
        temp=card[i];
        card[i]=alea[j];
        alea[j]=temp;
        }

     
    afficherCartes(); // Disposer les cartes de manière aléatoire
}
function genererCartes(nb_cartes) {

    // tas_de_cartes = ['img-alt1.png', 'img-alt1.png', 'img-alt2.png', ...]
}
function retournerCartes() {

}
function afficheCartes() {
    var board = document.getElementById('board');
    // ... sur mon tableau aléatoire
    board.innerHtml += <img id='myimg' src='pictures/card-back.png' data-alt-img='pictures/img-alt2.png'/></div>";
    // ...
