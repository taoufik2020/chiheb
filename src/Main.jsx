import React, { Component, useState } from "react";
import { NavLink, Route, HashRouter, Router } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Formulaire from "./Formulaire";
import Galerie from "./Galerie";

import "./index.css";
export class Main extends Component {
  render() {
    return (
      <HashRouter>
        <h1>Simple SPA</h1>
        <ul className='header'>
          <li>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/stuff'>Stuff</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/galerie'>Galerie</NavLink>
          </li>
          <li>
            <NavLink to='/form'>Login</NavLink>
          </li>
        </ul>

        <div className='content'>
          <Route exact path='/' component={Home} />
          <Route exact path='/stuff' component={Stuff} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/galerie' component={Galerie} />
          <Route exact path='/form' component={Formulaire} />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
