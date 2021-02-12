import React, { Component } from "react";
import axios from "axios";

class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  state = {
    plants: [],
    search: ''
  }
  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  componentDidMount() {
    axios.get('http://localhost:3333/plants')
      .then(res => {
        console.log(res);
        this.setState({
          plants: res.data.plantsData
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
  })
}
  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        <div className="search-container">
          <label htmlFor="search">Search Plants By Name:
            <br/>
            <input 
            id="search"
            type="text"
            name="search"
            placeholder="Sort Through Plants"
            onChange={this.handleChange}
            value={this.state.search}
            />
          </label>
        </div>
        {this.state?.plants?.filter(plant => plant.name.includes(this.state.search)).map((plant) => (
          <div className="plant-card" key={plant.id} data-testid="plant-card">
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}

export default PlantList;
