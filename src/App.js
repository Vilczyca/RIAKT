import React from 'react';
import PatrzDogMeme from './DogMeme';
class OwieczkaApp extends React.Component { //nasza klasa OwieczkaApp rozszerza metody o nasze

constructor(){ //takie coś jak plan do budynku
super()

this.state = {
url: "", //wyświetla obrazek
text: "Jakiś text",
alt: "Dog meme"
}
this.getDogPhoto = this.getDogPhoto.bind(this)
}

componentDidMount() {
  this.getDogPhoto()
}

getDogPhoto(){
 // this.setState ---> zmienia stan\
 fetch("https://dog.ceo/api/breeds/image/random")
 .then(odpowiedz => odpowiedz.json())
 .then( data => this.setState({url: data.message}))
}

  render(){
    return(<div>
      <PatrzDogMeme klik={this.getDogPhoto} text = {this.state.text} alt={this.state.alt} url={this.state.url}/>
    </div>)
  }
}

export default OwieczkaApp