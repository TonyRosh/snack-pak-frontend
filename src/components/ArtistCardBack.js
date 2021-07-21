import React, { Component } from 'react'

export class ArtistCardBack extends Component {
    render() {
        return (
            <div className='card-back'>
                <div className='card-content'>
                    <img className='exercise-name' src={this.props.artist.picture} alt='artist-logo' onClick={this.props.readMore} />
                    <br />
                    <h3>{this.props.artist.genre}</h3>
                    <h2 className='weights'>🍕🍰🍩</h2>
                    <h6>{this.props.artist.bio}</h6>
                    <button className='flip-button-back' onClick={this.props.readMore}>↪</button>
                </div>
            </div>
        )
    }
}

export default ArtistCardBack
