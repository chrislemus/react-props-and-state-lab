import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  onChangeType = (type) => {
    this.setState((pState) => {
      return {
        filters: {
          ...pState.filters,
          type: type,
        },
      };
    });
  };
  onFindPetsClick = () => {
    let petType = this.state.filters.type;
    petType = petType === "all" ? "" : `?type=${petType}`;
    fetch("/api/pets" + petType)
      .then((res) => res.json())
      .then((pets) => this.setState({ pets }));
  };

  componentDidMount() {
    this.onFindPetsClick();
  }

  onAdoptPet = (id) => {
    this.setState((prevState) => {
      const updated = prevState.pets.map((pet) =>
        pet.id === id ? { ...pet, isAdopted: true } : pet
      );
      return { pets: updated };
    });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                type={this.state.filters.type}
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
