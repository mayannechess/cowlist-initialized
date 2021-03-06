import React from "react";

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateCow: "",
      newDescription: ""
    };
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    this.props.handler(this.state.updateCow, this.state.newDescription);
  }

  render() {
    let options = this.props.cows.map((cow) => {
      return (<option key={cow.id}>{cow.name}</option>);
    });

    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Update a cow:
          <select name="updateCow" onChange={this.handleInputChange.bind(this)}>
            <option>select</option>
            {options}
          </select>
        </label>
        <br />
        <label>
          New description:
          <input name="newDescription" type="text" onChange={this.handleInputChange.bind(this)} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default UpdateForm;