// import count from '../components/count'
import Button from '../components/button'

import { Component } from 'react'

export default class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = { count: 18 }
    this.reduce = this.reduce.bind(this)
    this.reset = this.reset.bind(this)
  }

  reduce (num) {
    return () => { this.setState({ count: this.state.count - num }) }
  }

  reset () {
    this.setState({ count: 18 })
  }

  render () {
    return (
      <div>
        <h1> {this.state.count} </h1>
        <div className='rock-scissors-paper'>
          <Button onclick={this.reduce(0)} disabled={this.state.count < 0} name='Rock' />
          <Button onclick={this.reduce(2)} disabled={this.state.count < 2} name='Scissors' />
          <Button onclick={this.reduce(5)} disabled={this.state.count < 5} name='Paper' />
        </div>
        <Button onclick={this.reset} disabled={false} name='Reset' />
      </div>
    )
  }
}
