import React from 'react';

class PatrzDogMeme extends React.Component {
    render(){
       return (<div>
            <h3>{this.props.text}</h3>
            <img onClick={this.props.klik}src={this.props.url} alt={this.props.alt} />
        </div>)
    }
}

export default PatrzDogMeme