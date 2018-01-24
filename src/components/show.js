import React from 'react';

export default class Show extends React.Component {
    render() {
        return (
            <div>
                {this.props.user ? (
                    <div className="alert alert-info">
                        <div><strong>Id: </strong> {this.props.user.id}</div>
                        <div><strong>Name: </strong> {this.props.user.firstName} {this.props.user.lastName}</div>
                        <div><strong>Email: </strong> {this.props.user.email}</div>
                    </div>
                ) : (<div className="alert alert-info">Please select a user.</div>)}
            </div>
        );
    }
}
