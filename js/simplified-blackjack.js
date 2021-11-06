alert(" Welcome to a simplified blackjack where you can't split or bet. You play with 8 decks. Enter q or Q to exit");
var quit = true, game, playerCard, dealerCard , sumPlayer, sumDealer=0, aceValue, aceCheck=false, card; dealerAceCheck=false;
var cardsDecks=[1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10];
/* This function  selects a random card from the 8 decks in the array cardsDecks and deletes the one selected*/
function randomCard() {
    let i = Math.floor(Math.random() * cardsDecks.length);
    card=cardsDecks[i];
    if (i != 0 && i != cardsDecks.length){ 
        cardsDecks=cardsDecks.slice(0,i).concat(cardsDecks.slice(i+1,cardsDecks.length));
    } else if (i == 0) {
        cardsDecks=cardsDecks.slice(1,cardsDecks.length);
    } else {
        cardsDecks=cardsDecks.slice(0,cardsDecks.length-1);
    }
    return card;
}
/* This function checks if the user entered a valid number for the Ace and checks until a valid number is written */
function ace(value) {
    while (!(value==1 || value==11)) {
        value=parseInt(prompt("Please choose a valid value for the Ace. Valid values are 1 or 11"));
    }
    if (value==11) {
        aceCheck=true;
    }
    return value;
}
class decks {
    constructor(cards){
        this.cards=cards;
    }
    /*This method selects a random card from the deck and checks if it's and Ace. If true, then asks the player for the value*/
    giveCardCheckAce(){
        playerCard = randomCard(1,9,3);
        if (playerCard == 1) {
        aceValue = parseInt(prompt("Please choose a value for the Ace. Valid values are 1 or 11"));
        playerCard = ace(aceValue);
        }
        return playerCard;
    }
}
const deck1 = new decks();
/* Start of Script*/
/*First Card*/
playerCard = deck1.giveCardCheckAce();
sumPlayer = playerCard;
alert("Your first card is " + sumPlayer);
/*Play until the user quits*/
while (quit == true) {
    game = prompt("Please Enter any key to give you a card or 'Hit'. Press s or S to 'stand' and Press q or Q to quit").toLowerCase();
    //This switch cheks if the player quits, stands or asks for a card
    switch (game) {
    case "q":
        quit=false;
        break;
    /*When the user "stands"*/
    case "s":
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
        // If the dealer busts (gets more than 21) or the player sum of the cards is lower than 21 but it's higher than the Dealer's, then the player wins
        if (sumDealer > 21 || sumPlayer > sumDealer) {
            alert("CONGRATULATIONS!!!!! YOU WIN!!!!!. You got " + sumPlayer + " and the Dealer got " + sumDealer);
            quit = false;
        } 
        // else, the player looses
        else {
            alert("You got a total of " + sumPlayer + " and the Dealer got " + sumDealer + ". YOU LOSE :(. Thanks for playing. Please press F5 and try again ");
            quit=false;
        }
        break;
    //When the player asks for a card
    default:
        //The program asks for a card and then checks if the player has an Ace, and asks for a valid value of 1 or 11
        playerCard = deck1.giveCardCheckAce();
        sumPlayer = sumPlayer + playerCard;
        alert("Your CARD is " + playerCard + ". You have " + sumPlayer);
        // If the player's sum of cards is higher than 21 and he/she doesn't have an Ace value of 11, then he/she looses
        if (sumPlayer>21 && aceCheck == false){
            alert( "You Got a Total of " + sumPlayer + ". YOU LOSE :(. Thanks for playing. Please press F5 and try again");
            quit = false;
        }
        //If the player's sum of cards is higher than 21 and he/she has an Ace with a value of 11, the program changes the Ace for a 1 by substracting 10 to the player's sum of cards
        else if(sumPlayer>21 && aceCheck == true){
            let prevSum;
            prevSum=sumPlayer;
            sumPlayer = sumPlayer - 10;
            alert("You 'Bust' with " +  prevSum + " so you change your Ace from an 11 to a 1. Your new number is " + sumPlayer);
            aceCheck=false;
            //If the player's sum of cards is higher than 21, the he/she looses
            if (sumPlayer>21) {
                alert( "You Got a Total of " + sumPlayer + ". YOU LOSE :(. Thanks for playing. Please press F5 and try again");
                quit=false;
            }
            else{
                continue
            }
        }
        break;
    }
}
alert("Thanks for playing :D. Have a nice day");

