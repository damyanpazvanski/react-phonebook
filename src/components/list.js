import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.selectContact = this.selectContact.bind(this);
    }

    selectContact() {
        this.props.selectContact(this.props.user.id);
    }

    render() {
        return (
            <div onClick={this.selectContact} className='alert alert-warning'>
                <div><strong>{this.props.user.firstName} {this.props.user.lastName}</strong></div>
                <small>Email: {this.props.user.email}</small>
            </div>
        );
    }
}
