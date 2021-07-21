import React, { Component } from 'react'
import ReleaseCard from '../components/ReleaseCard'

export class ReleasesContainer extends Component {

    handleReleaseCards = () => {
        return this.props.releases.map(release => {
            return (
                <div className="row">
                    {/* <div className="col-sm-6"> */}
                    <div className="releaseposts">
                        <div className="imgBx">
                            <ReleaseCard
                                key={release.id}
                                release={release}
                            />
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            )
        })
    }

    render() {
        return (
            <div className='card-body card-bodyy'>
                <div className='card-container card-containerR'>
                    <section className="releases" id="releases">
                        <div className="container1">
                            {/* <div className="row"> */}
                            {/* <div className="offset-sm-2 col-sm-8"> */}
                            <div className="headerText1 text-center">
                                <h2>Fresh Releases</h2>
                                <p>Take a look at the most recent candy-coated beats we have dropped and stay tuned for what's to come!</p>
                                {/* <div className="row"> */}
                                {/* <div className="col-sm-10"> */}
                                {/* </div> */}
                                {/* </div> */}
                            </div>
                            {this.handleReleaseCards()}
                        </div>
                        {/* </div> */}


                        {/* </div> */}
                    </section>
                </div>
            </div>
        )
    }
}

export default ReleasesContainer
