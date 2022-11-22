class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards =[]; //property
    this.pairsClicked=0; //property
    this.pairsGuessed=0; //property
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) return undefined;
    let shuffledArray = this.cards.sort(function () {
      return Math.random() - 0.5;
    });
    return shuffledArray;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1===card2){
      this.pairsGuessed++;
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed===this.cards.length/2){
      console.log('GG WON')
      return true
    } else {
      return false
    }
  }
}
