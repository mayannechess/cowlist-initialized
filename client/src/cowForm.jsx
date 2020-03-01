import React from "react";


class CowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowName: null,
      cowDescription: null
    }
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="cowName" onChange={this.handleInputChange.bind(this)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="cowDescription" onChange={this.handleInputChange.bind(this)} />
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
    );
  }

}

export default CowForm;