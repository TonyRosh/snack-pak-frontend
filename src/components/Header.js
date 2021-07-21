import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <a className="navbar-brand" href="#home">🍕🍰🍩</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="burg">🍔<br/><p className="m">Menu</p></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-lg-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#artists">The Crew</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#featured">Featured Music</a>
                                    </li> 
                                    <li className="nav-item">
                                        <a className="nav-link" href="#releases">Releases</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header
