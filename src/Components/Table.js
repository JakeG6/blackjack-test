import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props) 
        
            this.state = {    
                cardsInDeck: 52,
                cardsRemoved: [],
                players: [],
                dealer: {
                    hand: [],
                    score: 0
                },
                settingUpGame: true
            }

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.dealCard = this.dealCard.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit(event) {
   
        event.preventDefault();
    }

    dealCard(amount = 1, targetPlayer = this.state.dealer, isFaceDown = false) {
        let cardValues = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "King", "Queen" ];
        let cardSuites = ["Clubs", "Diamonds", "Hearts", "Spades"];
        let drawnCards = [];
       
     

        for (let i = 0; i < amount.length; i++) {
          
            let alreadyDrawn = true;
            
            do {
          

                let drawnCard = {
                    value: cardValues[Math.floor((Math.random() * cardValues.length))],
                    suite: cardSuites[Math.floor((Math.random() * cardSuites.length))],
                    isFaceDown: isFaceDown
                }

                
                for (this.state.cardsRemoved.card in this.state.cardsRemoved) {

                    if (drawnCard.value === this.state.cardsRemoved.card.value && drawnCard.suite === this.state.cardsRemoved.card.suite ) {
                        alreadyDrawn = true;

                    }
                    else {
                        alreadyDrawn = false;
                        drawnCards.push(drawnCard);
                    
                    }
                    
                }

            } while(alreadyDrawn)

            this.setState({cardsInDeck: this.state.cardsInDeck - 1});

        }

       
        this.setState({targetPlayer: targetPlayer.concat(drawnCards)})

    }

    componentDidMount() {
        if (this.state.settingUpGame) {

            this.dealCard(5, this.state.dealer)
            this.dealCard(this.state.dealer, true)
         
            
            let playerPool = []

            for (let player = 0; player < this.props.players; player++ ) {
                playerPool.push({player: player, hand: [], playerScore: 0})
            }

            this.setState({players: playerPool}, () => {
                for (this.state.players.player in this.state.players) {
                    this.dealCard(2, this.state.players.player)
                }
            })
           
        }
    }

    render() {

        return (
            <div>
                <button type="button" onClick={this.dealCard(1,this.state.players[0].hand)}>Hit Me!</button>
                <button type="button">Hold!</button>
            </div>
        )
    }
}

export default Table;