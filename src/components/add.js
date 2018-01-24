import React from 'react';
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";

class Add extends React.Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();

        this.props.addUser({
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value
        });

        this.props.update();
    }

    render() {
        return (
            <div>
                <form method="POST" onSubmit={this.submitForm}>
                    <div className="alert alert-info">
                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" ref="firstName" name="firstName" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" ref="lastName" name="lastName" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" ref="email" name="email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-block btn-primary">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Add);