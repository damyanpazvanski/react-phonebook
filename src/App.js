import React, {Component} from 'react';
import { connect } from "react-redux";
import { Route } from 'react-router-dom'

import List from './components/list';
import Show from './components/show';
import Edit from './components/edit';
import Menu from './components/menu';
import Search from './components/search';
import Add from './components/add';

import { getUser, getUsers} from "./actions/userActions";
import store from "./store";

class App extends Component {
    constructor(props) {
        super(props);

        this.props.getUsers();
        this.selectContact = this.selectContact.bind(this);
    }

    componentDidMount() {
        store.subscribe(() => {
            if (this.props.selectedId) {
                this.forceUpdate();
            }
        });
    }

    selectContact(userId) {
        this.props.getUser(userId);

        this.setState(prevState => ({
            selectedId: this.props.selectedId
        }))
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <Menu className="collapse navbar-collapse" />
                        </div>
                    </nav>
                </header>
                <div className="App">
                    <div className="col-md-12">
                        <button className="btn btn-block btn-primary" style={{marginBottom: '30px'}}>Add a new one</button>
                    </div>
                    <div className='col-md-3'>
                        <Search />
                        {this.props.users.slice(0, 4).map((e, i) => (
                            <List selectContact={this.selectContact} key={i} user={e}/>
                        ))}
                    </div>
                    <div className='col-md-6 col-md-offset-2'>
                        <Route path="/show" exact component={() => (<Show user={this.props.selectedId ? this.props.allUsers[this.props.selectedId - 1] : null}/>)} />
                        <Route path="/edit" exact component={() => (<Edit user={this.props.selectedId ? this.props.allUsers[this.props.selectedId - 1] : null}/>)} />
                        <Route path="/add" exact component={() => (<Add update={() => this.forceUpdate()} />)} />
                    </div>
                    <hr/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allUsers: state.user.allUsers,
        users: state.user.users,
        selected: state.user.selected,
        selectedId: state.user.selectedId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers()),
        getUser: (userId) => dispatch(getUser(userId))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);