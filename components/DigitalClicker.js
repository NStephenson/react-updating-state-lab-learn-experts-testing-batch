const React = require('react')

class DigitalClicker extends React.Component{
  constructor(){
    super();

    this.state = {timesClicked: 0}
    this.clicker = this.clicker.bind(this)
  }

  clicker(){
    this.setState({timesClicked: this.state.timesClicked+= 1})
  }

  render(){
    return(
      <div>
        <button onClick={this.clicker}>{this.state.timesClicked}</button>
      </div>
    )
  }
}



module.exports = DigitalClicker;