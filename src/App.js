
import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import ArtistsContainer from './containers/ArtistsContainer'
import Featured from './components/Featured'
import ReleasesContainer from './containers/ReleasesContainer'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  const [artists, setArtists] = useState([]);
  const [releases, setReleases] = useState([]);

  const getArtists = () => {
    fetch('http://localhost:3000/artists/')
      .then(response => response.json())
      .then(apiArtists => setArtists(apiArtists))
  }

  const getReleases = () => {
    fetch('http://localhost:3000/releases/')
      .then(response => response.json())
      .then(apiReleases => setReleases(apiReleases))
  }

  useEffect(getArtists, [])

  useEffect(getReleases, [])

  let progress1 = document.getElementById('progressbar');
  
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function(){
    const progressHeight = (window.pageYOffset / totalHeight) * 75;
    progress1.style.height = progressHeight + "%";
  }

  return (
    <div className="App">
    <div id="progressbar"></div>
    <div id="scrollPath"></div>

    <Header />
    <Intro />
    <ArtistsContainer artists={artists} />
    <Featured />
    <ReleasesContainer releases={releases} />
    <Contact />
    <Footer />
    



      {/* <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#home"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-lg-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#artists">The Crew</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#featured">Featured Mix</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#releases">Releases</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header> */}



      {/* <div class="jumbotron jumbotron-fluid height100p banner" id="home">
        <div class="container h100">
          <div class="contentBox h100">
            <div>
              <p class="descrip">Bringing you the heaviest hitters in the edm scene, grab a slice a pizza and get ready to get the fuck down. Welcome to the Snack Pak 🍕</p>
            </div>
          </div>
        </div>
      </div> */}



      {/* <section class="sec1" id="artists">
        <div class="container">
          <div class="row">
            <div class="offset-sm-2 col-sm-8">
              <div class="headerText text-center">
                <h2>The Grease Gang</h2>
                <p class="artists">Our stacked line-up of heavy-hitting producers is bonkers. We will rumble the mf rockies with our bass in your face beats! Get to know the crew!</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBx">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBx">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBox">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBox">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBox">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBox">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBox">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBox">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBox">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBox">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBox">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBox">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBox">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBox">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="artistBox">
                <div class="imgBox">
                  <img src="https://i.imgur.com/VSQRZhr.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}



      {/* <section class="sec2" id="featured">
        <div class="container h100">
          <div class="contentBox h100">
            <div>
              <h2>Whats Cookin?!</h2>
              <p>With talent stacked higher than your morning pancakes, you bet that we are constantly releasing new music! Every month we let one of our artist showcase all the tastey new beats we have been dropping! Here's this months mix, brought to you by Snax!</p>
              <a href='https://www.facebook.com/tony.skrillz/videos/10206924747873439' class="btn btnD1">Featured Music</a>
            </div>
          </div>
        </div>
      </section> */}


      {/* <section class="releases" id="releases">
        <div class="container">
          <div class="row">
            <div class="offset-sm-2 col-sm-8">
              <div class="headerText text-center">
                <h2>Our Releases</h2>
                <p>Take a look at all of the candy-coated beats we have dropped so far and stay tuned for what's to come!</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="releaseposts">
                <div class="imgBx">
                  <img src="https://i.imgur.com/EjrOHZ2.jpg" class="img-fluid" />
                </div>
                <div class="content">
                  <h5>Album Title</h5>
                  <h6>Artist</h6>
                  <a href="#" class="btn btnD1">Listen Here!</a>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="releaseposts">
                <div class="imgBx">
                  <img src="https://i.imgur.com/EjrOHZ2.jpg" class="img-fluid" />
                </div>
                <div class="content">
                  <h5>Album Title</h5>
                  <h6>Artist</h6>
                  <a href="#" class="btn btnD1">Listen Here!</a>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="releaseposts">
                <div class="imgBx">
                  <img src="https://i.imgur.com/EjrOHZ2.jpg" class="img-fluid" />
                </div>
                <div class="content">
                  <h5>Album Title</h5>
                  <h6>Artist</h6>
                  <a href="#" class="btn btnD1">Listen Here!</a>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="releaseposts">
                <div class="imgBx">
                  <img src="https://i.imgur.com/EjrOHZ2.jpg" class="img-fluid" />
                </div>
                <div class="content">
                  <h5>Album Title</h5>
                  <h6>Artist</h6>
                  <a href="#" class="btn btnD1">Listen Here!</a>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}



      {/* <section class="contact" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="headerText text-center">
                <h2>Contact Us!</h2>
                <p>For booking and demos, contact us below!</p>
              </div>
            </div>
          </div>
          <div class="row clearfix text-center">
            <div class="offset-sm2 col-sm-8">
              <form>
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" name="" class="form-control" />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" name="" class="form-control" />
                </div>
                <div class="form-group">
                  <label>Social Media/Music Links</label>
                  <input type="text" name="" class="form-control" />
                </div>
                <div class="form-group">
                  <label>Message</label>
                  <textarea class="form-control textarea" name=""></textarea>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Sign Up For Our Mailing List!
                  </label>
                </div>
                <div class="form-group text-center">
                  <button class="btn btnD2">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}


      {/* <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div id="wrapper">
                <div class="footer">
                  <a href="mailto:adrprogramming@gmail.com" id="gmail"><i class="fa fa-google"></i></a>
                  <a href="https://www.linkedin.com/in/tony-roscioli-00388220b/" target="_blank" rel="noopener noreferrer" id="linkedin"><i class="fa fa-linkedin"></i></a>
                  <a href="https://github.com/TonyRosh" target="_blank" rel="noopener noreferrer"><i class="fa fa-github" id="github"></i></a>
                  <a href="https://www.facebook.com/tony.roscioli/" target="_blank" rel="noopener noreferrer" id="facebook"><i class="fa fa-facebook-official"></i></a>
                  <a href="https://www.reddit.com/user/Temporary_Lobster7" target="_blank" rel="noopener noreferrer" id="reddit"><i class="fa fa-reddit"></i></a>
                  <a href="https://twitter.com/snack_pak_snax" target="_blank" rel="noopener noreferrer" id="twitter"><i class="fa fa-twitter"></i></a>
                  <a href="https://soundcloud.com/musicpizzasnax" target="_blank" rel="noopener noreferrer"><i class="fa fa-soundcloud" id="soundcloud"></i></a>
                  <p class="cpryt">
                    © CopyRight 2021 SPR | Powered by CoffeeFreaks ☕️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}



    </div>
    
  );
}

export default App;












// import React, { Component } from 'react';
// import './App.css';
// import Header from './components/Header'
// import Intro from './components/Intro'
// import ArtistsContainer from './containers/ArtistsContainer'
// import Featured from './components/Featured'
// import ReleasesContainer from './containers/ReleasesContainer'
// import Contact from './components/Contact'
// import Footer from './components/Footer'



// export default class App extends Component {


//   state = {
//     "artists": [],
//     "releases": []
//   }


//   componentDidMount() {
//     fetch('http://localhost:3000/artists/')
//       .then(response => response.json())
//       .then(artist => {
//         this.setState({
//           "artists": artist
//         })
//       })
//   }


//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Intro />
//         <ArtistsContainer artists={this.state.artists} />
//         <Featured />
//         <ReleasesContainer />
//         <Contact />
//         <Footer />
//       </div>
//     )
//   }
// }