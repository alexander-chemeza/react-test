import './App.css';
import Car from './Car/Car';
import React, { Component } from 'react';

class App extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Mazda', year: 2017},
      {name: 'Audi', year: 2016},
    ],
    pageTitle: 'Cars',
    showCars: false
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }


  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value 
    })
  }

  toggleCarsBtnHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }
  
  render() {
    console.log('Render...')
    const cars = this.state.cars;
    const carsList = cars.map((car, index) => (
      <Car 
        name={car.name} 
        year={car.year} 
        key={index}
        onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
      />
    ))

    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.handleInput}/>
        <button onClick={this.changeTitleHandler.bind(this, this.state.pageTitle + ' changed')}>Change title</button>
        <button onClick={this.toggleCarsBtnHandler}>Toggle</button>
        {this.state.showCars ? carsList : <p>List is empty</p>}
      </div>
    );
  }
}

export default App;
