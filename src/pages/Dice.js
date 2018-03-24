import React, { Component } from 'react'
import DieForm from '../components/dice/DieForm'
import Die from '../components/dice/Die'

export default class extends Component {
  render () {
    return (
      <div>
        Dice
        <Die numSides={6}/>
        <DieForm/>
      </div>
    )
  }
}