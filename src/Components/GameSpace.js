import React from 'react';
import SetupScreen from './SetupScreen';
import Table from './Table';


class GameSpace extends React.Component {
    constructor(props) {
        super(props) 
        
            this.state = {
                gameStarted: false,
                decks: 1,
                players: 1,
              
                
            }

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit(event) {
        this.setState({gameStarted: true}, () => {
            
            
        })
        event.preventDefault();
        
    }

    render() {
        
            return (
                <div>
                {
                this.state.gameStarted ?
                    
                        <Table
                        players = {this.state.players}
                        />
                    
                :
               
                 
                        <SetupScreen 
                        decks = {this.state.decks}
                        players = {this.state.players}
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit}
                        
                        />
                   
                }

                </div>
            )
            
    
    }
}

export default GameSpace;