import React, { Component } from "react";

export class Formulaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      prenom: "",
      email: "",
    };
  }
  nameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  emailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  prenomChange = (e) => {
    this.setState({ prenom: e.target.value });
  };
  submit = (e) => {
    e.preventDefault();
    alert([this.state.name, this.state.prenom, this.state.email]);
  };
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <form onSubmit={this.submit}>
              <div className='form-group'>
                <input
                  onChange={this.nameChange}
                  type='text'
                  className='form-control'
                  placeholder='entrer name'
                />
                <br />
                <input
                  onChange={this.emailChange}
                  type='text'
                  className='form-control'
                  placeholder='entrer email'
                />
                <br />
                <input
                  onChange={this.prenomChange}
                  type='text'
                  className='form-control'
                  placeholder='entrer prenom'
                />
                <br />
              </div>
              <button
                type='submit'
                className='btn btn-outline-primary btn-block'
              >
                signin
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulaire;
