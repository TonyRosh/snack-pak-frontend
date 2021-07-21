import React, { Component } from 'react'

export class ReleaseCard extends Component {
    render() {
        return (
            <div>
                    <img className='release-image' src={this.props.release.image} alt='album-cover'/>
                <div className="content">
                    
                    <h5>{this.props.release.title}</h5>
                    <h6>{this.props.release.artist.name}</h6>
                    <a href={this.props.release.link} className="btn btnD1" target="_blank" rel="noopener noreferrer">Listen Here!</a>
                </div>
                    <div className="clearfix"></div>
            </div>
        )
    }
}

export default ReleaseCard
