import React from "react"

export default class LeaderBoard extends React.Component {

    stylebox() {
        return {
            marginTop: 100+'px',
            color: 'black',
            width: 100+'%',
            backgroundColor: 'lightgrey',
            marginBottom: 0+'px'
        }
    }

    styleh4() {
        return {
            display: 'inline-block',
            marginLeft: 0+'%',
            position: 'relative',
            left: -80+'px'

        }
    }

    styleh4LastChild() {
        return {
            display: 'inline-block',
            marginRight: 0+'%',
            position: 'relative',
            right: -80+'px',
            marginBottom: 0+'px'
        }
    }

    h2Style() {
        return {
            display: 'inline-block',
            textAlign: 'center'
        }
    }


    render() {
        return (
                <div style={this.stylebox()} >
                    <h4 style={this.styleh4()}> {this.props.player1} : {this.props.player1Score} </h4>
                    <h4 style={this.styleh4LastChild()}> {this.props.player2} : {this.props.player2Score} </h4>
                </div>
        )
    }
}