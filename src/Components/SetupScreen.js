import React from 'react';

class SetupScreen extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        number of players:
                        <input type="text" name="players" value={this.props.players} onChange={this.props.handleChange} disabled/>
                    </label>
                    <br />
                    <label>
                        number of decks:
                        <input type="text" name="decks" value={this.props.decks} onChange={this.props.handleChange} disabled/>
                    </label>
                    <br />
                    <input type="submit" value="Start the game" />
                </form> 
            </div>
        )
    }
}

export default SetupScreen;