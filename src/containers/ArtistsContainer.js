import React, { Component } from 'react'
import ArtistCard from '../components/ArtistCard'

export default class ArtistsContainer extends Component {

    handleArtistsCards = () => {
        return this.props.artists.map(artist => {
            return (
            
                    // <div className="artistBox">
                        // <div className="imgBx">
                        <div className="artist-card11"><ArtistCard
                                key={artist.id}
                                artist={artist}
                                flipped={this.props.flipped}
                            />
                        </div>
                    // </div>
            )
        })
    }

    render() {
        return (
            <div>
                {/* <div classNameName='card-container'> */}
                    <section className="sec1" id="artists">
                        {/* <div className="container"> */}
                            {/* <div className="row"> */}
                                {/* <div className="offset-sm-2 col-sm-8"> */}
                                    <div className="headerText text-center">
                                        <h2>The Grease Gang</h2>
                                        <p className="artists">Our stacked line-up of heavy-hitting producers is bonkers. We will rumble the mf rockies with our bass in your face beats! Get to know the crew!</p>
                                        {/* <div className="row"> */}
                                        {/* <div className="col-lg-2"> */}
                                        {/* </div> */}
                                        {/* </div> */}
                                    </div>
                                    <div className="card-container11">
                                    {this.handleArtistsCards()}</div>
                                {/* </div> */}
                            {/* </div> */}
                                            
                                        
                        {/* </div> */}
                    </section>
                {/* </div> */}
            </div>
        )
    }
}




