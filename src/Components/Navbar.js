import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex', padding: '1rem', backgroundColor : 'lightblue'}}>
        <h1>My Movie</h1>
        <h2 style={{marginLeft : '4rem', marginTop:'1.8rem'}}>Favorite</h2>
      </div>
    )
  }
}
