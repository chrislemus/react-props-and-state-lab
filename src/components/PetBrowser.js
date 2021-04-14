import React from "react";
import Pet from "./Pet";

class PetBrowser extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     pets: [],
  //   };
  // }

  render() {
    return (
      <div className="ui car= this.propsds">
        {this.props.pets.map((pet) => (
          <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />
        ))}
      </div>
    );
  }
}

export default PetBrowser;
