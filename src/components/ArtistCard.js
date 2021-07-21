import React from 'react'
import ArtistCardFront from '../components/ArtistCardFront'
import ArtistCardBack from '../components/ArtistCardBack'
import ReactCardFlip from 'react-card-flip'

class ArtistCard extends React.Component {

    state = {
        "isFlipped": false
    }

    readMore = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !this.state.isFlipped }));
  
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

                <ArtistCardFront readMore={this.readMore} artist={this.props.artist} />

                <ArtistCardBack readMore={this.readMore} artist={this.props.artist} />

            </ReactCardFlip>
        )
    }
}


export default ArtistCard



// class App extends React.Component {
//   constructor() {
//     super();
//       this.state = {
//       isFlipped: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     e.preventDefault();
//     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
//   }

//   render() {
//     return (
//       <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
//         <YOUR_FRONT_CCOMPONENT>
//           This is the front of the card.
//           <button onClick={this.handleClick}>Click to flip</button>
//         </YOUR_FRONT_CCOMPONENT>

//         <YOUR_BACK_COMPONENT>
//           This is the back of the card.
//           <button onClick={this.handleClick}>Click to flip</button>
//         </YOUR_BACK_COMPONENT>
//       </ReactCardFlip>
//     )
//   }
// }