import logo from '../logo.svg'
import React from "react"

class Header extends React.Component {
    
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
        <header className="App-header">

              <img src={logo} className="App-logo" alt="logo" />

              <h2>
                Stone Paper Scissor App with React
              </h2>

              <select 
                onChange={this.props.handleChanged}
                name="tab" 
              >
                <option> Person vs Person </option>
                <option> Person vs Computer </option>
              </select>
        </header>
    )
  }
}

export default Header;