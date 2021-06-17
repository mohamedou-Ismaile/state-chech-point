
import './App.css';
import React, { Component } from 'react'
import imageSrc from "./imageSrc.png";
export default class Test extends Component {
  state = {
    Person :{
      fullName: 'Ismaile Mohamedou',
      bio : 'is student',
      imageSrc: imageSrc,
      profession : 'Js developper'
    },
    visibility : false
  }
  toggleVisibility =(e) =>{
    this.setState({
      visibility: !this.state.visibility
      })
};
 
  render() {
    if (this.state.visibility) {
    return (
      <div className="App">
        <div>
          <span>FullName: {this.state.Person.fullName}</span>
          </div>
          <div>
          <span>Bio: {this.state.Person.bio}</span>
          </div>
          <div>
            <img src={this.state.Person.imageSrc} alt=""/>
          
          </div>
          <div>
          <span>Profession: {this.state.Person.profession}</span>
          </div>
          <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
        
      </div>
    )
  }
  else{
    return(
<div className="App">
          <button onClick={this.toggleVisibility}>Click to show</button>
        </div>
    );
  }
}
}
