import React from 'react'
import Button from '../components/button'

export default class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = { count: 18 }
    this.reduce = this.reduce.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  reduce (num) {
    return () => { this.setState({ count: this.state.count - num }) }
  }

  reset () {
    this.setState({ count: 18 })
  }

  render () {
    return (
      <div id='container'>
        <h1 id='count'> {this.state.count} </h1>
        <div id='rock-scissors-paper'>
          <Button onclick={this.reduce(0)} disabled={this.state.count < 0} name='✊' />
          <Button onclick={this.reduce(2)} disabled={this.state.count < 2} name='✌' />
          <Button onclick={this.reduce(5)} disabled={this.state.count < 5} name='✋' />
        </div>
        <div id='reset'>
          <Button onclick={this.reset} disabled={false} name='Reset' />
        </div>
        <style jsx global>{`
          * {
            padding: 0;
            margin: 0;
          }
          body {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: fixed;
          }
          button {
            width: 100%;
            margin: 0 10%;
            height: 15vh;
            font-size: 10vh;
            background: none;
            border: none;
          }
          button[disabled] {
            opacity: 0.3;
          }
        `}</style>
        <style jsx>{`
          #container {
            width: 80vw;
            max-width: 960px;
            height: 100vh;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            position: fixed;
            transform: translateX(-50%) translateY(-50%);
          }
          #rock-scissors-paper {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          #reset {
            width: 50vw;
            max-width: 480px;
            display: flex;
            justify-content: center;
          }
          #count {
            font-size: 20vmin;
          }
        `}</style>
      </div>
    )
  }
}
