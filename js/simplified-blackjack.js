function blackjack() {
	alert(
		" Welcome to a simplified blackjack where you can't split or double down. You play with 8 decks. Enter q or Q to exit"
	);
	let dealerAces = [],
		quit,
		dealerCards = [],
		playerCards = [],
		parentExit = true,
		game,
		playerCard,
		sumPlayer = 0,
		aceValue,
		aceCheck = false,
		card,
		betAmount = 0,
		initialMoney = 10000,
		money = initialMoney,
		sumDealerCards;
	const newDecks = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9,
		10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6,
		7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1,
		2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7,
		8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2,
		3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10,
		10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8,
		9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3,
		4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9,
		10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4,
		5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 1,
		2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6,
		7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 1, 2, 3,
		4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10,
		10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8,
		9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 1, 2, 3, 4, 5,
		6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9,
		10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 1, 2, 3, 4, 5, 6,
		7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1,
		2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
	];
	let cardsDecks = newDecks;
	/* This function  selects a random card from the 8 decks in the array cardsDecks and deletes the one selected*/
	function randomCard() {
		let i = Math.floor(Math.random() * cardsDecks.length);
		card = cardsDecks[i];
		if (i != 0 && i != cardsDecks.length) {
			cardsDecks = cardsDecks
				.slice(0, i)
				.concat(cardsDecks.slice(i + 1, cardsDecks.length));
		} else if (i == 0) {
			cardsDecks = cardsDecks.slice(1, cardsDecks.length);
		} else {
			cardsDecks = cardsDecks.slice(0, cardsDecks.length - 1);
		}
		return card;
	}
	function sumDealer() {
		let cardsSum = 0;
		for (card of dealerCards) {
			cardsSum += card;
		}
		return cardsSum;
	}
	function checkDealerFirstAce() {
		if (dealerCards[0] == 1) {
			alert(`Dealer got an Ace. It's new value is an 11`);
			dealerCards[0] = 11;
			dealerAces.push(0);
		}
	}
	function dealerCard() {
		dealerCards.push(randomCard());
		sumDealerCards = sumDealer();
		if (
			(dealerCards[dealerCards.length - 1] == 1 &&
				sumDealerCards + 11 < 17) ||
			(dealerCards[dealerCards.length - 1] == 1 &&
				sumDealerCards + 11 >= sumPlayer &&
				sumDealerCards + 11 < 21)
		) {
			dealerCards[dealerCards.length - 1] = 11;
			sumDealerCards = sumDealer();
			dealerAces.push(dealerCards.length - 1);
			alert(`Dealer got an Ace`);
		}
		alert(
			`Your cards are ${playerCards}. Your total sum is ${sumPlayer}. Dealer's Cards are ${dealerCards}. Dealer's total sum is ${sumDealerCards}`
		);
		console.log(dealerAces);
		/* If the Dealer busts but has an Ace as an 11, then it changes it to a 1*/
		while (
			sumDealerCards > 17 &&
			(sumDealerCards < sumPlayer || sumDealerCards > 21) &&
			dealerAces.length > 0
		) {
			dealerCards[dealerAces[dealerAces.length - 1]] = 1;
			dealerAces.pop();
			sumDealerCards = sumDealer();
			alert(
				`The dealer changes an Ace from an 11 to a 1. Your cards are ${playerCards}. Your total sum is ${sumPlayer}. Dealer's Cards are ${dealerCards}. Dealer's total sum is ${sumDealerCards}`
			);
			console.log(dealerAces);
		}
		return dealerCards;
	}

	/* This function checks if the user entered a valid number for the Ace and checks until a valid number is written */
	function ace(value) {
		while (!(value == 1 || value == 11)) {
			value = parseInt(
				prompt(
					"Please choose a valid value for the Ace. Valid values are 1 or 11"
				)
			);
		}
		if (value == 11) {
			aceCheck = true;
		}
		return value;
	}
	function bet() {
		let exit1 = true;
		while (exit1 == true) {
			betAmount = parseFloat(
				prompt(`Please place a bet. You have $${money} to spend`)
			);
			if (betAmount <= money) {
				alert(`You bet $${betAmount}`);
				exit1 = false;
				return betAmount;
			} else if (isNaN(betAmount)) {
				alert(`Please select a valid number for a bet`);
			} else {
				alert(
					`Your bet of $${betAmount} is higher than your total amount of money $${money}. Please make another bet.`
				);
			}
		}
	}
	function trueExit() {
		let finalExit = prompt(
			`Press q to Quit or another key to continue playing`
		).toLowerCase();
		if (finalExit == `q`) {
			return (parentExit = false);
		}
	}
	class decks {
		constructor(cards) {
			this.cards = cards;
		}
		/*This method selects a random card from the deck and checks if it's and Ace. If true, then asks the player for the value*/
		giveCardCheckAce() {
			playerCard = randomCard();
			if (playerCard == 1) {
				aceValue = parseInt(
					prompt(
						"Please choose a value for the Ace. Valid values are 1 or 11"
					)
				);
				playerCard = ace(aceValue);
			}
			return playerCard;
		}
	}
	const deck1 = new decks();
	/* Start of Script*/
	/*First Card*/
	//PREGUNTA Es necesario un Doble While???
	//PREGUNTA La forma de tratar los break y las condicionesde salida de los while (booleanos) es correcta o muy rebuscada?
	while (money > 0 && parentExit == true) {
		dealerAces = [];
		dealerCards = [];
		aceCheck = false;
		cardsDecks = newDecks;
		console.log(cardsDecks);
		quit = true;
		bet();
		playerCard = deck1.giveCardCheckAce();
		//dealerCards.push(randomCard());
		dealerCards.push(randomCard());
		checkDealerFirstAce();
		//dealerCards.push(randomCard());
		dealerCards.push(randomCard());
		sumPlayer = playerCard;
		alert(
			`Your first card is ${sumPlayer}. Dealer's First card is ${dealerCards[0]}. Your bet is $${betAmount}`
		);
		/*Play until the user quits*/
		while (quit == true) {
			if (money == 0) {
				quit = false;
			} else {
				game = prompt(
					`Your Card is ${playerCard}. You Have ${sumPlayer}. Dealer's First Card is ${dealerCards[0]}. Your bet is $${betAmount}. Please enter any key to give you a card or 'Hit'. Press s or S to 'stand'. Press q or Q to quit`
				).toLowerCase();
				//This switch cheks if the player quits, stands or asks for a card
				switch (game) {
					case "q":
						quit = false;
						parentExit = false;
						money -= betAmount;
						break;
					/*When the user "stands"*/
					case "s":
						if (dealerCards[1] == 1 && dealerAces.length < 1) {
							alert(`Dealer got an Ace. It's new value is an 11`);
							dealerCards[1] = 11;
							dealerAces.push(1);
							sumDealerCards = sumDealer();
							console.log(dealerAces);
							console.log(dealerCards);
							console.log(dealerAces.length - 1);
							alert(
								`You Stand. Your cards are $${playerCard} You Have ${sumPlayer}. Dealer's Cards are ${dealerCards}. Dealer's sum is ${sumDealerCards}. Your bet is $${betAmount}.`
							);
						} else {
							sumDealerCards = sumDealer();
							alert(
								`You Stand. Your cards are $${playerCard} You Have ${sumPlayer}. Dealer's Cards are ${dealerCards}. Dealer's sum is ${sumDealerCards}. Your bet is $${betAmount}.`
							);
						}

						// If the dealer busts (gets more than 21) or the player sum of the cards is lower than 21 but it's higher than the Dealer's, then the player wins
						//PREGUNTA Es necesario colocar tantos you win, you lose? Existe alguna forma mas elegante o correcta de hacerlo?

						/*IA where the dealer MUST draw cards until a value of 17 and then stands*/
						while (
							sumDealerCards < 17 &&
							sumDealerCards < sumPlayer
						) {
							console.log(`The While starts`);
							dealerCard();
						}
						if (sumDealerCards > 21 || sumPlayer > sumDealerCards) {
							money += betAmount;
							alert(
								`CONGRATULATIONS!!!!! YOU WIN!!!!!. You got ${sumPlayer} and the Dealer got ${sumDealerCards}. You WIN $${betAmount}. Now your total amount of money is $${money}`
							);
							quit = false;
							trueExit();
						}
						// else, the player looses
						else {
							money -= betAmount;
							alert(
								`YOU LOSE THIS TIME :(. You got ${sumPlayer} and the Dealer got ${sumDealerCards}. You LOSE $${betAmount}. Now your total amount of money is $${money}`
							);
							quit = false;
							trueExit();
						}
						/*Check if the Dealer has an Ace, and if it does, and the sum of cards is lower than 21, being the Ace an 11, then the dealer uses the Ace as an 11*/

						break;
					//When the player asks for a card
					default:
						//The program asks for a card and then checks if the player has an Ace, and asks for a valid value of 1 or 11
						playerCard = deck1.giveCardCheckAce();
						sumPlayer = sumPlayer + playerCard;
						console.log(cardsDecks);
						alert(
							`Your Card is ${playerCard}. You Have ${sumPlayer}. Dealer's First Card is ${dealerCards[0]}`
						);
						// If the player's sum of cards is higher than 21 and he/she doesn't have an Ace value of 11, then he/she looses
						if (sumPlayer > 21 && aceCheck == false) {
							money -= betAmount;
							alert(
								`YOU LOSE THIS TIME :(. You got ${sumPlayer} and the Dealer got ${sumDealerCards}. You LOSE $${betAmount}. Now your total amount of money is $${money}`
							);
							quit = false;
							trueExit();
						}
						//If the player's sum of cards is higher than 21 and he/she has an Ace with a value of 11, the program changes the Ace for a 1 by substracting 10 to the player's sum of cards
						else if (sumPlayer > 21 && aceCheck == true) {
							let prevSum;
							prevSum = sumPlayer;
							sumPlayer = sumPlayer - 10;
							alert(
								"You 'Bust' with " +
									prevSum +
									" so you change your Ace from an 11 to a 1. Your new number is " +
									sumPlayer
							);
							aceCheck = false;
							//If the player's sum of cards is higher than 21, then he/she looses
							if (sumPlayer > 21) {
								money -= betAmount;
								alert(
									`YOU LOSE THIS TIME :(. You got ${sumPlayer} and the Dealer got ${sumDealerCards}. You LOSE $${betAmount}. Now your total amount of money is $${money}`
								);
								quit = false;
								trueExit();
							} else {
								continue;
							}
						}
						break;
				}
			}
		}
	}
	alert(
		`Your final money is $${money}. You started with $${initialMoney}. Thanks for playing :D. Have a nice day`
	);
	if (isNaN(parseFloat(localStorage.getItem(`score`))) === true) {
		localStorage.setItem(`score`, money);
		alert(`You have a new Highscore of $${money}`);
	} else if (parseFloat(localStorage.getItem(`score`)) < money) {
		localStorage.setItem(`score`, money);
		alert(`You have a new Highscore of $${money}`);
	}
}
blackjack();
