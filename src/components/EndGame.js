import React from 'react'

class EndGame extends React.Component {
    render() {
        return (

            <div>
                <div className="box box-1">
                <h2> { this.props.player1 } </h2>
                <h3> Score: { this.props.scorePlayer1 } </h3> 
                </div>

                <div className="box box-2">
                <h2> { this.props.player2 } </h2>
                <h3> Score: { this.props.scorePlayer2 } </h3> 
                </div>
            </div>
        )
    }
}

export default EndGame