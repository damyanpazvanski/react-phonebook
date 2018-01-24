import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul className="nav navbar-nav">
                    <li><a><strong>Phonebook</strong></a></li>
                    <li><NavLink exact activeClassName="selected" to="/show">Home</NavLink></li>
                    <li><NavLink exact activeClassName="selected" to="/edit">Edit</NavLink></li>
                    <li><NavLink exact activeClassName="selected" to="/add">Add</NavLink></li>
                </ul>
            </div>
        );
    }
}
