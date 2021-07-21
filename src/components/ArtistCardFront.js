import React, { Component } from 'react'

export class ArtistCardFront extends Component {
    render() {
        return (
            <div className='card-front'>
                <div className='card-content'>
                    <h2 className='weight'>🍕🍰🍩</h2>
                    <img className='exercise-name' src={this.props.artist.logo} alt='artist-logo' />
                    <br />
                    <button className='flip-button' onClick={this.props.readMore}>↪</button>
                </div>
            </div>
        )
    }
}

export default ArtistCardFront
