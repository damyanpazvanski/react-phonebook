import React, {Component} from 'react';
import { searchUser } from "../actions/userActions";
import {connect} from "react-redux";

class Search extends Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
    }

    search() {
        this.props.searchUser(this.refs.search.value);
    }

    render() {
        return (
            <div className="row" style={{marginBottom: '20px'}}>
                <div className="col-lg-12">
                    <input type="text" className="form-control" ref="search" name="search" onChange={this.search} placeholder="Search for..." />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchUser: (text) => dispatch(searchUser(text))
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Search);