
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Col,Row,Button} from 'react-bootstrap';
import React, { Component } from 'react'
import imageSrc from "./imageSrc.png";

export default class App extends Component {
  
  state = {
    Person :{
      fullName: 'Ismaile Mohamedou',
      bio : 'is student',
      imageSrc: imageSrc,
      profession : 'Js developper'
    },
    visibility : false,
    count :0
  }
  setInterval=()=>{
    this.myInterval = setInterval(()=>{
      this.setState(prevState =>({
        count : prevState.count +1
      }))
    },1000)
  }
  clearInterval=()=>{
    clearInterval(this.myInterval)
  }

 toggleVisibility =(e) =>{
    this.setState({
      visibility: !this.state.visibility
      });
     this.setInterval();
     
}; 
toggleVisibilityH =(e) =>{
  this.setState({
    visibility: !this.state.visibility,
    count:0
    });
   this.clearInterval();
   
};
 
  render() {
    const {count}=this.state;
    if (this.state.visibility) {
      return (
        <div className="App">
          <Row className="justify-content-center pt-5  " > 
        <Col xs="6" md="3">
            <Card  bg="dark">
            <Card.Img variant="top" src={this.state.Person.imageSrc} xs="3" md="2" />
            <Card.Body style={{color: 'white'}} >
            <Card.Title >{this.state.Person.fullName}</Card.Title> 
            <Card.Text>{this.state.Person.bio}</Card.Text>
            <Card.Text>{this.state.Person.profession}</Card.Text>

            </Card.Body>
 <Card.Footer>
      <small className="text-muted"><Button className="btn btn-success" onClick={this.toggleVisibilityH}>Hide</Button></small>
    </Card.Footer>
            </Card>
</Col>
</Row>
<p className="App-clock">
        The time is {count}.
      </p>
        </div>
      
      )
    }
    else{
      return(
  <div className="App pt-5">
            <Button className="btn btn-success" onClick={this.toggleVisibility}>Show</Button>
          </div>
      );
    }
}
}
