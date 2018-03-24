import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Die from './Die'
import TextField from 'material-ui/TextField'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidesState: 2
    }
  }
  render () {
    return (
      <Paper className="paper">
        Die Form
        <form>
          Set Number of Sides
          <TextField type="number" className="numPicker"
                     onChange={(e)=> this.setState(({sideState: e.target.value}))}
                     min="2" max="20" step="1" value={this.state.sideState}
          />
        </form>
        <Die numSides={this.state.sideState}/>
      </Paper>
    )
  }
}