import React, { Component } from 'react'

export class Contact extends Component {

    stopReload = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <section className="contact" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="headerText text-center">
                                    <h2>Contact Us!</h2>
                                    <p>For booking and demos, contact us below!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix text-center">
                            <div className="offset-sm2 col-sm-8">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Social Media/Music Links</label>
                                        <input type="text" name="" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control textarea" name=""></textarea>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Sign Up For Our Mailing List!
                                        </label>
                                    </div>
                                    <div className="form-group text-center">
                                        <button className="btn btnD2" onClick={this.props.stopReload}>Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact
