import React from 'react';
import { connect } from "react-redux";
import { editUser } from "../actions/userActions";

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();

        this.props.editUser({
            id: this.props.user.id,
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value
        });
    }

    render() {
        return (
            <div>
                {this.props.user ? (
                    <form method="POST" onSubmit={this.submitForm}>
                        <div className="alert alert-info">
                            <div><strong>Id: </strong> {this.props.user.id}</div>
                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" ref="firstName" name="firstName" className="form-control" defaultValue={this.props.user.firstName} />
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" ref="lastName" name="lastName" className="form-control" defaultValue={this.props.user.lastName} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" ref="email" name="email" className="form-control" defaultValue={this.props.user.email} />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-block btn-primary">Edit</button>
                            </div>
                        </div>
                    </form>
                ) : (<div className="alert alert-info">Please select a user.</div>)}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editUser: (user) => dispatch(editUser(user))
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Edit);