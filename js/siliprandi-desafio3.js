alert(" Welcome to a simplified blackjack where you can't split or bet and there are infinite cards. Enter q or Q to exit");
var quit = true, game, playerCard, dealerCard , sumPlayer, sumDealer=0, aceValue, aceCheck=false, dealerAceCheck=false;

/* This function  selects a random card from a deck and adds the probability of getting a "face" or J,Q or K */
function randomCard(min,max,face) {
    var card;
    card = Math.floor(Math.random() * (max + face - min + 1) + min);
    if (card>=10) {
        card=10;
    }
    return card;
}
/* This function checks if the user entered a valid number for the Ace and checks until a valid number is written */
function ace(value) {
    while (!(value==1 || value==11)) {
        value=parseInt(prompt("Please choose a valid value for the Ace. Valid Values are 1 or 11"));
    }
    if (value==11) {
        aceCheck=true;
    }
    return value;
}
/* Start of Script*/
/*First Card*/
playerCard = randomCard(1,9,3);
if (playerCard == 1) {
    aceValue = parseInt(prompt("Please choose a value for the Ace"));
    playerCard = ace(aceValue);
}
sumPlayer = playerCard;
alert("Your first card is " + sumPlayer);
/*Play until the user quits*/
while (quit == true) {
    game = prompt("Please Enter any key to give you a card or 'Hit'. Press s or S to 'stand' and Press q or Q to quit")
    if (game == "q" || game == "Q"){
        quit=false;
    }
    /*When the user "stands"*/
    else if (game == "s" || game == "S") {
        alert("You stand. You have " + sumPlayer);
        /*IA where the dealer MUST draw cards until a value of 17 and then stands*/
        while (sumDealer<17 && sumDealer < sumPlayer) {
            dealerCard = randomCard(1,9,3);
            /*Check if the Dealer has an Ace, and if it does, and the sum of cards is lower than 21, being the Ace an 11, then the dealer uses the Ace as an 11*/  
            if ((dealerCard==1 && ((sumDealer + 11) <17)) || (dealerCard==1 && ((sumDealer + 11) >= sumPlayer) && ((sumDealer + 11) < 21))) {
                dealerCard=11;
                dealerAceCheck=true;
            }
            sumDealer = sumDealer + dealerCard;
            alert("You have " + sumPlayer + ". Dealer's CARD is " + dealerCard + ". Dealer has " + sumDealer);
            /* If the Dealer busts but has an Ace as an 11, then it changes it to a 1*/
            if ((sumDealer > 17) && (sumDealer < sumPlayer) && dealerAceCheck==true ) {
                sumDealer = sumDealer - 10;
                alert("The Dealer Changes an Ace from an 11 to a 1. You have " + sumPlayer + ". Dealer has " + sumDealer);
                dealerAceCheck=false;
            }
        }
        if ((sumDealer > 21 || sumPlayer > sumDealer)) {
            alert("CONGRATULATIONS!!!!! YOU WIN!!!!!. You got " + sumPlayer + " and the Dealer got " + sumDealer);
            quit = false;
        } 
        else {
            alert("You got a total of " + sumPlayer + " and the Dealer got " + sumDealer + ". YOU LOSE :(. Thanks for playing. Please press F5 and try again ");
            quit=false;
        }
    }
    else{
        playerCard = randomCard(1,9,3);
        if (playerCard == 1) {
            aceValue = parseInt(prompt("Please choose a value for the Ace"));
            playerCard = ace(aceValue);
        }
        sumPlayer = sumPlayer + playerCard;
        alert("Your CARD is " + playerCard + ". You have " + sumPlayer);
        if (sumPlayer>21 && aceCheck == false){
            alert( "You Got a Total of " + sumPlayer + ". YOU LOSE :(. Thanks for playing. Please press F5 and try again");
            quit = false;
        }
        else if(sumPlayer>21 && aceCheck == true){
            let prevSum;
            prevSum=sumPlayer;
            sumPlayer = sumPlayer - 10;
            alert("You 'Bust' with " +  prevSum + " so you change your Ace from an 11 to a 1. Your new number is " + sumPlayer);
            aceCheck=false;
            if (sumPlayer>21) {
                alert( "You Got a Total of " + sumPlayer + ". YOU LOSE :(. Thanks for playing. Please press F5 and try again");
                quit=false;
            }
            else{
                continue
            }
        }
        
    }
}


