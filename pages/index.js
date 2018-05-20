import React from 'react'
import Head from 'next/head'
import Button from '../components/button'

export default class Counter extends React.Component {
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
      <React.Fragment>
        <Head>
          <title> 18 </title>
          <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' />
        </Head>
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
            }
            button {
              width: 100%;
              margin: 0 10%;
              height: 15vh;
              font-size: 12vh;
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
      </React.Fragment>
    )
  }
}
