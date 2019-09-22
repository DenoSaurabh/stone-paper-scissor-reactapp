import React from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import PlayervsComputer from './components/PvC';
import LeaderBoard from './components/leaderboard';
import score from './functions/score';
import speech from './vendors/speechSynthesis';

let num = 5;
let leaders = []

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      images: ['stone', 'paper', 'scissor'],
      tab: 'Person vs Person',
      choice: 'stone',

      player1Score: 0,
      player2Score: 0,

      currentPlayer1Status: 'paper',
      currentPlayer2Status: 'paper',

      imageUrl1: './paper.png',
      imageUrl2: './paper.png',

      name1: 'Sourabh',
      name2: 'Shubham Gupta',

      PvCplayChosen: false,
      leader: []

    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRestart = this.handleRestart.bind(this)
    this.endGame = this.endGame.bind(this)

  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    })

    if (name === 'tab') {
      this.setState({
        player1Score: 0,
        player2Score: 0,
      })
    }


  }

  styleComputer() {
    return {
      opacity: 0
    }
  }

  endGame() {

    if (this.state.tab === 'Person vs Person') {

        leaders.push({

            name1: this.state.name1,
            score1: this.state.player1Score,

            name2: this.state.name2,
            score2: this.state.player2Score

        })
  } else {

    leaders.push({

      name1: this.state.name1,
      score1: this.state.player1Score,

      name2: 'Computer',
      score2: this.state.player2Score
    })

  }

   this.setState({leader: leaders})
   this.init()


  }

  randomImg() {
    let randomNo = Math.round( Math.random() * 2 )
    let image = this.state.images[randomNo]
    let imageURL = './' + image + '.png'

    return imageURL
  }

  renderingLeaders() {

     let allLeaders = this.state.leader.map((el, i) => {

      return (
        <LeaderBoard 
            player1={this.state.leader[i].name1}
            player2={this.state.leader[i].name2}
            player1Score={this.state.leader[i].score1}
            player2Score={this.state.leader[i].score2}

            key={i}
        />

      )
    })

    return allLeaders

  }

  styleLeaders() {
    return {
      display: 'block',
      position: 'relative',
      top: 200+'px',
      width: 100+'%',
      backgroundColor: 'white',
      height: 80+'px',
      letterSpacing: 4+'px',
      color: 'black',
      fontSize: 50+'px',
      marginBottom: 150+'px'
    }
  }

  init() {
    this.setState({
      images: ['stone', 'paper', 'scissor'],
      tab: 'Person vs Person',
      choice: 'stone',
      player1Score: 0,
      player2Score: 0,
      currentPlayer1Status: 'paper',
      currentPlayer2Status: 'paper',
      imageUrl1: './paper.png',
      imageUrl2: './paper.png',
      name1: 'Saurabh',
      name2: 'Shubham',
      PvCplayChosen: false,
    })
  }

 
  handleRestart() { window.location.reload() }
  
  handleClick() {

        let { scoreplayer1, scoreplayer2 } = score(  
          this.state.currentPlayer1Status,
          this.state.currentPlayer2Status,
          this.state.player1Score,
          this.state.player2Score )

              
          if ( scoreplayer1 < 0 ) { scoreplayer1 = 0 } 
          else if ( scoreplayer2 < 0 ) { scoreplayer2 = 0 }

          this.setState({ 
          player1Score: scoreplayer1,
          player2Score: scoreplayer2
          })

        // ? BOX 1 IMAGE
        let randomNo1 = Math.round( Math.random() * 2 )
        let image1 = this.state.images[randomNo1]
        let imgURL1 = './' + image1 + '.png'
        this.setState({imageUrl1: imgURL1})
        this.setState({currentPlayer1Status: image1})       
        
        // ? BOX 2 IMAGE
        let randomNo2 = Math.round( Math.random() * 2 )
        let image2 = this.state.images[randomNo2]
        let imageURL2 = './' + image2 + '.png'
        this.setState({imageUrl2: imageURL2})
        this.setState({currentPlayer2Status: image2})


        if (num%5 === 0) {

          if (this.state.tab === 'Person vs Person') {

            speech(this.state.name1,
                  this.state.player1Score,
                  this.state.name2,
                  this.state.player2Score)
            } else {

              speech(this.state.name1,
                this.state.player1Score,
                'Computer',
                this.state.player2Score)
            }
        }
           num++
                     
  }
  
  render() {

    if (this.state.tab === 'Person vs Person') {

        return (

          <div className="App">
          <Header 
                handleChanged={ this.handleChange }
          />

          <Main           
                imgURL1={ this.state.imageUrl1 } 
                imgURL2={ this.state.imageUrl2 }

                handleClick={ this.handleClick }
                handleChange={ this.handleChange }
                restartButton={ this.handleRestart }
                endGame={ this.endGame }

                scorePlayer1={ this.state.player1Score }
                scorePlayer2={ this.state.player2Score }

                player1={ this.state.name1 }
                player2={ this.state.name2 }                                   
          />

          <h3 style={this.styleLeaders()}> Leaders </h3>

          {this.renderingLeaders()}

          </div>

        );
    
    
    
    } else {
      return (
        <div className="App">

          <Header 
              handleChanged={ this.handleChange }
          />

          <PlayervsComputer 

            imgURL1={ './'+this.state.choice+'.png' } 
            imgURL2={ this.state.imageUrl2 }

            styleComputer={ this.styleComputer }

            handleClick={ this.handleClick }
            handleChange={ this.handleChange }
            restartButton={ this.handleRestart }
            handleChoice={ this.handleChange }
            endGame={ this.endGame }

            scorePlayer1={ this.state.player1Score }
            scorePlayer2={ this.state.player2Score }

            player1={ this.state.name1 }
            player2={'Computer'}  

          />

          <h3 style={this.styleLeaders()}> Leaders </h3>

          {this.renderingLeaders()}

        </div>

      );
    }    
  }
}

export default App;





