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
    pageTitle: 'Cars'
  }

  changeTitleHandler = () => {
    let oldTitle = this.state.pageTitle
    const newTitle = oldTitle + ' changed'
    this.setState({
      pageTitle: newTitle
    })
  }


  render() {
    console.log('Render...')
    const cars = this.state.cars;
    const carsList = cars.map((car, key) => (
      <Car name={car.name} year={car.year} key={key}/>
    ))

    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.changeTitleHandler}>Change title</button>
        {carsList}
      </div>
    );
  }
}

export default App;
